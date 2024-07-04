<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["videoFile"]["name"]);
    $uploadOk = 1;
    $videoFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
    if ($uploadOk) {
      if (move_uploaded_file($_FILES["videoFile"]["tmp_name"], $targetFile)) {
          echo "The file " . basename($_FILES["videoFile"]["name"]) . " has been uploaded.";
      } else {
          echo "Error uploading the file.";
      }
  }
}
?>