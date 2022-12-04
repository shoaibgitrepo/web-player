<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=UTF-8');

$dir = str_replace("/api", "", __DIR__);
$path = $dir;
if ($_GET['dir']) $dir .= $_GET['dir'];
// echo "$dir\r\n";

$list = scandir($dir);
// $files2 = scandir($dir, SCANDIR_SORT_DESCENDING);

$dir_list = array_map(function ($item, $index) use ($dir) {

  return [
    ["name" => $item, "type" => is_dir("$dir/$item") ? "dir" : "file"]
  ];
}, $list, array_keys($list));
$data = [
  "list" => $dir_list,
  "dir" => str_replace($path, "", $dir)
];
echo json_encode($data);
