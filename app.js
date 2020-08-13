let addBtn = document.getElementById('addBtn');
showNotes();
addBtn.addEventListener('click', function(e) {
    let addTitle = document.getElementById('addTitle');
    let addTxt = document.getElementById('addTxt');
    // console.log(addTxt.value);
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes); 
    }
    // console.log(notesObj);
    var element = {};
    element.Title = addTitle.value; 
    element.text = addTxt.value; 
    notesObj.push(element);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTitle.value = '';
    addTxt.value = '';
    // console.log(notesObj);
    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes); 
    }
    let html = "";
    notesObj.forEach(function(element,index){
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.Title}</h5>
            <p class="card-text"> ${element.text}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    })
    let notesElem = document.getElementById('notes');
    if(notesObj.length!=0) {
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = 'Add a Note';
    }
}
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes); 
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();    
}

let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input', function(){
    
    let inputVal = searchTxt.value;
    let searchText = document.getElementsByClassName('noteCard');
    Array.from(searchText).forEach(function(element){
        let cardTitle = element.getElementsByTagName("h5")[0].innerText;
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt);
        if(cardTxt.includes(inputVal)||cardTitle.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
    // let inputVal = searchTxt.value;
    // let notes = localStorage.getItem("notes");
    // if(notes == null){
    //     notesObj = [];
    // }
    // else{
    //     notesObj = JSON.parse(notes); 
    // }
    // let html = "";
    // notesObj.forEach(function(element,index){
    //     if(notesObj[index].includes(inputVal))
    //     html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
    //     <div class="card-body">
    //         <h5 class="card-title">Note ${index + 1}</h5>
    //         <p class="card-text"> ${element}</p>
    //         <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
    //     </div>
    // </div>`;
    // })
    // let notesElem = document.getElementById('notes');
    // if(notesObj.length!=0) {
    //     notesElem.innerHTML = html;
    // }
    // else{
    //     notesElem.innerHTML = 'Add a Note';
    // }
})