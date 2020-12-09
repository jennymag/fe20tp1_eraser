if (localStorage.getItem("myCurrentNote") === null) {
  var zero = 0;
  localStorage.setItem("myCurrentNote", zero);
}
if (localStorage.getItem("savedNoteName") === null) {
  var emptyArrOne = [];
  var strEmptyArrOne = JSON.stringify(emptyArrOne);
  localStorage.setItem("savedNoteName", strEmptyArrOne);
}
if (localStorage.getItem("myFaveNotes") === null) {
  var emptyArrTwo = [];
  var strEmptyArrTwo = JSON.stringify(emptyArrTwo);
  localStorage.setItem("myFaveNotes", strEmptyArrTwo);
}

/* Note loading function */
function loadNotes() {
  var loadNames = JSON.parse(localStorage.getItem("savedNoteName"));
  var loadNamesLength = loadNames.length;
  var loadNamesLast = loadNamesLength - 1;
  var lastLoadName = loadNames[loadNamesLast];

  for (var x = 0; x < loadNames.length; x++) {
    var getLoadedName = loadNames[x];
    var contArr = JSON.parse(localStorage.getItem(getLoadedName));
    var loadButtonWrap = contArr[0];
    var loadTextContent = contArr[1];
    var getNoteId = getLoadedName.replace("noteSaveInfoID", "");
    var boolName = "firstSaveID" + getNoteId;
    var getBool = localStorage.getItem(boolName);
    var strBool = JSON.parse(getBool);

    if ((strBool = true)) {
      var btnDivLoad = document.createElement("div");
      document.getElementById("buttonMainID").appendChild(btnDivLoad);
      btnDivLoad.outerHTML = loadButtonWrap;

      var textDivLoad = document.createElement("div");
      textDivLoad.setAttribute("class", "textCont");
      textDivLoad.setAttribute("id", "textContID" + getNoteId);

      var textEditorLoad = document.createElement("textarea");
      textEditorLoad.setAttribute("class", "textEditor");
      textEditorLoad.setAttribute("id", "textEditorID" + getNoteId);
      textEditorLoad.innerHTML = loadTextContent;

      textDivLoad.appendChild(textEditorLoad);
      document.getElementById("editorMainID").appendChild(textDivLoad);

      if (getLoadedName != lastLoadName) {
        document.getElementById("textContID" + getNoteId).style.position =
          "absolute";
        document.getElementById("textContID" + getNoteId).style.left = "-999em";
      } else {
        document.getElementById("textContID" + getNoteId).style.position = "";
        document.getElementById("textContID" + getNoteId).style.left = "";
      }

      tinymce.init({ selector: "textarea", width: "100%", branding: false });
    } else if ((strBool = false)) {
      var getTextEditor = document.getElementById("textEditorID" + getNoteId);
      getTextEditor.innerHTML = loadTextContent;
    }
  }
}

loadNotes();

