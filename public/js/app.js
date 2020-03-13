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
    console.log(elmnt.width)
    console.log(elmnt.height)
    console.log(elmnt)

    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = pos4 - 75 + "px";
    elmnt.style.left = pos3 - 20 + "px";
    // elmnt.style.top = pos4 -120 + "px";
    // elmnt.style.left = pos3 -120 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    console.log(pos1, pos2, pos3, pos4)

    document.onmouseup = null;
    document.onmousemove = null;
  }
}


const checkboxes = document.querySelectorAll('.todoList input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down
  // AND check that they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // go ahead and do what we please
    // loop over every single checkbox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));


// Changes background color of list header with onclick event
const colorButtons = document.querySelectorAll('.color');
const listHeader = document.querySelector(".grid")
colorButtons.forEach(function(button) {
    button.style.backgroundColor = button.dataset.color;
    button.style.opacity = 0.9;
    button.style.border = "solid rgba(0,0,0,0.1) 1px"
    button.style.boxShadow = "2px 2px 2px rgba(0,0,0,0.5)"
    button.addEventListener('click', function() {
      const addChoreButton = button.parentElement.parentElement.parentElement.querySelector('.chore');
      console.log(addChoreButton)
      addChoreButton.style.color = button.dataset.color;
      listHeader.style.backgroundColor = button.dataset.color;
    })
});

const backgroundColorButtons = document.querySelectorAll('.bgcolor');
const bodyBackground = document.querySelector("body")
backgroundColorButtons.forEach(function(button) {
    button.style.backgroundColor = button.dataset.color;
    button.style.opacity = 0.9;
    button.style.border = "solid rgba(0,0,0,0.1) 2px"
    button.style.boxShadow = "2px 2px 2px rgba(0,0,0,0.5)"
    button.addEventListener('click', function() {
      bodyBackground.style.backgroundColor = button.dataset.color;
    })
});

//Hover effect to show delete button
const choreItems = document.querySelectorAll(".item");
choreItems.forEach(item => {
  const deleteButton = item.querySelector('.delete');
  item.addEventListener('mouseenter', function(e) {
    deleteButton.classList.remove('hidden')
  })
  item.addEventListener('mouseleave', function(e) {
    deleteButton.classList.add('hidden')
  })
})

//Click event ot delete list item
const deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach(button => {
  button.addEventListener('click', function() {
    const parentElement = button.parentElement;
    console.log(parentElement)
    parentElement.remove();
  })
})

//Hover Effects for drag and add chore functionality
const dragger = document.querySelector('#move');
const toDoList = document.querySelectorAll('.todoList');

toDoList.forEach(list => {
  const dragger = list.querySelector('.fa-arrows');
  const addChoreButton = list.querySelector('.addChore')
  list.addEventListener('mouseenter', function(e) {
    dragger.classList.remove('hidden');
    addChoreButton.classList.remove('hidden')

  })
  list.addEventListener('mouseleave', function(e) {
    dragger.classList.add('hidden');
    addChoreButton.classList.add('hidden')
})})

//Click event to add new chores
const addChore = document.querySelectorAll('.addChore');
addChore.forEach(button => {
  button.addEventListener('click', function() {
    let html = `<input type="checkbox" />
    <p contenteditable="true" class="choreText">New Task</p>
    <p contenteditable="false" class="delete hidden">
      <i class="fa fa-trash-o" aria-hidden="true"></i>
    </p>
  `;
  const div = document.createElement('DIV');
  div.classList.add('item');
  div.innerHTML = html;
  const lastItem = button.parentElement;
  lastItem.appendChild(div)
  
  })
})