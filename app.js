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

function saveNote() {
  var getNoteNames = JSON.parse(localStorage.getItem("savedNoteName"));
  for (var q = 0; q < getNoteNames.length; q++) {
    var cycleSaved = getNoteNames[q];
    var specId = cycleSaved.replace("savedNoteID", "");
    var updateTinyCont = tinymce.get("textEditorID" + specId).getContent;
    var noteToPush = JSON.parse(localStorage.getItem("savedNoteID" + specId));
    noteToPush[1] = updateTinyCont;
    var noteToPushStr = JSON.stringify(noteToPush);
    localStorage.setItem("savedNoteID" + specId, noteToPushStr);
  }
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
    var getNoteId = getLoadedName.replace("savedNoteID", "");

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

    tinymce.init({
      selector: "textarea",
      oninit: setInterval(saveNote(), 1000),
      width: "100%",
      branding: false,
      init_instance_callback: function (editor) {
        var freeTiny = document.querySelector(".tox .tox-notification--in");
        freeTiny.style.display = "none";
      },
    });
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

  var newNoteSaveName = "savedNoteID" + noteID;
  var getCurrNotes = JSON.parse(localStorage.getItem("savedNoteName"));
  getCurrNotes.push(newNoteSaveName);
  var strCurrNotes = JSON.stringify(getCurrNotes);
  localStorage.setItem("savedNoteName", strCurrNotes);

  var wrapContent = buttonWrap.outerHTML;
  var noteContent = tinymce.get("textEditorID" + noteID).getContent();

  var noteSaveContent = [];
  noteSaveContent.push(wrapContent);
  noteSaveContent.push(noteContent);
  var strNoteSaveCont = JSON.stringify(noteSaveContent);
  localStorage.setItem(newNoteSaveName, strNoteSaveCont);

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

  saveNote();
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
  var getSaves = JSON.parse(localStorage.getItem("savedNoteName"));
  var favBtnId = document.getElementById(favBtn_id).id;
  var numFavId = favBtnId.replace("favOptionButtonID", "");
  if (getSaves.length == 0) {
    alert("Please save your note first!");
  }

  for (var p = 0; p < getSaves.length; p++) {
    var checkFaveSave = "noteSaveInfoID" + numFavId;
    if (checkFaveSave != getSaves[p]) {
      alert("Please save the note first!");
    } else if ((checkFaveSave = getSaves[p])) {
      if (
        JSON.parse(localStorage.getItem("checkFavoriteID" + numFavId)) === null
      ) {
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

function testA() {
  var testTiny = tinymc.get("textEditorID1").getContent;
}