function createNote() {
  /* Identify each created note */
  var currentNote = +localStorage.getItem("myCurrentNote");
  var newNote = 1;
  var sumNote = currentNote + newNote;
  localStorage.setItem("myCurrentNote", sumNote);
  var noteID = +localStorage.getItem("myCurrentNote");

  /* Notebutton creation */
  var noteButton = document.createElement("BUTTON");
  noteButton.setAttribute("id", noteID);
  noteButton.setAttribute("class", "noteButton");
  noteButton.setAttribute("onclick", "visible(this.id)");

  /* Text for notebutton div creation */
  var noteButtonText = document.createElement("div");
  noteButtonText.setAttribute("id", "noteButtonTextID" + noteID);
  noteButtonText.setAttribute("class", "noteButtonText");

  /* Note title */
  var noteTitle = document.createElement("H1");
  noteTitle.setAttribute("class", "noteTitle");
  noteTitle.setAttribute("id", "noteTitleID" + noteID);
  var tempTitleText = document.createTextNode("My Note #" + noteID);
  noteTitle.appendChild(tempTitleText);

  /* Note title preview */
  var notePreview = document.createElement("P1");
  var tempPreview = document.createTextNode("lorem ipsum one two");
  notePreview.appendChild(tempPreview);

  /*Button specific div 2*/
  var buttonWrap = document.createElement("div");
  buttonWrap.setAttribute("class", "buttonWrap");
  buttonWrap.setAttribute("id", "buttonWrapID" + noteID);

  /* Button specific div 2*/
  var buttonCont = document.createElement("div");
  buttonCont.setAttribute("class", "buttonCont");
  buttonCont.setAttribute("id", "buttonContID" + noteID);

  /* Create div for note options */
  var noteOptions = document.createElement("div");
  noteOptions.setAttribute("class", "noteOptions");
  noteOptions.setAttribute("id", "noteOptionsID" + noteID);

  /* Create saveOption div */
  var saveOption = document.createElement("div");
  saveOption.setAttribute("class", "saveOption");
  saveOption.setAttribute("id", "saveOptionID" + noteID);

  /* create saveOption button */
  var saveOptionButton = document.createElement("BUTTON");
  saveOptionButton.setAttribute("class", "saveOptionButton");
  saveOptionButton.setAttribute("id", "saveOptionButtonID" + noteID);
  saveOptionButton.setAttribute("onClick", "saveNote(this.id)");
  saveOptionButton.innerHTML = '<i class = "fa fa-save"></i>';

  /* create favoption div */
  var favOption = document.createElement("div");
  favOption.setAttribute("class", "favOption");
  favOption.setAttribute("id", "favOptionID" + noteID);

  /* create favoption button */
  var favOptionButton = document.createElement("BUTTON");
  favOptionButton.setAttribute("class", "favOptionButton");
  favOptionButton.setAttribute("id", "favOptionButtonID" + noteID);
  favOptionButton.setAttribute("onClick", "favoriteNote(this.id)");
  favOptionButton.innerHTML = '<i class="fa fa-star"></i>';

  /* create deleteoption div */
  var deleteOption = document.createElement("div");
  deleteOption.setAttribute("class", "deleteOption");
  deleteOption.setAttribute("id", "deleteOptionID" + noteID);

  /* create deleteoption button */
  var deleteOptionButton = document.createElement("BUTTON");
  deleteOptionButton.setAttribute("class", "deleteOptionButton");
  deleteOptionButton.setAttribute("id", "deleteOptionButtonID" + noteID);
  deleteOptionButton.innerHTML = '<i class="fa fa-trash"></i>';
  deleteOptionButton.setAttribute("onClick", "deleteNote(this.id)");

  /* create edit option div */
  var editOption = document.createElement("div");
  editOption.setAttribute("class", "editOption");
  editOption.setAttribute("id", "editOptionID" + noteID);

  /* create edit option button */
  var editOptionButton = document.createElement("BUTTON");
  editOptionButton.setAttribute("class", "editOptionButton");
  editOptionButton.setAttribute("id", "editOptionButtonID" + noteID);
  editOptionButton.setAttribute("onclick", "editNote(this.id)");
  editOptionButton.innerHTML = '<i class="fa fa-edit"></i>';

  /* Text specific div */
  var textCont = document.createElement("div");
  textCont.setAttribute("class", "textCont");
  textCont.setAttribute("id", "textContID" + noteID);

  /* Text specific area */
  var textEditor = document.createElement("textarea");
  textEditor.setAttribute("class", "textEditor");
  textEditor.setAttribute("id", "textEditorID" + noteID);

  /* Append text specific area into text specific div, then append that into main text div. */
  buttonCont.appendChild(noteButton);
  buttonCont.appendChild(noteButtonText);
  noteButtonText.appendChild(noteTitle);
  noteButtonText.appendChild(notePreview);
  buttonWrap.appendChild(buttonCont);
  document.getElementById("buttonMainID").appendChild(buttonWrap);
  document.getElementById("editorMainID").appendChild(textCont);
  document.getElementById("textContID" + noteID).appendChild(textEditor);

  document.getElementById("buttonWrapID" + noteID).appendChild(noteOptions);
  noteOptions.appendChild(saveOption);
  noteOptions.appendChild(favOption);
  noteOptions.appendChild(editOption);
  noteOptions.appendChild(deleteOption);
  saveOption.appendChild(saveOptionButton);
  favOption.appendChild(favOptionButton);
  editOption.appendChild(editOptionButton);
  deleteOption.appendChild(deleteOptionButton);

  tinymce.init({ selector: "textarea", width: "100%", branding: false });

  function showCurrentNote() {
    var textEditorContClass = document.getElementsByClassName("textCont");
    var textEditorContClassLength = textEditorContClass.length;

    for (x = 0; x < textEditorContClassLength; x++) {
      var cycleEditors = textEditorContClass[x];
      if (cycleEditors != document.getElementById("textContID" + noteID)) {
        cycleEditors.style.position = "absolute";
        cycleEditors.style.left = "-999em";
      } else {
        {
          cycleEditors.style.position = "";
          cycleEditors.style.left = "";
        }
      }
    }
  }

  showCurrentNote();
}

