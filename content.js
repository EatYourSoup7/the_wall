
// fourth comment
//third comment 
// Second comment
///first comment
// fifth comment
//best comment made
//steve sucks 
//steve sucks
//steve really really sucks
//while steve.still_sucks do | research |



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

