(function() {
  var counter = 0;
  var add = document.getElementById('add');
  var remove = document.getElementById('remove');
  var form = document.getElementById('userInput');
  var addInput = function() {
    counter++;
    var input = document.createElement("input");
    input.type = 'text';
    input.value = '';
    form.appendChild(input);
  };
  var removeInput = function() {
    counter -= 1;
    var input = document.getElementById('userInput').removeChild(userInput.childNodes[userInput.childNodes.length - 1]);
  }
  add.addEventListener('click', function() {
    addInput();
  }.bind(this));
  remove.addEventListener('click', function() {
    removeInput();
  }.bind(this));
})();



// var counter = 1;
// var limit = 10;
// function addInput(userInput) {
//   if (counter === limit) {
//     alert("You have reached the limit");
//   }
//   else {
//     var newInput = document.createElement('input');
//     newInput.innerHTML = "<input type='text' value=''><input type='button' id='remove' value='X'>";
//     document.getElementById(userInput).appendChild(newInput); counter++;
//   }

//   function removeInput(newInput) {
//     document.getElementById('userInput').removeChild(newInput);
//     counter -= 1;
//   }
// }

function save_options() {
  var userInput = document.getElementById('userInput').value;
  chrome.storage.sync.set({
    censoredWords: userInput
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}



// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {

  chrome.storage.sync.get({
    censoredWords: userInput
    // replaced value of 'red' from example with 'userInput' - not sure if this is correct if there is a different way to restore to user's previous input, but no errors returned.
  }, function(items) {
    document.getElementById('userInput').value = items.censoredWords;
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

// 1. Need to figure out if js is correctly storing the collection of values of each input (my guess is that it should bc we call on the 'userInput' id)
// 2. Are those values being stored into an array?
// 3. Each time the settings are opened the values are not currently showing in the input boxes. Is this an error with chrome.storage.sync.get? Need to add functionality to allow user to remove previous values as well.

// 4. Why doesn't autofocus work (not priority)