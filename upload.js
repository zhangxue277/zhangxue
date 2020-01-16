<input type="file" id="files" style="display: none" onchange="fileImport();">
<input type="button" id="fileImport" value="导入">

$("#fileImport").click(function () {
  $("#files").click();
});

function fileImport() {
    var selectedFile = document.getElementById('files').files[0];
    var name = selectedFile.name;                                                       
    var size = selectedFile.size;                                                        
    console.log("文件名:"+name+"大小:"+size);
    var reader = new FileReader();                                                       
    reader.readAsText(selectedFile);                                                      
    reader.onload = function () {
        console.log(this.result);
        JSON.parse(this.result);
        console.log(JSON.parse(this.result));
    }
}
