function setup() {
  noCanvas();
  var userinput = select('#userinput');
  userinput.changed(changeText);

  function changeText() {

    var params = {
      active = true, 
      currentWindow: true
    };
    chrome.tabs.query(params, gotTab); 

    function gotTabs(tabs) {
      console.log("got tabs");
    var message = userinput.value();

    var msg = {
      txt: userinput.value();
    }
    chrome.tabs.sendMessage(tabs[0].id, msg); 
  }
};

