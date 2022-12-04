<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Max-Age: 3600');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, Auth-Token, X-Requested-With');


$dir = str_replace("/api", "", __DIR__);
$path = $dir;
if ($_GET['dir']) $dir .= $_GET['dir'];
// echo "$dir\r\n";

$list = array_filter(scandir($dir), function($item) {
  return $item !== "." && $item !== "api";
});
// array_shift($list);
// $files2 = scandir($dir, SCANDIR_SORT_DESCENDING);

$dir_list = array_map(function ($item, $index) use ($dir) {
  return ["name" => $item, "type" => is_dir("$dir/$item") ? "dir" : "file"];
}, $list, array_keys($list));
$data = [
  "data" => $dir_list,
];
echo json_encode($data);
