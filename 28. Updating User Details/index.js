window.addEventListener("DOMContentLoaded",()=>{
    
    axios.get("https://crudcrud.com/api/4e1acf725d064165ab1a2a6301cbefd3/appointmentData")
    .then((response) => {
        
        console.log(response)
        for(let i=0;i<response.data.length;i++){
               displayUserOnScreen(response.data[i])
        }
        })
    .catch((error) => console.log(error));
})





function handleFormSubmit(event) {
  event.preventDefault();
  const editID=sessionStorage.getItem("editID")
  const userDetails = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };

  if(!editID){
  axios
    .post(
      "https://crudcrud.com/api/4e1acf725d064165ab1a2a6301cbefd3/appointmentData",
      userDetails
    )
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));
}else{
    console.log(editID)
    axios
    .put(
      `https://crudcrud.com/api/4e1acf725d064165ab1a2a6301cbefd3/appointmentData/${editID}`,
      userDetails
    )
    .then((response) => {
        console.log(response,true)
        document.getElementById(editID).childNodes[0].textContent=`${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`

        
    })
    .catch((error) => console.log(error));
    sessionStorage.removeItem("editID");
    document.getElementsByTagName("button")[0].innerText="Submit"

}

  // Clearing the input fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

function displayUserOnScreen(userDetails) {
  const userItem = document.createElement("li");
   userItem.id=userDetails._id
  userItem.appendChild(
    document.createTextNode(
      `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
    )
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("Delete"));
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("Edit"));
  userItem.appendChild(editBtn);

  const userList = document.querySelector("ul");
  userList.appendChild(userItem);


  deleteBtn.addEventListener("click", function (event) {
    userList.removeChild(event.target.parentElement);
    let userId=event.target.parentElement.id
    axios
    .delete(
      `https://crudcrud.com/api/4e1acf725d064165ab1a2a6301cbefd3/appointmentData/${userId}`,
    )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
  });

  
  editBtn.addEventListener("click", function (event) {
    const editId=event.target.parentElement.id

    axios.get(`https://crudcrud.com/api/4e1acf725d064165ab1a2a6301cbefd3/appointmentData/${editId}`)
    .then((response) => {
        
        console.log(response.data)
         document.getElementById("username").value = response.data.username;
         document.getElementById("email").value = response.data.email;
         document.getElementById("phone").value = response.data.phone;
         document.getElementsByTagName("button")[0].innerText="EditData"
         sessionStorage.setItem("editID",editId)
        })
    .catch((error) => console.log(error));
  });


}

// Do not touch code below

