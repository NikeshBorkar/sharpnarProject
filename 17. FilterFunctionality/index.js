
let form = document.getElementsByTagName('form')[0];
let btn = document.getElementsByTagName('button')[0];

const disInput = document.createElement('input')
disInput.id = 'description'
disInput.setAttribute('type', 'text')
disInput.setAttribute('placeholder','Enter fruit description')

form.insertBefore(disInput,btn)
// Task 1: Use DOM Manipulation to add another input element inside form, before the button.
// This input element will take the description of the fruit.
// Create an input element, give it id="description", type="text", and placeholder text like "Enter fruit description".
// Then insert it before the button inside the form.


// add fruit to the cart
let fruititems = document.querySelector('.fruits');
let descriptionitems = document.querySelector('#description');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Ensure that a description is provided
    let fruitDescription = document.getElementById('description').value;
    if (fruitDescription === '') {
        alert('Please enter a description.');
        return;
    }
    let fruit=document.getElementById('fruit-to-add').value

    const newLi = document.createElement('li')
    newLi.className='fruit'
    
    newLi.innerHTML=`${fruit}<p style="font-style:italic;">${fruitDescription}</p> <button class="delete-btn">x</button>`
    // Task 2: Add code to show fruit name and description.
    // Create a new <li> element and add fruit name + description (in a <p> tag).
    // Show the description in italics.
    // Add a delete button at the end.
    // Append the new li element to the fruit list.
    fruititems.appendChild(newLi)
    // Clear input fields
    document.getElementById('fruit-to-add').value = '';
    document.getElementById('description').value = '';
});


// delete functionality
fruititems.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        let buttontodelete = event.target.parentElement;
        fruititems.removeChild(buttontodelete);
    }
});

let filter = document.getElementById('filter')

filter.addEventListener('keyup', function (event) {
    const textEntered = event.target.value.toLowerCase()
    const fruitItems1 = document.getElementsByClassName("fruit");
    
    for (let i = 0; i < fruitItems1.length; i++){
        
        const currentFruitText1 = fruitItems1[i].firstChild.textContent.toLowerCase();
        const currentFruitText3 = fruitItems1[i].children
        const currentFruitText2=currentFruitText3[0].textContent.toLowerCase()
        
        if (currentFruitText1.indexOf(textEntered) > -1 || currentFruitText2.indexOf(textEntered)> -1) {
            fruitItems1[i].style.display = 'flex';
        } 
            else{
            fruitItems1[i].style.display="none"
        }
    }
    
})
// Task 3: Create a filter that shows only those fruits whose
// either name or description or both matches the entered text.

// HINT: Check both the fruit name and the description (<p> tag)
// If either includes the entered text, show it; otherwise, hide it.


