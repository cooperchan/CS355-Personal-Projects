function onOpen() {
    DocumentApp.getUi()
        .createMenu('Additional Menu')
        .addItem('Image Count', 'imageCount')
        .addToUi();
    imageCount(); // Added
}

function imageCount() {
  var imageCounter = 0;
  var docBody = DocumentApp.getActiveDocument().getBody();

  var images = docBody.getImages();
 
  
   var htmlOutput = HtmlService
    .createHtmlOutput('<p>The amount of images in this document is: </p>' + images.length)
    .setTitle('Reahanna\'\s Image Count Sidebar');
  
   DocumentApp.getUi().showSidebar(htmlOutput);
  
}
