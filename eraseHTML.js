let list = document.getElementById("notesList");
let content = document.getElementById("containerContent");
let title = document.getElementById("h1");
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
  {
    title: "My second note",
    text: "Bla jajajajaajaaa bla bla",
    id: Date.now() + 64636343,
  },
];

function visableDom() {
  list.style.visibility = "visible";
  content.style.visibility = "visible";
}

function printOutDom() {
  h1_1 = document.createElement("h1");
  h1_1.id = "h1";
  list.appendChild(h1_1);

  let div_1 = document.createElement("div");
  div_1.id = "notesListContentDiv";
  list.appendChild(div_1);

  ul_1 = document.createElement("ul");
  ul_1.classList.add("notesListContentContainer");
  div_1.appendChild(ul_1);

  li_1 = document.createElement("li");
  li_1.classList.add("notesListContent");
  ul_1.appendChild(li_1);

  li_2 = document.createElement("li");
  li_2.classList.add("notesListContent");
  ul_1.appendChild(li_2);

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

function hidDom() {
  list.style.visibility = "hidden";
  content.style.visibility = "hidden";
}
function printAndEdit() {}

function mainPage() {
  hidDom();
  visableDom();
  h1_1.innerText = "My notes";
  addNotes();
}

function landingPage() {
  window.location.href = "index.html";
}

function favoritePage() {
  hidDom();
  visableDom();
  h1_1.innerText = "My favorite";
}

function searchPage() {
  hidDom();
  visableDom();
  h1_1.innerText = "Search";
}
function statisticPage() {
  hidDom();
  visableDom();
  h1_1.innerText = "My statistic";
}
function settingsPage() {
  hidDom();
  visableDom();
  h1_1.innerText = "My settings";
}

function addNotes() {
  for (const note of arr) {
    let button = document.createElement("button");
    button.classList.add("note");
    button.id = note.id;
    button.addEventListener("click", preview);
    li_2.appendChild(button);

    let h2_1 = document.createElement("h2");
    h2_1.innerText = note.title;
    button.appendChild(h2_1);

    let p_1 = document.createElement("p");
    p_1.innerText = note.text;
    button.appendChild(p_1);
  }
}

function preview() {}

printOutDom();

mainPage();

document.getElementById("logo").addEventListener("click", mainPage);
document.getElementById("addButton").addEventListener("click", addNotes);
document.getElementById("search").addEventListener("click", searchPage);
document.getElementById("favorite").addEventListener("click", favoritePage);
document.getElementById("statistic").addEventListener("click", statisticPage);
document.getElementById("settings").addEventListener("click", settingsPage);
