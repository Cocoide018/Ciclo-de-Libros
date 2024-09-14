function readURL(file) {
  var reader = new FileReader();
  reader.onload = function(e){
    var div = document.getElementById('fileImages');
    var src = e.target.result;
    // add to div
    var img = document.createElement('img');
    img.className = 'uploaded-img';
    img.width = '50';
    img.src = src;
    div.appendChild(img);
  };
  reader.readAsDataURL(file);
};

$("#filesToUpload").change(function(e) {
  var div = document.getElementById('fileImages');
  var input = document.getElementById('filesToUpload');
  var num_files = input.files.length;
  $("#fileImages img").remove()
  for (var x = 0; x < num_files; x++) {
    readURL(input.files[x]);;
  }
});
