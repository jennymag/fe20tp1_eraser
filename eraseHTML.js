if (localStorage.getItem("currentNoteID") === null) {
  var zero = 0;
  localStorage.setItem("currentNoteID", zero);
}

if (localStorage.getItem("savedNoteName") === null) {
  var emptyArrOne = [];
  var strEmptyArrOne = JSON.stringify(emptyArrOne);
  localStorage.setItem("savedNoteName", strEmptyArrOne);
}

if (localStorage.getItem("madeAnyNote") === null) {
  var hasMadeNote = false;
  var strHasMade = JSON.stringify(hasMadeNote);
  localStorage.setItem("madeAnyNote", hasMadeNote);
}

function loadPage() {
  var loadNoteNames = JSON.parse(localStorage.getItem("savedNoteName"));

  for (var v = 0; v < loadNoteNames.length; v++) {
    var noteName = loadNoteNames[v];
    var lastNoteName = loadNoteNames[loadNoteNames.length - 1];
    var noteToLoad = JSON.parse(localStorage.getItem(noteName));
    var noteNum = loadNoteNames[v].replace("savedNoteID", "");
    var loadWrap = document.createElement("div");
    document.getElementById("notesListContentDiv").appendChild(loadWrap);
    loadWrap.outerHTML = noteToLoad[0];

    var loadTxtCont = document.createElement("div");
    loadTxtCont.setAttribute("class", "textCont");
    loadTxtCont.setAttribute("id", "textContID" + noteNum);

    var loadTextArea = document.createElement("textarea");
    loadTextArea.setAttribute("class", "textEditor");
    loadTextArea.setAttribute("id", "textEditorID" + noteNum);

    loadTxtCont.appendChild(loadTextArea);
    document.getElementById("containerContent").appendChild(loadTxtCont);
    tinymce.init({
      selector: "textarea",
      plugins: "print",
      branding: false,
      width: "100%",
      menubar: "file",
      statusbar: false,
      toolbar: "print",
      setup: function (editor) {
        editor.on("init", function () {
          tinymce.get("textEditorID" + noteNum).setContent(noteToLoad[1]);
        });
      },
    });

    if (noteName != lastNoteName) {
      document.getElementById("textContID" + noteNum).style.position =
        "absolute";
      document.getElementById("textContID" + noteNum).style.left = "-999em";
    } else if ((noteName = lastNoteName)) {
      document.getElementById("textContID" + noteNum).style.position = "";
      document.getElementById("textContID" + noteNum).style.left = "";
    }
  }
}

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
    text: "Bla bla bla blsdssd bla bla",
    id: Date.now(),
  },
];

function preview(note) {
  /* let this be */
  content.innerHTML = "";
  /* << */

  /* change this */
  div_2 = document.createElement("div");
  div_2.id = "containerContentDiv";
  content.appendChild(div_2);

  let h1 = document.createElement("h1");
  h1.innerText = note.title;
  h1.id = "previewh1";
  div_2.appendChild(h1);

  let p = document.createElement("p");
  p.innerText = note.text;
  div_2.appendChild(p);

  let button = document.createElement("button");
  button.innerText = "Save";
  button.id = "demo";
  div_2.appendChild(button);
  button.addEventListener("click", lastEdited);
}
function lastEdited(x) {
  x = document.lastModified;
  document.getElementById("demo").innerHTML = x;
}

function date_() {
  let dateObj = new Date();
  let newdate;
  let month = dateObj.getUTCMonth() + 1;
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();

  newdate = year + "-" + month + "-" + day;
  console.log(newdate);
  return newdate;
}

function mainPage() {
  list.innerHTML = "";
  content.innerHTML = "";
  title.innerText = "My notes";

  addBtn = document.createElement("span");
  addBtn.innerText = "+";
  addBtn.setAttribute("id", "makeNoteButton");
  addBtn.setAttribute("onClick", "createNote()");

  var startBtn = document.createElement("div");
  startBtn.setAttribute("id", "startBtnID");
  startBtn.setAttribute("class", "startBtn");

  list.appendChild(startBtn);
  startBtn.appendChild(addBtn);

  let div_1 = document.createElement("div");
  div_1.id = "notesListContentDiv";
  list.appendChild(div_1);

  var buttonMain = document.createElement("div");
  buttonMain.setAttribute("class", "buttonMain");
  buttonMain.setAttribute("id", "buttonMainID");
  loadPage();
}

function landingPage() {
  window.location.href = "index.html";
}

