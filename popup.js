document.addEventListener('DOMContentLoaded', function () {
  // miniplayer
  document.getElementById("del_miniplayer").addEventListener('click', function () {
    del_icon("miniplayer")
  })
  // theatre mode
  document.getElementById("del_size").addEventListener('click', function () {
    del_icon("theatre")
  })
  // toggle autoplay
  document.getElementById("del_autoplay").addEventListener('click', function () {
    del_icon("autoplay")
  })
   // closed captions
   document.getElementById("del_subtitles").addEventListener('click', function () {
    del_icon("closed_captions")
  })
  // toggle settings
  document.getElementById("del_settings").addEventListener('click', function () {
    del_icon("settings")
  })
  // toggle fullscreen
  document.getElementById("del_fullscreen").addEventListener('click', function () {
    del_icon("fullscreen")
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
output.innerHTML = "Playback Speed: " + slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = "Playback Speed: " + this.value;
  del_icon(slider.value)
}