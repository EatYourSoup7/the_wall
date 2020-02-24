///first comment

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);
  if (message.txt === "what up") {
    console.log("What up I'm a Chrome Extension")

    let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {

      elt.style['background-color'] = 'black'
    }
  }
}

