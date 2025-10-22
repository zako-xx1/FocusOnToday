    const checkBoxList = document.querySelectorAll('.custom-checkbox')
    const inputFields = document.querySelectorAll('.goal-input')
    const errorLabel = document.querySelector('.error-label')
    const progressBar = document.querySelector('.progress-bar')
    const progressValue =  document.querySelector('.progress-value')

    checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener('click', (e) => {
        const allGoalsAdded = [...inputFields].every(function (input) {
        return input.value // check input field is not empty
        })
    if (allGoalsAdded && !input.value == '') {
        checkbox.parentElement.classList.toggle('completed');
        
      errorLabel.style.display = 'none';

    } else {
      errorLabel.style.display = 'block';
    }
    })

})