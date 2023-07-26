chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: startPictureInPicture,
  });
});

function startPictureInPicture() {
  console.log("object");
  const video = document.querySelector("video");

  if (document.pictureInPictureElement) {
    document.exitPictureInPicture(); // Exit the picture-in-picture mode
  } else if (video) {
    if (document.pictureInPictureEnabled) {
      video.requestPictureInPicture(); // Request the picture-in-picture mode
    } else if (video.webkitSetPresentationMode) {
      video.webkitSetPresentationMode("picture-in-picture");
    }
  }
}
