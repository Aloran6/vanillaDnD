const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Fill Listener

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (let empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}
// Drag Functions
function dragStart(e) {
  e.target.classList.add("hold");
  console.dir(e.target);
  //   e.target.classList.add("invisible");
  setTimeout(() => e.target.classList.add("invisible"), 1);
}
function dragEnd(e) {
  e.target.classList.remove("hold", "invisible");
}

function dragOver(e) {
  e.preventDefault();
  console.log("over");
}
function dragEnter(e) {
  e.target.classList.add("hovered");
  console.log("enter");
}
function dragLeave(e) {
  e.target.classList.remove("hovered");
  console.log("leave");
}
function dragDrop(e) {
  e.target.appendChild(fill);
  console.log("drop");
}
