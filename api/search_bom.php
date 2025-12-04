<?php
/**
 * Serente Electronics - BOM Search API
 * Handles searching for multiple parts from a JSON payload.
 */

// CORS Headers - Allow access from any origin (or restrict to your domain in production)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database Configuration
$host = 'localhost';
$db_name = 'serente_db';
$username = 'your_username';
$password = 'your_password';

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Connection failed: " . $e->getMessage()]);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents("php://input"));

if (!empty($data) && is_array($data)) {
    $partNumbers = $data;
    
    // Sanitize input (remove empty strings, trim)
    $partNumbers = array_filter(array_map('trim', $partNumbers));
    
    if (empty($partNumbers)) {
        echo json_encode(["found_items" => [], "missing_items" => []]);
        exit();
    }

    // Prepare placeholders for IN clause
    $placeholders = implode(',', array_fill(0, count($partNumbers), '?'));
    
    // Query to find existing parts
    $sql = "SELECT id, part_number, manufacturer, description, stock, price 
            FROM products 
            WHERE part_number IN ($placeholders)";
            
    $stmt = $conn->prepare($sql);
    $stmt->execute($partNumbers);
    
    $foundItems = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Determine missing items
    $foundPartNumbers = array_column($foundItems, 'part_number');
    // Case-insensitive comparison might be needed depending on DB collation, 
    // but here we assume exact match or DB handles it.
    // For strict checking in PHP:
    $missingItems = array_diff($partNumbers, $foundPartNumbers);

    echo json_encode([
        "found_items" => $foundItems,
        "missing_items" => array_values($missingItems)
    ]);

} else {
    http_response_code(400);
    echo json_encode(["error" => "Invalid input. Expected a JSON array of part numbers."]);
}
?>
