/* Note System JS */
var noteSystemMain = document.createElement("div");
noteSystemMain.setAttribute("class", "mainSystemDiv");
noteSystemMain.setAttribute("id", "mainSystemDivID");
document.body.appendChild(noteSystemMain);
var zero = 0;
localStorage.setItem("myCurrentNote", zero);

function createNote() {
  var currentNote = +localStorage.getItem("myCurrentNote");
  var newNote = 1;
  var sumNote = currentNote + newNote;

  localStorage.setItem("myCurrentNote", sumNote);

  var theNewNote = +localStorage.getItem("myCurrentNote");

  var noteDivWrap = document.createElement("div");
  noteDivWrap.setAttribute("class", "noteWrapClass");
  noteDivWrap.setAttribute("id", "noteDivWrap" + theNewNote);
  document.getElementById("mainSystemDivID").appendChild(noteDivWrap);

  var noteButton = document.createElement("BUTTON");
  noteButton.setAttribute("id", theNewNote);
  noteButton.setAttribute("class", "selectNote");
  noteButton.setAttribute("onclick", "visible(this.id)");
  noteButton.style.textAlign = "center";
  noteButton.textContent = "My Note #" + theNewNote;

  document.getElementById("noteDivWrap" + theNewNote).appendChild(noteButton);

  var textDiv = document.createElement("div");
  textDiv.setAttribute("id", "textDiv" + theNewNote);
  textDiv.setAttribute("class", "mainSystemDiv");
  document.getElementById("noteDivWrap" + theNewNote).appendChild(textDiv);

  var textDivEditor = document.createElement("div");
  textDivEditor.setAttribute("id", "textDivEditor" + theNewNote);
  document.getElementById("textDiv" + theNewNote).appendChild(textDivEditor);

  document.getElementById("textDivEditor" + theNewNote).style.height = "50em";
  document.getElementById("textDivEditor" + theNewNote).style.width = "100em";

  var quill = new Quill("#" + "textDivEditor" + theNewNote, {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        ["image", "code-block"],
      ],
    },
    placeholder: "Compose an epic...",
    theme: "snow", // or 'bubble'
  });
}

localStorage.setItem("Visibility", "visible");
function visible(clicked_id) {
  var checkVisible = localStorage.getItem("Visibility");
  if (checkVisible == "visible") {
    document.getElementById("textDiv" + clicked_id).style.position = "absolute";
    document.getElementById("textDiv" + clicked_id).style.left = "-999em";
    localStorage.setItem("Visibility", "invisible");
  } else if (checkVisible == "invisible") {
    document.getElementById("textDiv" + clicked_id).style.left = "";
    document.getElementById("textDiv" + clicked_id).style.position = "";
    localStorage.setItem("Visibility", "visible");
  }
}
/* Note System JS */
