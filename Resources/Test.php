<?php
$myfile = fopen("Editors Notes.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("Editors Notes.txt"));
fclose($myfile);
?>