var elements = [];
let inputText = document.querySelector(".text");

window.onload = function(){
    if(JSON.parse(localStorage.getItem("storage")) != null){
        elements = JSON.parse(localStorage.getItem("storage"));
        console.log("note:" + elements);
        display();
    }
};
    
function addFunction(){
    if(document.querySelector('.text').value.trim() != ""){
        elements.push(document.querySelector('.text').value.trim());
        if(localStorage.getItem("storage")  == null){
            localStorage.setItem("storage", JSON.stringify(elements));
        }else{
            localStorage.setItem("storage", JSON.stringify(elements));
        }
        console.log(localStorage.getItem("storage"));

        
        //input text must be filled
       
     
    }
    if (inputText.value === '') {
        alert("You must write something!");
    }
    display();
    inputText.value = "";
}


function display(){
    document.querySelector('.rc').innerHTML = "";
    for(var i=0; i<elements.length; i++)
        document.querySelector('.rc').innerHTML +=
        "<div class='element'><li>" +
        elements[i] + 
        '<button class="check" onclick="highlight()"><i class="fas fa-check" id="check"></i></button>' +
        '<button class="marks"><i class="fa fa-strikethrough"></i></button>' +
            '<button class="favorite"><i class="fa fa-star"></i></button>' +
        '<button class="del" onclick="del()"><i class="fas fa-trash"><i></button>'
        "</li></div>";
}
//delete
function del(index){
    elements.splice(index, 1);
    if(localStorage.getItem("storage")  == null){
        localStorage.setItem("storage", JSON.stringify(elements));
    }else{
        localStorage.setItem("storage", JSON.stringify(elements));
    }
    console.log();
    display();
}
//highlight
function highlight(index){
    if(elements[index].includes("<strike>")){
        elements[index] = elements[index].replace("<strike>", "");
        elements[index] = elements[index].replace("</strike>", "");
    }else
        elements[index] = "<strike>" + elements[index] + "</strike>";
        display();
}


//changing the theme
const check = document.getElementById("color");

check.addEventListener('change', () => {
    //change theme of the website
    document.body.classList.toggle('dark');
})

//OPENING THE SIDE BAR

function openm(){
    document.getElementById("op").style.width = "250px";

}
function klose(){
    document.getElementById("op").style.width = "0";
    document.getElementById("spage").style.marginLeft = "0px";
}


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



