
// load the topics and store them
fetch("../data/topics.txt")
  .then((res) => res.text())
  .then((text) => {
    // only run if storage does not exist
    if(window.localStorage.getItem("topic") === null){
        var line = text.split('\n');
        window.localStorage.setItem("topics", JSON.stringify(line))  
        console.log("added topics to storage successfully");
    }
   })
  .catch((e) => console.error(e));

  //
  createPlayers(["jonathan", "Amanda"])

// create and store players
function createPlayers(listOfNames){
    if (listOfNames.length < 1){
        console.log("list of players should be more than one")
    }
    else {
        var playersArray =[]
        listOfNames.forEach(function (index) {
            console.log(index);
            const player = {
                name: index,
                score: 0
            }
            playersArray.push(player);
          });

          window.localStorage.setItem("players", JSON.stringify(playersArray))

    }
}

 function questionsAndAnwers(){
    // Use fs.readFile() method to read the file
    var text = readFile('data/topics.txt', "utf8", (err, data) => {
        console.log(data);
    })
    var line = text.split('\n');
    localStorage.setItem("topics", line)  
 }