// Write your code below:
function handleFormSubmit(event) {
    event.preventDefault()

    let obj = {}
    obj.username = event.target.username.value
    obj.email = event.target.email.value
    obj.phone = event.target.phone.value

    localStorage.setItem(obj.email, JSON.stringify(obj))


    function getUsersFormLocalStorage() {
        const localObj={...localStorage}
        const allItem = []

        for (let key in localObj) {
            const newObj = {}
            newObj.key = key
            newObj.value = localObj[key]
            allItem.push(newObj)
        }


        const newul = document.querySelector('ul');
        newul.innerHTML = ""
        
        for (let i = 0; i < allItem.length; i++){
            const newli = document.createElement('li')
            const data = JSON.parse(allItem[i].value)
            newli.innerHTML = `${data.username},${data.email},${data.phone}`
            // const deleteBtn = document.createElement('Button');
            // deleteBtn.className='delete-btn';
            // deleteBtn.innerHtml = "Delete";
            // deleteBtn.addEventListener('click', deleteLi);
            // newli.appendChild(deleteBtn)
            newul.appendChild(newli)

            // function deleteLi(event) {
            //     const newUli = document.querySelector('ul');
            //     newUli.removeChild(event.target.parentElement)
            //     const email = event.target.parentElement.textContent.split(",")[1].split(":")[1]
            //     console.log(email)
            //     localStorage.removeItem(email)
            // }
            
        }
    }
    getUsersFormLocalStorage()


}

module.exports=handleFormSubmit