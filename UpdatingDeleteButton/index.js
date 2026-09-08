document.addEventListener("DOMContentLoaded", initialize);


// Don't remove anything just complete the functions


// When the page get load display all users
 function initialize(){
     let newArr = JSON.parse(localStorage.getItem("usersList")) || [];
     let newUl=document.querySelector('ul')
     newUl.innerHTML=""
     for (let i = 0; i < newArr.length; i++){
         let newLi = document.createElement('li')
          newLi.id=newArr[i].id
         newLi.innerHTML=`${newArr[i].username} ${newArr[i].email} ${newArr[i].phone}`
         newUl.appendChild(newLi)
     }
   display()
 }



// add new users in usersList array
function handleFormSubmit(event) {  
    event.preventDefault()
     let obj={}
    obj.username = event.target.username.value
    obj.email = event.target.email.value
    obj.phone = event.target.phone.value
    obj.id=Date.now()
   
    let arr = JSON.parse(localStorage.getItem("usersList")) || [];
    arr.push(obj)
    localStorage.setItem("usersList", JSON.stringify(arr))

   initialize()
}


 // use this function to display user on screen
 function display() {
     let newUl = document.querySelector('ul').children
     
     for (let i = 0; i < newUl.length; i++){
         let deleteBtn = document.createElement("button")
         deleteBtn.className = 'delete-btn';
         deleteBtn.innerHTML = "Delete"
         deleteBtn.addEventListener('click', deleteData)
         newUl[i].appendChild(deleteBtn)
     }
 }


 // use this function to delete the user details from local store and DOM (screen)
 function deleteData(event) {
     let ele = event.target.parentElement
     let id = ele.getAttribute('id')
     let arr = JSON.parse(localStorage.getItem("usersList")) || []
     ele.remove()
     const newArr = arr.filter(ele => ele.id != id);
     localStorage.setItem('usersList', JSON.stringify(newArr))
     initialize()
 }




 module.exports = handleFormSubmit
