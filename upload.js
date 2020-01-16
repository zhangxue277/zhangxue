<input type="file" class="files" style="display: none">
<input type="button" class="fileImport" value="导入">

$(".fileImport").click(function () {
  $(".files").click();
});

$(".files").change(function () {
  var selectedFile = document.getElementsByClassName('files')[0].files[0];
  fileImport(selectedFile).then(
    (result) => {
    console.log(result);
    console.log(JSON.parse(result));
  });
});

function fileImport(file) {
  return new Promise((resolve, reject) => {    
      let reader = new FileReader();
      reader.readAsText(file); 
      reader.onload = function() {
          resolve(this.result);
      };
  });
};
