const btnAddSub = document.querySelector('.add-but')

btnAddSub.addEventListener("click", addNewSub);

function addNewSub() {
    const newForm = document.createElement('form')
    newForm.classList.add('input-row')

    const newFields = `
        <div class="input" >
            <div class="input-container">
                <input type="text" name="subject" class="fields">
                <input type="number" min="1" max="5" name="unit" class="fields">
                <input type="number" name="grade" class="fields">
                <button class="del-but">X</button>
            </div>
        </div>
    `
    newForm.innerHTML = newFields
    document.querySelector('.input-row').appendChild(newForm)
}

document.addEventListener("click", removeSub)
function removeSub( event ) {
    if (event.target.classList.contains('del-but')) {
        // Get the parent form element and remove it
        const formToRemove = event.target.closest('.input');
        if (formToRemove) {
            formToRemove.remove();
        }
    }
}

// document.addEventListener('click', function (event) {
//     // Check if the clicked element is a delete button with the class 'del-but'
//     if (event.target.classList.contains('del-but')) {
//         // Get the parent form element and remove it
//         const formToRemove = event.target.closest('.input-row');
//         if (formToRemove) {
//             formToRemove.remove();
//         }
//     }
// });