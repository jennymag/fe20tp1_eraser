function toggleStar(event) {
  const btn = event.target; //save clicked button
  const id = btn.getAttribute("data-id"); // save the id of button

  let clicked_note;
  for (const note of notes) {
    if (note.title === id) {
      clicked_note = note;
      break;
    }

    //fixa id från title
    //https://freshman.tech/todo-list/
    //const todo = {
    //  text: quill.getContents(),
    // checked: false,
    //id: Date.now(),
    //};
  }

  if (clicked_note.is_favorite) {
    clicked_note.is_favorite = false;
  } else {
    clicked_note.is_favorite = true;
  }

  render();
}

function createNote({ title, text, is_favorite }) {
  const el = document.createElement("div");
  el.className = "note";

  const btn = document.createElement("button");
  btn.setAttribute("data-id", title);
  btn.className = "star";
  if (is_favorite) {
    btn.innerText = "★";
  } else {
    btn.innerText = "☆";
  }
  btn.addEventListener("click", toggleStar);

  const h2 = document.createElement("h2");
  h2.innerText = title;

  const p = document.createElement("p");
  p.innerText = text;

  el.appendChild(btn);
  el.appendChild(h2);
  el.appendChild(p);

  return el;
}

function render() {
  //get elements
  const $notes = document.getElementById("notes");
  const $favs = document.getElementById("favs");
  //set to empty string
  $notes.innerHTML = "";
  $favs.innerHTML = "";

  //loop all notes,( för varje note i notes )
  //separera dom och array i  funktion
  for (const note of notes) {
    $notes.appendChild(createNote(note));
  }
  for (const note of notes) {
    if (note.is_favorite) {
      $favs.appendChild(createNote(note));
    }
  }
}

const notes = [
  {
    title: "My first note",
    text: "Bla bla bla",
    is_favorite: false,
  }, //kolla freshman add to do, single sort of truth
  {
    title: "My second note",
    text: "Bla bla bla",
    is_favorite: false,
  },
];

render();
