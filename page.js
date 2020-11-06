//selectors
const inputText = document.querySelector('.text');
const addBtn = document.querySelector('.add');
var displayText = document.querySelector('.rc');
const noteColor = document.querySelector('.applyC');
const selectopt = document.querySelector('.side-push');


//event listener
addBtn.addEventListener('click', addFunction);
displayText.addEventListener('click', deleteNote);
selectopt.addEventListener('click', select);


//function
function addFunction(event){

    //prevent from submitting
    event.preventDefault();
  

    //display note div
    const dispDiv = document.createElement("div");
    dispDiv.classList.add("notes");


    //create li of notes to be added
    const newNote = document.createElement("li");
    newNote.innerText = inputText.value;
    newNote.classList.add('notelist');
    dispDiv.appendChild(newNote); //putting it inside the note

    ///create <span> time
    const addTime = document.createElement('span');
    addTime.classList.add('time');
    addTime.innerHTML = new Date().toLocaleString();
    dispDiv.appendChild(addTime);

    //new Date().toLocaleTimeString(); // 11:18:48 AM
    //new Date().toLocaleDateString(); // 11/16/2015
    //new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM

    //delete button
    const delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fas fa-trash"><i>';
    delBtn.classList.add("del");
    dispDiv.appendChild(delBtn);

    //edit button
    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fas fa-check"></i>';
    editBtn.classList.add("check");
    dispDiv.appendChild(editBtn);

    //mark the notes
    const marked = document.createElement("button");
    marked.innerHTML = '<i class="fa fa-strikethrough"></i>';
    marked.classList.add("marks");
    dispDiv.appendChild(marked);

    //color the notes
    const fave = document.createElement("button");
    fave.innerHTML = '<i class="fa fa-star"></i>';
    fave.classList.add("favorite");
    dispDiv.appendChild(fave);
    

    //input text must be filled
    if (inputText.value === '') {
        alert("You must write something!");
    }else{
    //append to list
    displayText.appendChild(dispDiv);

    //clear input value
    inputText.value = "";
    }
}


function deleteNote(e){
    const item = e.target; //item means the buttons

    //delete note
    if (item.classList[0] === "del"){
        const notes = item.parentElement;
        
        //animation  for delete
        notes.classList.add("falls");
        notes.addEventListener('transitionend', function(){
            notes.remove();
        });
    }

    //mark the note 
    if(item.classList[0] === "check"){
        const notes = item.parentElement;
        notes.classList.toggle("hide");
    }

    if(item.classList[0] === "marks"){
        const notes = item.parentElement;
        notes.classList.toggle("marking");
    }
    if(item.classList[0] === "favorite"){
        const notes = item.parentElement;
        notes.classList.toggle("favy");
    }
}



//CLOSING THE SIDE BAR

//OPENING THE SIDE BAR

function openm(){
    document.getElementById("op").style.width = "250px";

}
function klose(){
    document.getElementById("op").style.width = "0";
    document.getElementById("spage").style.marginLeft = "0px";
}

//SELECTING THE NOTES THAT THE USER WANTED TO SEE
function select(e){
    const todo = displayText.childNodes;
    todo.forEach(function(notes){
        switch (e.target.value) {
            case "all":
            notes.style.display = 'block';
            break;

            case "hide":
                if (notes.classList.contains('hide')){
                    notes.style.display = 'block';
                }else{
                    notes.style.display = 'none';
                }
                break;

            case "fav":
                if (notes.classList.contains('favy')){
                    notes.style.display = 'block';
                }else{
                    notes.style.display = 'none';
                }
                break;

            case "mark":
                if (notes.classList.contains('marking')){
                    notes.style.display = 'block';
                }else{
                    notes.style.display = 'none';
                }
                break;

        }
    });
}


//changing the theme
const check = document.getElementById("color");

check.addEventListener('change', () => {
    //change theme of the website
    document.body.classList.toggle('dark');
})




//creating modal for contacts
const container = document.querySelector('.modal-contacts');
const closem = document.querySelector('.closeme');
const openmodalah = document.querySelector('.messageme');



openmodalah.addEventListener('click', function(){
    container.style.display = "block";
    document.getElementById("op").style.width = "0";
});
closem.addEventListener('click', function(){
    container.style.display = "none";
});


/*sticky nav bar
window.onscroll = function() {myfunct()};
 var navbar = document.getElementById('hd');
 var sticky = navbar.offsetTop;

 function myfunct(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove("sticky");
    }
}*/

//creating modal for abouts
const aboutcontainer = document.querySelector('.modal-about');
const closebout = document.querySelector('.closeabout');
const openboutah = document.querySelector('.aboutme');

openboutah.addEventListener('click', function(){
    aboutcontainer.style.display = "block";
    document.getElementById("op").style.width = "0";
});
closebout.addEventListener('click', function(){
    aboutcontainer.style.display = "none";
});

//creating coming soon modal
const soon = document.querySelector(".modal-soon");
const closme = document.querySelector('.closesoon');
const openmoreah = document.querySelector('.more');

openmoreah.addEventListener('click', function(){
    soon.style.display = "block";
    document.getElementById("op").style.width = "0";
});
closme.addEventListener('click', function(){
    soon.style.display = "none";
})



