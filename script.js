var zero = 0;
localStorage.setItem("myCurrentNote", zero);

function createNote() {
  /* NOTE CALCULATION */
  var currentNote = +localStorage.getItem("myCurrentNote");
  var newNote = 1;
  var sumNote = currentNote + newNote;
  localStorage.setItem("myCurrentNote", sumNote);
  var theNewNote = +localStorage.getItem("myCurrentNote");
  /* NOTE CALCULATION */

  /* "Button" creation */
  var noteButton = document.createElement("BUTTON");
  noteButton.setAttribute("id", theNewNote);
  noteButton.setAttribute("class", "selectNote");
  noteButton.setAttribute("onclick", "visible(this.id)");
  /* "BUTTON" CREATION */

  /* text for the button */
  var divForText = document.createElement("div");
  divForText.setAttribute("id", "divForText" + theNewNote);
  divForText.setAttribute("class", "divForTextClass");

  var tempText = document.createElement("H1");
  tempText.setAttribute("class", "noteButtonDiv");
  var textInButton = document.createTextNode("" + "My Note #" + theNewNote);
  tempText.appendChild(textInButton);

  var tempParagraphText = document.createElement("P1");
  var tempParagraph = document.createTextNode("lorem ipsum one two");
  tempParagraphText.appendChild(tempParagraph);

  /* Append Button into a div of its own */
  var noteButtonDiv = document.createElement("div");
  noteButtonDiv.setAttribute("id", "noteButtonDiv#" + theNewNote);
  noteButtonDiv.setAttribute("class", "noteButtonDiv");
  document.getElementById("noteButtonID").appendChild(noteButtonDiv);
  document
    .getElementById("noteButtonDiv#" + theNewNote)
    .appendChild(divForText);
  document
    .getElementById("noteButtonDiv#" + theNewNote)
    .appendChild(noteButton);
  document.getElementById("divForText" + theNewNote).appendChild(tempText);
  document
    .getElementById("divForText" + theNewNote)
    .appendChild(tempParagraphText);

  /* Styling for text in button */

  /* Styling for text in button */

  /* TEXTDIV CREATION */
  var textDiv = document.createElement("div");
  textDiv.setAttribute("id", "textDiv" + theNewNote);
  textDiv.setAttribute("class", "textdivCLASS");
  document.getElementById("noteTextContainerID").appendChild(textDiv);
  /* TEXTDIV CREATION */

  /* EDITORDIV WITHIN TEXTDIV FOR QUILL */
  var textDivEditor = document.createElement("div");
  textDivEditor.setAttribute("id", "textDivEditor" + theNewNote);
  document.getElementById("textDiv" + theNewNote).appendChild(textDivEditor);
  document.getElementById("textDivEditor" + theNewNote).style.maxHeight =
    "100vh";
  document.getElementById("textDivEditor" + theNewNote).style.height = "80vh";
  document.getElementById("textDivEditor" + theNewNote).style.width = "100%";
  /* EDITORDIV WITHIN TEXTDIV FOR QUILL */

  /* QUILL CALLING SCRIPT */
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
  /* QUILL CALLING SCRIPT */

  /* make new note show first */
  var showingNewNote = document.getElementById("textDiv" + theNewNote);
  var checkOtherNote = document.getElementsByClassName("textdivCLASS");
  for (x = 1; x <= checkOtherNote.length; x++) {
    var checkOtherNoteTest = document.getElementById("textDiv" + x);
    if (checkOtherNoteTest != showingNewNote) {
      document.getElementById("textDiv" + x).style.position = "absolute";
      document.getElementById("textDiv" + x).style.left = "-999em";
    }
  }
}

function visible(clicked_id) {
  var checkWhichDiv = true;

  var currentVisible = document.getElementById("textDiv" + clicked_id);
  var allTextDivs = document.getElementsByClassName("textdivCLASS");
  for (x = 1; x <= allTextDivs.length; x++) {
    var checkVisibleDiv = document.getElementById("textDiv" + x);
    if (checkVisibleDiv != currentVisible) {
      document.getElementById("textDiv" + x).style.position = "absolute";
      document.getElementById("textDiv" + x).style.left = "-999em";
    } else {
      document.getElementById("textDiv" + x).style.position = "";
      document.getElementById("textDiv" + x).style.left = "";
    }
  }
}

/*localStorage.setItem("Visibility", "visible")
function visible(clicked_id)
{   
    
    
    var checkVisible = localStorage.getItem("Visibility");
    if(checkVisible == 'visible')
        {
            document.getElementById('textDiv' + clicked_id).style.position = 'absolute';
            document.getElementById('textDiv' + clicked_id).style.left = '-999em';
            localStorage.setItem("Visibility", "invisible");
        }
    else if(checkVisible == 'invisible')
        {
            document.getElementById('textDiv' + clicked_id).style.left = "";
            document.getElementById('textDiv' + clicked_id).style.position = "";
            localStorage.setItem("Visibility", "visible");
        }
}
*/
