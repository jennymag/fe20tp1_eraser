function toggleStar(e) {
  const id = e.target.getAttribute("data-id");
  const index = notes.findIndex((obj) => obj.title === id);
  notes[index].is_favorite = !notes[index].is_favorite;
  render();
}

function createNote({ title, text, is_favorite }) {
  const el = document.createElement("div");
  el.className = "note";
  const btn = document.createElement("button");
  btn.setAttribute("data-id", title);
  btn.className = "star";
  btn.innerText = is_favorite ? "★" : "☆";
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

const notes = [
  {
    title: "My first note",
    text: "Bla bla bla",
    is_favorite: false,
  },
  {
    title: "My second note",
    text: "Bla bla bla",
    is_favorite: false,
  },
];

function render() {
  const $notes = document.getElementById("notes");
  const $favs = document.getElementById("favs");
  $notes.innerHTML = "";
  for (const note of notes) {
    $notes.appendChild(createNote(note));
  }
  $favs.innerHTML = "";
  for (const note of notes) {
    if (note.is_favorite) {
      $favs.appendChild(createNote(note));
    }
  }
}

render();