function saveNote(operate_id) {
  var operateOptionIDBtn = document.getElementById(operate_id).id;
  /*remove the specific save button id from it, so we have the strict numeric id used to save other stuff */
  var saveNoteID = operateOptionIDBtn.replace("saveOptionButtonID", "");

  var firstSave = "firstSaveID" + saveNoteID;
  if (localStorage.getItem(firstSave) === null) {
    var newSaveName = "noteSaveInfoID" + saveNoteID;
    var getSavedNamesParsed = JSON.parse(localStorage.getItem("savedNoteName"));
    getSavedNamesParsed.push(newSaveName);
    var getSavedNamesStr = JSON.stringify(getSavedNamesParsed);
    localStorage.setItem("savedNoteName", getSavedNamesStr);

    /* Content within note */
    var noteContent = tinymce.get("textEditorID" + saveNoteID).getContent();

    /* buttonwrap content */
    var noteButtonSave = document.getElementById("buttonWrapID" + saveNoteID);
    var noteButtonElementContent = noteButtonSave.outerHTML;

    /*create array with note information within it */
    var noteSaveInfo = [];
    noteSaveInfo.push(noteButtonElementContent);
    noteSaveInfo.push(noteContent);

    var strNoteSaveInfo = JSON.stringify(noteSaveInfo);

    /* store info in localstorage */
    localStorage.setItem(newSaveName, strNoteSaveInfo);
    var firstSaveBool = true;
    var strFirstSaveBool = JSON.stringify(firstSaveBool);
    localStorage.setItem(firstSave, strFirstSaveBool);
  } else if (
    JSON.parse(localStorage.getItem(firstSave)) === true ||
    JSON.parse(localStorage.getItem(firstSave)) === false
  ) {
    var savedBeforeBool = false;
    var savedBeforeStr = JSON.stringify(savedBeforeBool);
    localStorage.setItem(firstSave, savedBeforeStr);

    var updateNoteContent = tinymce
      .get("textEditorID" + saveNoteID)
      .getContent();

    var contentHolder = "noteSaveInfoID" + saveNoteID;
    var noteCont = JSON.parse(
      localStorage.getItem("noteSaveInfoID" + saveNoteID)
    );
    noteCont[1] = updateNoteContent;
    var transToStr = JSON.stringify(noteCont);
    localStorage.setItem(contentHolder, transToStr);
  }
}

function deleteNote(delBtn_id) {
  var delOptionBtnID = document.getElementById(delBtn_id).id;
  var numID = delOptionBtnID.replace("deleteOptionButtonID", "");
  var noteDelStoreName = "noteSaveInfoID" + numID;
  var boolSaveID = "firstSaveID" + numID;

  localStorage.removeItem(noteDelStoreName);
  localStorage.removeItem(boolSaveID);

  var noteName = JSON.parse(localStorage.getItem("savedNoteName"));
  for (var x = 0; x < noteName.length; x++) {
    if ((noteName[x] = noteDelStoreName)) {
      noteName.splice(x - 1, 1);
    }
  }
  var newName = JSON.stringify(noteName);
  localStorage.setItem("savedNoteName", newName);

  var btnWrap = document.getElementById("buttonWrapID" + numID);
  var txtCont = document.getElementById("textContID" + numID);
  btnWrap.remove();
  txtCont.remove();
}

function editNote(editBtn_id) {
  var editBtnId = document.getElementById(editBtn_id).id;
  var numEditID = editBtnId.replace("editOptionButtonID", "");
  var titleToEdit = document.getElementById("noteTitleID" + numEditID);
  var whatToEdit = prompt("What would you like to name this note?");
  titleToEdit.innerHTML = whatToEdit;
}

function favoriteNote(favBtn_id) {
  var favBtnId = document.getElementById(favBtn_id).id;
  var numFavId = favBtnId.replace("favOptionButtonID", "");

  if (JSON.parse(localStorage.getItem("checkFavoriteID" + numFavId)) === null) {
    var getFavs = JSON.parse(localStorage.getItem("myFaveNotes"));
    var newFavNameAdd = "faveNoteNameID" + numFavId;
    getFavs.push(newFavNameAdd);
    var getFavsStr = JSON.stringify(getFavs);
    localStorage.setItem("myFaveNotes", getFavsStr);
    var isFavorite = true;
    var parIsFav = JSON.stringify(isFavorite);
    var specFavorite = "checkFavoriteID" + numFavId;
    localStorage.setItem(specFavorite, parIsFav);
  } else if (JSON.parse(localStorage.getItem(specFavorite)) === true) {
    var getFavsTwo = JSON.parse(localStorage.getItem("myFaveNotes"));
    for (var k = 0; k < getFavsTwo.length; k++) {
      var cycFavList = getFavsTwo[k];
    }
  }
}

function visible(clicked_id) {
  var currentVisible = document.getElementById("textContID" + clicked_id);
  var allTextNotes = document.getElementsByClassName("textCont");
  var allTextNotesLength = allTextNotes.length;
  for (x = 0; x < allTextNotesLength; x++) {
    var cycleEditorsTwo = allTextNotes[x];
    if (cycleEditorsTwo != currentVisible) {
      cycleEditorsTwo.style.position = "absolute";
      cycleEditorsTwo.style.left = "-999em";
    } else {
      cycleEditorsTwo.style.position = "";
      cycleEditorsTwo.style.left = "";
    }
  }
}

/* print notes function */
document.getElementById("btn").onclick = function () {
  document.getElementById("toolBar").hidden = true;
};
