function exportRaw(name, data) {
    var urlObject = window.URL || window.webkitURL || window;
    var export_blob = new Blob([data]);                                         // 将返回的数据包装成blob
    var save_link = document.createElement("a");                                // 创建一个a标签
    save_link.href = urlObject.createObjectURL(export_blob);                    // 将a链接的访问地址设置为数据所在的地址
    save_link.download = name;                                                  // 最后下载到本地的txt文件名
    save_link.click();                                                          // 自动点击
} 
exportRaw('txtName.txt','需要以txt形式下载到本地的数据');
