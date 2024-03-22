<?php

// Dummy data for demonstration
$users = [
  ["id" => 1, "name" => "User 1", "email" => "user1@example.com"],
  ["id" => 2, "name" => "User 2", "email" => "user2@example.com"]
];

$workers = [
  ["id" => 1, "name" => "Worker 1", "position" => "Position 1"],
  ["id" => 2, "name" => "Worker 2", "position" => "Position 2"]
];

$brokers = [
  ["id" => 1, "name" => "Broker 1", "company" => "Company 1"],
  ["id" => 2, "name" => "Broker 2", "company" => "Company 2"]
];

// Get category from the request
$category = $_GET['category'] ?? '';

// Return JSON response based on category
switch ($category) {
  case 'users':
    echo json_encode($users);
    break;
  case 'workers':
    echo json_encode($workers);
    break;
  case 'brokers':
    echo json_encode($brokers);
    break;
  default:
    echo json_encode([]);
}