function favoritePage() {
  tinymce.remove();
  list.innerHTML = "";
  title.innerText = "My favorite";
  addNotes();
  preview(arr[0]);
}

function searchPage() {
  tinymce.remove();
  list.innerHTML = "";
  content.innerHTML = "";
  title.innerText = "Search";

  let inputDiv = document.createElement("div");
  inputDiv.classList.add("search");
  list.appendChild(inputDiv);

  let inputInnerDiv = document.createElement("div");
  inputInnerDiv.classList.add("search");
  inputDiv.appendChild(inputInnerDiv);

  let inputField = document.createElement("input");
  inputField.classList.add("inputField");
  inputField.placeholder = "Search for note by title..";
  inputInnerDiv.appendChild(inputField);

  /*

  <div class="search">
  <div class="searchInput">
      <input type="text" placeholder="Search...">
      
      
      </div>
</div>
*/
}
function statisticPage() {
  tinymce.remove();
  list.innerHTML = "";
  content.innerHTML = "";
  title.innerText = "My statistic";
}
function settingsPage() {
  tinymce.remove();
  list.innerHTML = "";
  content.innerHTML = "";
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

function createNote() {
  var checkIfAny = JSON.parse(localStorage.getItem("madeAnyNote"));
  if (checkIfAny === false) {
    var didMakeNote = true;
    var strDidMake = JSON.stringify(didMakeNote);
    localStorage.setItem("madeAnyNote", strDidMake);
  }

  var currNoteID = +localStorage.getItem("currentNoteID");
  var numOne = 1;
  var sumNum = currNoteID + numOne;
  localStorage.setItem("currentNoteID", sumNum);
  var getNoteID = +localStorage.getItem("currentNoteID");

  var noteButton = document.createElement("span");
  noteButton.setAttribute("id", getNoteID);
  noteButton.setAttribute("class", "note");
  noteButton.setAttribute("onclick", "visible(this.id)");

  var noteButtonText = document.createElement("div");
  noteButtonText.setAttribute("id", "noteButtonTextID" + getNoteID);
  noteButtonText.setAttribute("class", "noteButtonText");

  var noteTitle = document.createElement("H1");
  noteTitle.setAttribute("class", "noteTitle");
  noteTitle.setAttribute("id", "noteTitleID" + getNoteID);
  var tempText = document.createTextNode("My note #" + getNoteID);
  noteTitle.appendChild(tempText);

  var inputTitle = document.createElement("input");
  inputTitle.setAttribute("id", "titleInpID" + getNoteID);
  inputTitle.setAttribute("class", "titleInp");
  inputTitle.style.left = "-999em";
  inputTitle.setAttribute("onfocusout", "saveNoteTitle(this.id)");
  inputTitle.setAttribute("maxlength", "12");

  var buttonWrap = document.createElement("div");
  buttonWrap.setAttribute("class", "buttonWrap");
  buttonWrap.setAttribute("id", "buttonWrapID" + getNoteID);

  var buttonCont = document.createElement("div");
  buttonCont.setAttribute("class", "buttonCont");
  buttonCont.setAttribute("id", "buttonContID" + getNoteID);

  var noteOptions = document.createElement("div");
  noteOptions.setAttribute("class", "noteOptions");
  noteOptions.setAttribute("id", "noteOptionsID" + getNoteID);

  var editOption = document.createElement("div");
  editOption.setAttribute("class", "editOption");
  editOption.setAttribute("id", "editOptionID" + getNoteID);

  var editOptionBtn = document.createElement("BUTTON");
  editOptionBtn.setAttribute("onClick", "editNote(this.id)");
  editOptionBtn.setAttribute("class", "editOptionBtn");
  editOptionBtn.setAttribute("id", "editOptionBtnID" + getNoteID);
  editOptionBtn.innerHTML = '<i class= "fa fa-edit" </i>';
  editOptionBtn.addEventListener(
    "mousedown",
    function (event) {
      event.preventDefault();
    },
    false
  );

  var favOption = document.createElement("div");
  favOption.setAttribute("class", "favOption");
  favOption.setAttribute("id", "favOptionID" + getNoteID);

  var favOptionBtn = document.createElement("BUTTON");
  favOptionBtn.setAttribute("class", "favOptionBtn");
  favOptionBtn.setAttribute("id", "favOptionBtnID" + getNoteID);
  favOptionBtn.setAttribute("onClick", "favoriteNote(this.id)");
  favOptionBtn.innerHTML = '<i class="far fa-heart"></i>';

  var deleteOption = document.createElement("div");
  deleteOption.setAttribute("class", "deleteOption");
  deleteOption.setAttribute("id", "deleteOptionID" + getNoteID);

  var deleteOptionBtn = document.createElement("BUTTON");
  deleteOptionBtn.setAttribute("class", "deleteOptionBtn");
  deleteOptionBtn.setAttribute("id", "deleteOptionBtnID" + getNoteID);
  deleteOptionBtn.setAttribute("onClick", "deleteNote(this.id)");
  deleteOptionBtn.innerHTML = '<i class="fas fa-trash"></i>';

  var textCont = document.createElement("div");
  textCont.setAttribute("class", "textCont");
  textCont.setAttribute("id", "textContID" + getNoteID);

  var textEditor = document.createElement("textarea");
  textEditor.setAttribute("class", "textEditor");
  textEditor.setAttribute("id", "textEditorID" + getNoteID);

  buttonCont.appendChild(noteButton);
  buttonCont.appendChild(inputTitle);
  noteButton.appendChild(noteButtonText);
  noteButtonText.appendChild(noteTitle);
  buttonWrap.appendChild(buttonCont);
  textCont.appendChild(textEditor);
  buttonWrap.appendChild(noteOptions);
  editOption.appendChild(editOptionBtn);
  noteOptions.appendChild(editOption);
  favOption.appendChild(favOptionBtn);
  noteOptions.appendChild(favOption);
  deleteOption.appendChild(deleteOptionBtn);
  noteOptions.appendChild(deleteOption);

  document.getElementById("notesListContentDiv").appendChild(buttonWrap);
  document.getElementById("containerContent").appendChild(textCont);

  tinymce.init({
    selector: "textarea",
    branding: false,
    plugins: "print",
    width: "100%",
    menubar: false,
    toolbar: "print",
  });

  var savedNoteName = "savedNoteID" + getNoteID;
  var getCurrNotes = JSON.parse(localStorage.getItem("savedNoteName"));
  getCurrNotes.push(savedNoteName);
  var strCurrNotes = JSON.stringify(getCurrNotes);
  localStorage.setItem("savedNoteName", strCurrNotes);

  var isFavorite = false;
  var isFavoriteStr = JSON.stringify(isFavorite);
  var wrapContent = buttonWrap.outerHTML;
  var noteContent = "";
  var saveNoteContent = [];
  saveNoteContent.push(wrapContent);
  saveNoteContent.push(noteContent);
  saveNoteContent.push(isFavoriteStr);
  var strSaveNoteCont = JSON.stringify(saveNoteContent);
  localStorage.setItem(savedNoteName, strSaveNoteCont);

  function showCurrentNote() {
    var textContClass = document.getElementsByClassName("textCont");
    for (var x = 0; x < textContClass.length; x++) {
      var cycConts = textContClass[x];
      var cycContID = cycConts.id;
      var getCycNum = cycContID.replace("textContID", "");

      if (cycConts != document.getElementById("textContID" + getNoteID)) {
        cycConts.style.position = "absolute";
        cycConts.style.left = "-999em";
      } else {
        cycConts.style.position = "";
        cycConts.style.left = "";
      }
    }
  }
  showCurrentNote();
}

function saveNote() {
  var madeANote = JSON.parse(localStorage.getItem("madeAnyNote"));
  if (tinymce.editors.length > 0) {
    var getNoteNames = JSON.parse(localStorage.getItem("savedNoteName"));
    for (var q = 0; q < getNoteNames.length; q++) {
      var specID = getNoteNames[q].replace("savedNoteID", "");
      var textToUpdate = JSON.parse(
        localStorage.getItem("savedNoteID" + specID)
      );
      var newText = tinymce.get("textEditorID" + specID).getContent();
      textToUpdate[1] = newText;
      var textToUpdateStr = JSON.stringify(textToUpdate);
      localStorage.setItem("savedNoteID" + specID, textToUpdateStr);
    }
  }
}

function deleteNote(delBtn) {
  var delBtnID = document.getElementById(delBtn).id;
  var numID = delBtnID.replace("deleteOptionBtnID", "");
  var noteToDel = "savedNoteID" + numID;
  var noteNames = JSON.parse(localStorage.getItem("savedNoteName"));
  var newNoteNames = [];
  for (var j = 0; j < noteNames.length; j++) {
    var addNonDel = noteNames[j];
    if (addNonDel != noteToDel) {
      newNoteNames.push(addNonDel);
    }
  }
  var newNoteNamesStr = JSON.stringify(newNoteNames);
  localStorage.setItem("savedNoteName", newNoteNamesStr);
  var btnWrap = document.getElementById("buttonWrapID" + numID);
  var txtCont = document.getElementById("textContID" + numID);
  localStorage.removeItem(noteToDel);
  btnWrap.remove();
  txtCont.remove();
}

function favoriteNote(favBtn) {
  var favBtnID = document.getElementById(favBtn).id;
  var favNumID = favBtnID.replace("favOptionBtnID", "");
  var favNoteName = "savedNoteID" + favNumID;
  var favNoteArr = JSON.parse(localStorage.getItem(favNoteName));
  var favNoteBoo = JSON.parse(favNoteArr[2]);
  var favNoteBtnTwo = document.getElementById("favOptionBtnID" + favNumID);

  if (favNoteBoo === false) {
    favNoteBoo = true;
    var favNoteBooStr = JSON.stringify(favNoteBoo);
    favNoteArr[2] = favNoteBooStr;
    var favNoteArrStr = JSON.stringify(favNoteArr);
    localStorage.setItem(favNoteName, favNoteArrStr);
    favNoteBtnTwo.innerHTML = '<i class="fas fa-heart"></i>';
  } else if (favNoteBoo === true) {
    favNoteBoo = false;
    var favNoteBooStrTwo = JSON.stringify(favNoteBoo);
    favNoteArr[2] = favNoteBooStrTwo;
    var favNoteArrStrTwo = JSON.stringify(favNoteArr);
    localStorage.setItem(favNoteName, favNoteArrStrTwo);
    favNoteBtnTwo.innerHTML = '<i class="far fa-heart"></i>';
  }
}

function saveNoteTitle(inputID) {
  var editBtnID = document.getElementById(inputID).id;
  var editNumID = editBtnID.replace("titleInpID", "");
  var inputEdit = document.getElementById("titleInpID" + editNumID);
  var titleToEdit = document.getElementById("noteTitleID" + editNumID);

  titleToEdit.innerHTML = inputEdit.value;
  var noteTitleToUpdate = JSON.parse(
    localStorage.getItem("savedNoteID" + editNumID)
  );
  var newWrapContent = document.getElementById("buttonWrapID" + editNumID)
    .outerHTML;
  noteTitleToUpdate[0] = newWrapContent;
  var noteTitleToUpdateStr = JSON.stringify(noteTitleToUpdate);
  localStorage.setItem("savedNoteID" + editNumID, noteTitleToUpdateStr);

  inputEdit.style.position = "absolute";
  inputEdit.style.left = "-999em";

  titleToEdit.style.position = "";
  titleToEdit.style.left = "";
}

function editNote(editBtn) {
  var editBtnIDTwo = document.getElementById(editBtn).id;
  var editNumIDTwo = editBtnIDTwo.replace("editOptionBtnID", "");
  var inputEditTwo = document.getElementById("titleInpID" + editNumIDTwo);

  var titleToEditTwo = document.getElementById("noteTitleID" + editNumIDTwo);

  if (inputEditTwo === document.activeElement) {
    inputEditTwo.blur();
    inputEditTwo.style.position = "absolute";
    inputEditTwo.style.left = "-999em";

    titleToEdit.style.position = "";
    titleToEdit.style.left = "";
  } else if (inputEditTwo !== document.activeElement) {
    inputEditTwo.focus();
    inputEditTwo.style.position = "absolute";
    inputEditTwo.style.left = "";

    titleToEditTwo.style.position = "absolute";
    titleToEditTwo.style.left = "-999em";
  }
}

function visible(notebtn) {
  var txtContToShow = document.getElementById("textContID" + notebtn);
  var allTxtConts = document.getElementsByClassName("textCont");
  for (var k = 0; k < allTxtConts.length; k++) {
    if (allTxtConts[k] != txtContToShow) {
      allTxtConts[k].style.position = "absolute";
      allTxtConts[k].style.left = "-999em";
    } else if ((allTxtConts[k] = txtContToShow)) {
      allTxtConts[k].style.position = "";
      allTxtConts[k].style.left = "";
      txtContToShow.focus();
    }
  }
}

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

document.getElementById("ham").addEventListener("click", hamburgerMenu);

setInterval(saveNote, 100);
