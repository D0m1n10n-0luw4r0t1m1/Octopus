const progressBar = document.getElementById("upload-progress");
const progressText = document.getElementById("progress-text");
const xhr = new XMLHttpRequest();
xhr.upload.addEventListener("progress", function (event) {
    if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        progressBar.value = percentComplete;
        progressText.textContent = percentComplete.toFixed(2) + "%";
    }
});
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    xhr.open("POST", "upload.php", true);
    xhr.send(formData);
});
var r = new Resumable({
  target: 'FileHandler.ashx'
});
r.on('fileAdded', function (file) {
  $('.resumable-list').append('<li class="resumable-file-' + file.uniqueIdentifier + '">Uploading <span class="resumable-file-name"></span> <span class="resumable-file-progress"></span> <button type="button" onclick="abortFile(\'' + file.uniqueIdentifier + '\')">Cancel</button></li>');
  $('.resumable-file-' + file.uniqueIdentifier + ' .resumable-file-name').html(file.fileName);
  r.upload();
});
function abortFile(uniqueIdentifier) {
  console.log('Aborting file: ' + uniqueIdentifier);
  r.files.find(file => file.uniqueIdentifier === uniqueIdentifier).abort();
}