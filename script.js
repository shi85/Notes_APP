
showNotes(); //Calling this function here so that when our page loads all added notes will be there.... 

let button = document.querySelector('.btn');
button.addEventListener('click', addNote);

//Function to add notes to localStorage....

function addNote() {
    let yourNote = document.getElementById('yourNote');
    let addedNotes = localStorage.getItem("addedNotes");

    if(addedNotes == null) {
        notesObj = [];
    }else {
        notesObj = JSON.parse(addedNotes);
    }

    notesObj.push(yourNote.value);
    localStorage.setItem("addedNotes", JSON.stringify(notesObj));
    yourNote = "";

    showNotes();
}

//Function to show notes stored in the local storage..
function showNotes() {
    let addedNotes = localStorage.getItem("addedNotes");

    if(addedNotes == null) {
        notesObj = [];
    }else {
        notesObj = JSON.parse(addedNotes);
    }

    let html = "";
    notesObj.forEach(function(element, index ){
        html += `<div id="addedNotes">
                    <h3 class = "container-heading"> Note ${index + 1} </h3>
                    <textarea  id = "yourNote" rows = '6', cols = '40' placeholder="Your Added Notes.." style = "color:black;">${element}</textarea>
                    <button id = "${index}" class = 'btn' onclick = "delNote(this.id)"> Delete Note </button>
                </div>`;       
    });

    let myNotes = document.getElementById('addedNotes');
    if(notesObj.length !=0) {
        myNotes.innerHTML = html;
    }else {
        myNotes.innerHTML = `Nothing to Show! Use "Add Note" Button Above To Let Me Remember Some Of Your Notes 
        😃😃😃😃😃...`;
    }
}

//Function to delete added Notes..
function delNote(index) {
    console.log("You have deleted button ", index);

    let addedNotes = localStorage.getItem("addedNotes");

    if(addedNotes == null) {
        notesObj = [];
    }else {
        notesObj = JSON.parse(addedNotes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("addedNotes", JSON.stringify(notesObj));

    showNotes();
}