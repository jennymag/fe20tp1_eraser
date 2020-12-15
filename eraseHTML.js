let list = document.getElementById("notesList");
let content = document.getElementById("containerContent");
let title = document.getElementById("title");
let h1_1;
let ul_1;
let li_1;
let div_2;
let arr = [
  {
    title: "My first note",
    text: "Bla bla bla bla bla bla",
    id: Date.now(),
  },
];

tinymce.init({
  selector: "mytextarea",
  plugins: "print",
  menubar: "file",
  toolbar: "print",
});

function preview() {
  /* let this be */
  content.innerHTML = "";
  /* << */

  /* change this */
  div_2 = document.createElement("div");
  div_2.id = "containerContentDiv";
  content.appendChild(div_2);

  let h1 = document.createElement("h1");
  h1.innerText = "hej";
  h1.id = "previewh1";
  div_2.appendChild(h1);

  let p = document.createElement("p");
  p.innerText = "bla bla bla";
  div_2.appendChild(p);
}

function printAndEdit() {}

function mainPage() {
  list.innerHTML = "";

  addBtn = document.createElement("span");
  addBtn.innerText = "+";
  addBtn.id = "addButtonSmall";
  addBtn.addEventListener("click", addNotes);
  list.appendChild(addBtn);

  let div_1 = document.createElement("div");
  div_1.id = "notesListContentDiv";
  list.appendChild(div_1);

  title.innerText = "My notes";
}

function landingPage() {
  window.location.href = "index.html";
}

function favoritePage() {
  list.innerHTML = "";
  title.innerText = "My favorite";
  addNotes();
  preview();
}

function searchPage() {
  list.innerHTML = "";
  title.innerText = "Search";
}
function statisticPage() {
  list.innerHTML = "";
  title.innerText = "My statistic";
}
function settingsPage() {
  list.innerHTML = "";
  title.innerText = "My settings";
}

function addNotes() {
  for (const note of arr) {
    let button = document.createElement("button");
    button.classList.add("note");
    button.id = note.id;
    list.appendChild(button);

    let h2_1 = document.createElement("h2");
    h2_1.innerText = note.title;
    button.appendChild(h2_1);

    let p_1 = document.createElement("p");
    p_1.innerText = note.text;
    button.appendChild(p_1);
  }
}
function hamburgerMenu() {
  let x = document.getElementById("qNavMob");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function removeNotes() {}

mainPage();

document.getElementById("logo").addEventListener("click", mainPage);
document.getElementById("main").addEventListener("click", mainPage);

for (let el of document.getElementsByClassName("search")) {
  el.addEventListener("click", searchPage);
}

for (let el of document.getElementsByClassName("favorite")) {
  el.addEventListener("click", favoritePage);
}

for (let el of document.getElementsByClassName("statistic")) {
  el.addEventListener("click", statisticPage);
}
for (let el of document.getElementsByClassName("settings")) {
  el.addEventListener("click", settingsPage);
}
for (let el of document.getElementsByClassName("addButton")) {
  el.addEventListener("click", addNotes);
}

document.getElementById("ham").addEventListener("click", hamburgerMenu);
