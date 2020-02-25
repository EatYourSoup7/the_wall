chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
  if (message.txt === "hello") {
    console.log("What up I'm a Chrome Extension")

    let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {

      elt.style['background-color'] = 'black'
    }
  }
}


// the purpose of the function gotMessage is to receive informatino from the background.js function buttonClicked. This content.js file is in its own sandbox and doesn't communicate with other pages, except for a handful of actions allowed by Google's API. In this case we use chrome.tabs.sendMessage(a, b) to communicate a message variable from the background.js to the content.js. (the argument a is the tab you wish to apply the action to, tab.id for the current browser tab; the argument b is the variable you are passing through, in this case msg).

