// Write your code below:


function handleFormSubmit(event) {
    event.preventDefault();
    let username = event.target.username.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value
    let str = `${username},${email},${phone}`
    let obj = {
        "username": username,
        "email": email,
        "phone": phone
    }
    localStorage.setItem(email, JSON.stringify(obj))

    const newUl = document.querySelector('ul');
    const newLi = document.createElement('li');
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn'
    deleteBtn.innerHTML = "Delete"
    deleteBtn.addEventListener('click',deleteLi)
    newLi.innerHTML = `${str}`
    newLi.appendChild(deleteBtn)
    newUl.appendChild(newLi)
    


    function deleteLi(event) {

        const newUli = document.querySelector('ul')
        const deletli = event.target.parentElement
        const email = event.target.parentElement.textContent.split(",")[1]
        newUli.removeChild(deletli)
        localStorage.removeItem(email)
    }


}
module.exports = handleFormSubmit