let title = document.getElementById("inputName"); //Id from input
let text = document.getElementById("inputText"); //Id from textarea
let list = document.getElementById("list"); //Id from ul

let myNotes = [];

//function that empty the list of elements
//and creates a new li, h1 and p for every note in myNotes
function DOM() {
  myNotes.sort(compare); //js sort function with compare()
  list.innerHTML = ""; //tömmer gneom att sätta en tom st
  for (let note of myNotes) {
    let li = document.createElement("li");
    list.appendChild(li);
    let h1 = document.createElement("h1");
    h1.innerText = note.title;
    li.appendChild(h1);
    let p = document.createElement("p");
    p.innerText = note.text;
    li.appendChild(p);
  }
}
//function that adds a note to myNotes array with
//key attributes
function add() {
  //array object with attributes
  let note = {
    title: title.value,
    text: text.value,
    time: Date.now(),
  };
  //pushing note to mynote
  myNotes.push(note);
  console.log(myNotes);
  DOM();
}

//function that compares integers or strings
function compare(x, y) {
  //x.[attribute] chooces what to sort on, can be changed
  x = x.time;
  y = y.time;
  //this var is in case of that the int / str is
  //the same
  let comparison = 0;

  if (x > y) {
    comparison = 1; //if its bigger
  }
  if (y < x) {
    comparison = -1; //if its smaller
  }
  //no options left that bigger, smaller or equal
  //so comparison has the correct value:
  return comparison;
}

//listen on click on button, if clicked it runs add()
document.getElementById("saveInputBtn").addEventListener("click", add);
