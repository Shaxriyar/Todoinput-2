// var arr = ["", "", "", "", "", "",]

// var Text = document.getElementById("text");
// var globalid = -1


// function InitiaList() {
//   var table = "";

//   for (let i = 0; i < arr.length; i++) {
//     table = table + `<div class="matn">
//         <li>${arr[i]}</li>
//         <p>
//         <button onclick="Edit(${i})">Edit</button>
//         <button onclick="Delete(${i})">Delete</button>
//         </p>
//         </div>`;
//   }
//   Text.innerHTML = table;

// }

// function Add() {
//   var Word = document.getElementById("word");

//   if (globalid === -1) {
//     arr.push(Word.value);
//     Word.value = "";
//   }
//   else {
//     arr[globalid] = Word.value
//     var Btn = document.getElementById("btn");
//     Btn.textContent = "Add"
//     globalid = -1
//     Word.value = "";
//   }

//   InitiaList()
// }

// function Delete(id) {
//   console.log(id);
//   arr.splice(id, 1);

//   InitiaList()
// }

// function Edit(id) {
//   var Word = document.getElementById("word");
//   var Btn = document.getElementById("btn");
//   Btn.textContent = "Save"
//   Word.value = arr[id]
//   globalid = id
// }

// InitiaList();



var arr = []

var Text = document.getElementById("text");
var globalid = -1


// arr.splice(0,2)
// console.log(arr);


function InitiaList () {
  var Text = document.getElementById("text");
  var table = "";

  for (let i = 0; i < arr.length; i++) {
    table =
    table +
    `<div class="matn">
    <li>${arr[i]}</li>
    <p>
    <button class ="edit" onclick="Edit(${i})">Edit</button>
    <button class="edit" onclick="Delete(${i})"><i class="fas fa-trash-alt"></i></button>
    </p>
     </div>`;

    }
    Text.innerHTML = table;
}

function Add() {
  var Word = document.getElementById("word");
if (Word.value == "") {
  alert ("Inputni toldiring")
}
else{
  if (globalid===-1){
    arr.push(Word.value);
    Word.value = "";
    InitiaList ();
  }
  else{
    arr[globalid] = Word.value
    var Btn = document.getElementById("btn");
    Btn.textContent = "Add"
    globalid = -1
    Word.value = "";
  }
 }
}

InitiaList ()


function Delete(id) {
  console.log(id);
  arr.splice(id,1);
  InitiaList ();
}

function Edit(id) {
   var Word = document.getElementById("word");
   var Btn = document.getElementById("btn");
   Word.value = arr[id]
   Btn.textContent = "Save"
    globalid = id
}

function ClearAll() {
  arr.length = 0
  InitiaList ();

}
InitiaList ();
