// Write your code below:
window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/fa399e64ad8a4b62a65db4028dc58392/appointmentData")
        .then((res) => {
            console.log(res)
            for (let i = 0; i < res.data.length;i++){
               displayUserOnScreen(res.data[i]) 
            }
        })
        .catch((err)=>console.log(err))
})


function handleFormSubmit(event) {
    event.preventDefault()
    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    };
    axios.post("https://crudcrud.com/api/fa39e64ad8a4b62a65db4028dc58392/appointmentData", userDetails)
        .then((res) => displayUserOnScreen(res.data))
        .catch((err) => console.log(err))

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}


function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.id = userDetails._id
    
    userItem.appendChild(
        document.createTextNode(
            `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
        )
    )

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"))
    userItem.appendChild(deleteBtn)

    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"))
    userItem.appendChild(editBtn)

    const userList = document.querySelector("ul")
    userList.appendChild(userItem)

    deleteBtn.addEventListener("click", function (event) {
        userList.removeChild(event.target.parentElement);
        let userId = event.target.parentElement.id

        axios.delete(`https://crudcrud.com/api/fa399e64ad8a4b62a65db4028dc58392/appointmentData/${userId}`)
            .then((res) => console.log(res))
            .catch((err)=>console.log(err))
    })

    editBtn.addEventListener("click", function (event) {
    userList.removeChild(event.target.parentElement);
    localStorage.removeItem(userDetails.email);
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;
  });


}

// Do not touch the code below
module.exports = handleFormSubmit;
