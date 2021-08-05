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
  icon_toggle(icon);
} 

// every 10 seconds, ensure the correct icons are disabled
setInterval(function() {
  for (let icon in icons) {
    icon_toggle(icon);
  } 
}, 10000);

// called by del_icon() in popup.js whenever a switch is flicked or slider adjusted
chrome.runtime.onMessage.addListener(function (request) {
  // if request is a number, use this to adjust playback speed
  if (!isNaN(request)) {
    document.getElementsByTagName("video")[0].playbackRate = parseFloat(request);  
  } 
  else {
    icons[request] = !icons[request];  
    icon_toggle(request);
  }
});

// turns an icon on or off
function icon_toggle(icon) {
  if (icon === '[title="Play on TV"]') {
    document.querySelector(icon).style.display = icons[icon] ? "inline" : "none";
  } else {
    document.getElementsByClassName(icon)[0].style.display = icons[icon] ? "inline" : (icon === "ytp-autonav-toggle-button-container" ? "" : "none");
  }
}