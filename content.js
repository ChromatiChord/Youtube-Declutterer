let autoplay_hidden = false;
let closed_captions_hidden = false;
let settings_hidden = false;
let miniplayer_hidden = false;
let theatre_hidden = false;
let fullscreen_hidden = false;

chrome.runtime.onMessage.addListener(function (request) {
  let class_id = ""

  switch (request){
    case "autoplay":
      autoplay_hidden = !autoplay_hidden;  
      document.getElementsByClassName("ytp-autonav-toggle-button-container")[0].style.display = autoplay_hidden ? "none" : "";
      break;
    // case "closed_captions":
    //   closed_captions_hidden = !closed_captions_hidden;  
    //   document.getElementsByClassName("ytp-subtitles-button")[0].style.display = closed_captions_hidden? "none" : "inline";
    //   break;
    case "settings":
      settings_hidden = !settings_hidden;  
      document.getElementsByClassName("ytp-settings-button")[0].style.display = settings_hidden ? "none" : "inline";
      break;
    case "miniplayer":
      miniplayer_hidden = !miniplayer_hidden;  
      document.getElementsByClassName("ytp-miniplayer-button")[0].style.display = miniplayer_hidden ? "none" : "inline";
      break;
    case "theatre":
      theatre_hidden = !theatre_hidden;  
      document.getElementsByClassName("ytp-size-button")[0].style.display = theatre_hidden ? "none" : "inline";
      break;
    case "fullscreen":
      fullscreen_hidden = !fullscreen_hidden;  
      document.getElementsByClassName("ytp-fullscreen-button")[0].style.display = fullscreen_hidden ? "none" : "inline";
      break;
    default:
      console.log("We actually get here" + request)
      document.getElementsByTagName("video")[0].playbackRate = parseInt(request);        
  }
})



