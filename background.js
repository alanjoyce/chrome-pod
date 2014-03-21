//Listens for the app launching then creates the window
chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  var width = 350;
  var height = 450;

  chrome.app.window.create('index.html', {
    id: 'chromePod',
    width: width,
    height: height,
    minWidth: 310,
    minHeight: 450,
    left: Math.round((screenWidth-width)/2),
    top: Math.round((screenHeight-height)/2)
  });
});