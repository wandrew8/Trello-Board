// Make the DIV element draggable:
dragElement(document.getElementById("list1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  console.log(pos1, pos2, pos3, pos4)
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    console.log(pos1, pos2, pos3, pos4)

    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    console.log(pos1, pos2, pos3, pos4)

    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = pos4 -120 + "px";
    elmnt.style.left = pos3 -120 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    console.log(pos1, pos2, pos3, pos4)

    document.onmouseup = null;
    document.onmousemove = null;
  }
}