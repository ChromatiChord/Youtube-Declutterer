document.addEventListener('DOMContentLoaded', function () {
  // miniplayer
  document.getElementById("del_miniplayer").addEventListener('click', function () {
    del_icon("ytp-miniplayer-button");
  })
  // theatre mode
  document.getElementById("del_size").addEventListener('click', function () {
    del_icon("ytp-size-button");
  })
  // toggle casting
  document.getElementById("del_cast").addEventListener('click', function () {
    del_icon('[title="Play on TV"]');
  })
  // toggle autoplay
  document.getElementById("del_autoplay").addEventListener('click', function () {
    del_icon("ytp-autonav-toggle-button-container");
  })
   // closed captions
   document.getElementById("del_subtitles").addEventListener('click', function () {
    del_icon("ytp-subtitles-button");
  })
  // toggle settings
  document.getElementById("del_settings").addEventListener('click', function () {
    del_icon("ytp-settings-button");
  })
  // toggle fullscreen
  document.getElementById("del_fullscreen").addEventListener('click', function () {
    del_icon("ytp-fullscreen-button");
  })
})
 
function del_icon(icon_id) {
  chrome.tabs.query({currentWindow: true, active: true},
  function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, icon_id)
  })
}


let slider = document.getElementById("playback_speed");
let output = document.getElementById("playbackspeed");
output.innerText = "Playback Speed: " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerText = "Playback Speed: " + this.value;
  del_icon(slider.value)
}