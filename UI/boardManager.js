// current round
var currentRound;
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the button that opens the modal
var question = document.getElementById("dialog-question");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function showModal(button){
    console.log(button);
    question.innerText = button.innerText;
    currentRound = button;
    modal.style.display = "block";
}

//
function reveal(){
  currentRound.disabled = true;
    // then update object by searching the dictionary by id

    // then update the entire array/dictionary from local storage
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function loadCurrentQuestionAndAnswer(){
    // this is the function that is going to load the question and answer to the modal that will show
    // the question and answer of the current clicked button

}

function makeRows(rows, cols) {
    // set up the table
    const container = document.getElementById("table");
    container.style.setProperty('--grid-rows', rows-1);
    container.style.setProperty('--grid-cols', cols);

    // set up header topic
    const headerContainer = document.getElementById("header");
    headerContainer.style.setProperty('--grid-rows', 1);
    headerContainer.style.setProperty('--grid-cols', cols);
    
    // generate cells for
    var points = 100; 
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("button");
      cell.style.width = `${1500/rows}px`
      cell.style.height = `${1100/rows}px`
      cell.setAttribute('id', `button${c}`)
      //cell.disabled = true;
      container.appendChild(cell).className = "grid-item";
      cell.innerText = (points * ((c/cols | 0) + 1));
      cell.onclick = function(){showModal(cell)};
    };

    // get list of topics from the storage
    var storedNames = JSON.parse(window.localStorage.getItem("topics"));
    
    // generate headers for topics
    for (c = 0; c < cols; c++) {
        let cell = document.createElement("div");
        cell.style.width = `${1500/rows}px`
        cell.style.height = `${1100/rows}px`
        //cell.setAttribute('id', `button${c}`)
        cell.innerText = storedNames[c]; //cell.innerText = `topic ${(c + 1)}`;
        console.log(storedNames[c]);
        headerContainer.appendChild(cell).className = "grid-item";
      };

      renderPlayers();
  };

  function renderPlayers(){
    var playerSection = document.getElementById("player-section");
    // get list of topics from the storage
    var storedPlayers = JSON.parse(window.localStorage.getItem("players"));
    storedPlayers.forEach(element => {
      var html= `<div>
      <div>${element.name}</div>
      <button style="float:left;" onclick="updatePlayerScore(this)">+</button>
      <span>${element.score}</span>
      <button style="float:right;" onclick="updatePlayerScore(this)">-</button>
    </div>` ;   
    playerSection.innerHTML += html;
    });

  }

  function updatePlayerScore(element){
    // get player's name
    player = element.parentElement.firstElementChild.innerText;
    // get the current score
    score = element.parentElement.getElementsByTagName("span")[0];
    console.log("the value is " + player);
    // find the player name from stored info (local storage)
    var storedPlayers = JSON.parse(window.localStorage.getItem("players"));
    
    var newScore;
    //
    if (element.innerText == "+"){
      // add 100 to score
      newScore = Number(score.innerText) + 100;
    } else {
      // substract 100
      newScore = Number(score.innerText) - 100;
    }
    storedPlayers.forEach(function(obj) {
      if (obj.name === player) {
          obj.score = newScore;
          console.log("Updated the score of " +  newScore +  " for " + player);
      }
      score.innerText = newScore;
      // update info in the local storage
      window.localStorage.setItem("players", JSON.stringify(storedPlayers))
  });

  }


