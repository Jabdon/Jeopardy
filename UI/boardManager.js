// current round
var round;
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the button that opens the modal
var text = document.getElementById("dialog-question");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

/* // When the user clicks on the button, open the modal 
btn.onclick = function(element) {
    console.log(element);
    text.innerText = element.text;
  modal.style.display = "block";
} */
function showModal(t){
    console.log(t);
    text.innerText = t.innerText;
    round = t;
    modal.style.display = "block";
}

//
function reveal(){
    round.disabled = true;

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
    for (c = 0; c < ((rows-1) * cols); c++) {
      let cell = document.createElement("button");
      cell.style.width = `${1500/rows}px`
      cell.style.height = `${1100/rows}px`
      cell.setAttribute('id', `button${c}`)
      //cell.disabled = true;
      container.appendChild(cell).className = "grid-item";
      cell.innerText = (points * ((c/cols | 0) + 1));
      cell.onclick = function(){showModal(cell)};
    };

    // generate headers for topics
    for (c = 0; c < cols; c++) {
        let cell = document.createElement("div");
        cell.style.width = `${1500/rows}px`
        cell.style.height = `${1100/rows}px`
        //cell.setAttribute('id', `button${c}`)
        cell.innerText = `topic ${(c + 1)}`;
        headerContainer.appendChild(cell).className = "grid-item";
      };
  };


