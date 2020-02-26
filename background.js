console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
  var msg = {
    txt: "what up"
  }
  // chrome.tabs.sendMessage(tab.id, msg);
}