// // need to be able to update invertory from here, gonna put an alert as security measure using if statements



// let todoArray = JSON.parse(localStorage.getItem("todoList")) ? 
//   JSON.parse(localStorage.getItem("todoList")) : [];

// let input = document.querySelector(".input-item");
// let addButton = document.querySelector(".btn-add");
// let todoItem = document.querySelector(".content");

// // Button to add items to the array 
// addButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   duplicateItems(input.value);
//   location.reload();
// });

// // Appending my items to the DOM
// function appendItems() {
//   todoArray.forEach((item) => {
//     let checked = item.completed ? "checked" : null;
//     let stylingClass = item.completed ? "line-through": null
//     todoItem.innerHTML += 
//     `
//     <td>${item.id}</td>
//     <td>c</td>
//     <td>bugatii</td>
//     <td>12 000000</td>
//     <td>3</td>
//       <td> <i class="fa-solid fa-pen-to-square"> </i>
//         <i class="fa-solid fa-trash"> </i>
//         </td>
//       `
//   });
// }
// appendItems();


// // Delete Button for the list of items and array
// let deleteBtn = document.querySelectorAll(".deleteBtn");
// deleteBtn.forEach((del, index) => {
//   del.addEventListener("click", (e) => {
//     e.preventDefault();
//     todoArray.splice([index], 1);
//     localStorage.setItem("todoList", JSON.stringify(todoArray));
//     location.reload();
//   });
// });

// // This addeventListener is to target the checkbox through selecting every child the parent of the .content class 
// todoItem.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.target.parentElement.getAttribute("data-key"));

//   if (e.target.type === "checkbox") {
//     toggle(e.target.parentElement.getAttribute("data-key"));
//   }
//   location.reload();
// });

// // This function is to toggle between true and false for the completed property 
// function toggle(id) {
//   todoArray.forEach((item) => {
//     if (item.id == id) {
//       item.completed = !item.completed;
//     }
//   });
//   localStorage.setItem("todoList", JSON.stringify(todoArray));
// }

// // Function for adding the items to the array as objects
// function addTodo(todoName) {
//   if (todoName !== "") {
//     let todoList = {
//       id: Date.now(),
//       name: todoName,
//       completed: false,
//     };
//     todoArray.push(todoList);
//     localStorage.setItem("todoList", JSON.stringify(todoArray));
//   }
// }

// // The function is to prevent adding a duplicate item on the list.
// function duplicateItems(duplicate) {
//     if (todoArray.some(({name})=> name === duplicate)) {
//       alert(`${duplicate} is already on your list. Please enter a new item.`);
//     }else {
//       addTodo(input.value);
//     }
// }