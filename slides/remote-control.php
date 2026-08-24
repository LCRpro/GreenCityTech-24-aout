<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');

function respond(array $data, int $status = 200): void {
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

$session = $_GET['session'] ?? '';
if (!is_string($session) || !preg_match('/^[0-9]{4}$/', $session)) {
    respond(['error' => 'Code de session invalide.'], 400);
}

$file = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'gct-remote-' . hash('sha256', $session) . '.json';
$handle = fopen($file, 'c+');
if ($handle === false || !flock($handle, LOCK_EX)) {
    respond(['error' => 'Relais temporairement indisponible.'], 503);
}

$contents = stream_get_contents($handle);
$state = json_decode($contents ?: '', true);
if (!is_array($state)) {
    $state = ['sequence' => 0, 'action' => 'none', 'slide' => null, 'updatedAt' => 0];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $payload = json_decode(file_get_contents('php://input') ?: '', true);
    $action = is_array($payload) ? ($payload['action'] ?? '') : '';
    if (!in_array($action, ['next', 'prev', 'goto'], true)) {
        flock($handle, LOCK_UN); fclose($handle);
        respond(['error' => 'Commande invalide.'], 400);
    }
    $state['sequence'] = (int) $state['sequence'] + 1;
    $state['action'] = $action;
    $state['slide'] = $action === 'goto' ? (int) ($payload['slide'] ?? 0) : null;
    $state['updatedAt'] = time();
    rewind($handle);
    ftruncate($handle, 0);
    fwrite($handle, json_encode($state));
    fflush($handle);
}

flock($handle, LOCK_UN);
fclose($handle);
respond($state);
