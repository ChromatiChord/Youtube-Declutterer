const icons = {
  "ytp-autonav-toggle-button-container": true, 
  "ytp-subtitles-button": false, 
  "ytp-settings-button": true,
  "ytp-miniplayer-button": false, 
  "ytp-size-button": true,
  "ytp-fullscreen-button": true,
  '[title="Play on TV"]': false
}
 
for (let icon in icons) {
  disable_icon(icon);
} 

chrome.runtime.onMessage.addListener(function (request) {
  if (!isNaN(request)) {
    document.getElementsByTagName("video")[0].playbackRate = parseFloat(request);  
  } 
  else {
    icons[request] = !icons[request];  
    disable_icon(request);
  }
});

function disable_icon(icon) {
  if (icon === '[title="Play on TV"]') {
    document.querySelector(icon).style.display = icons[icon] ? "inline" : "none";
  } else {
    document.getElementsByClassName(icon)[0].style.display = icons[icon] ? "inline" : (icon === "ytp-autonav-toggle-button-container" ? "" : "none");
  }
}