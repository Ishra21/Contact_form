let form = document.querySelector("form")
let fname = document.querySelector("#name")
let phone = document.querySelector("#phone")
let email = document.querySelector("#email")
let textarea = document.querySelector("#cont")
let button = document.querySelector("button")
let ul = document.querySelector("ul")
// console.log(form)
// console.log(name)
// console.log(phone)
// console.log(email)
// console.log(textarea)
// console.log(button)

const submitDetails = (e) =>{
e.preventDefault();
let p1 = document.createElement("p")
let p2 = document.createElement("p")
let p3 = document.createElement("p")
let p4 = document.createElement("p")
let li = document.createElement("li")
let emailBtn = document.createElement("a")
let callBtn = document.createElement("a")
// let emailBtn = document.createElement("button")
// let callBtn = document.createElement("button")
let delBtn = document.createElement("button")
console.log(emailBtn)
console.log(callBtn)
console.log(delBtn)
emailBtn.innerText = "Send Email"
callBtn.innerText = "Call"
delBtn.innerText = "Delete"
// let textarea = document.createElement("textarea")

p1.innerText = "Name: " + fname.value
p2.innerText = "Phone: " + phone.value
p3.innerText = "Email:" + email.value
p4.innerText = "Message: " + textarea.value
li.className = "list-group-item"
emailBtn.className = "btn btn-warning  rounded-0";
callBtn.className = "btn btn-success  mx-2 rounded-0";
delBtn.className = "btn btn-danger rounded-0"
// textarea.innerText = textarea.value

emailBtn.href = "mailto:" + email.value;
callBtn.href = `tel:${phone.value}`; 
li.appendChild(p1)
li.appendChild(p2)
li.appendChild(p3)
li.appendChild(p4)
li.appendChild(emailBtn)
li.appendChild(callBtn)
li.appendChild(delBtn)
// li.appendChild(textarea)
ul.appendChild(li)

// console.log(ul)
// console.log(li)


}

form.addEventListener("submit", submitDetails)

// emailBtn.addEventListener("click", () => {
//     if(e.target.className.includes("btn-warning"))
//   {
//     window.location.href = `mailto:${email.value}`;
//   }
//  });
// callBtn.addEventListener("click", () => {
//     window.location.href = `tel:${phone.value}`;
// });

// const removeData = (e) =>{
//     if(e.target.className.includes("btn-danger")){
//         let li = e.target.parentElement
//         ul.removeChild(li)
//     }
// }

emailBtn.addEventListener("click", (e) => {
    if (e.target.className.includes("btn-warning")) {
        window.location.href = `mailto:${email.value}`;
    }
});

// callBtn.addEventListener("click", () => {
//     window.location.href = `tel:${phone.value}`;
// });

const removeData = (e) => {
    if (e.target.className.includes("btn-danger")) {
        let li = e.target.parentElement;
        ul.removeChild(li);
    }
};

// Assuming there's a button that triggers removeData, attach the event listener
ul.addEventListener("click", removeData); // ul is the parent of the items to be removed


ul.addEventListener("click", removeData)