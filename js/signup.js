// Select Element
let nameInput = document.getElementById('nameInput')
let emailInput = document.getElementById('emailInput')
let passwordInput = document.getElementById('passwordInput')
let btn = document.getElementById('btn')
var emailAlert = document.getElementById("email-alert");
var nameAlert = document.getElementById("name-alert");



let arrayStorge = [];
if ( localStorage.getItem('storgeAccount') != null  ) {
    arrayStorge = JSON.parse( localStorage.getItem('storgeAccount')  )
}

btn.addEventListener('click', () => {

    if (validtionEmail() == true && validtionName() == true) {
        if ( nameInput.value != "" && emailInput.value != "" && passwordInput.value != "") {
            if ( emailExist() == false ) {
                var storgeObj = {
                    username: nameInput.value,
                    email: emailInput.value,
                    password: passwordInput.value,
                }
                arrayStorge.push(storgeObj)
    
                localStorage.setItem('storgeAccount', JSON.stringify(arrayStorge) )
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
                setTimeout(() => {
                    clearData()
                window.open('index.html', "_self")
                }, 3000);
    
            }else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "The Email Already Exists!",
                  });
            }
        }
    }
})

// ُEmpty Inputes After complete Data 
function clearData() {
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}

function emailExist() {

    for(var i = 0; i < arrayStorge.length; i++) {

        if( arrayStorge[i].email == emailInput.value  ) {
            return true
        }
    }
    return false
}

// Check Validtion Email
function validtionEmail() {
    let text = emailInput.value;
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (  regexEmail.test(text)  ) { // Valid
        emailInput.classList.add("is-valid")
        emailInput.classList.remove("is-invalid")
        emailAlert.classList.add("d-none")
        return true
    }
    else { // Not Valid
        emailInput.classList.add("is-invalid")
        emailInput.classList.remove("is-valid")
        emailAlert.classList.remove("d-none")
        return false
    }
}

// Check Validtion Name
function validtionName() {
    let textName = nameInput.value
    let nameRegex = /^[a-zA-Z0-9_-]{3,16}$/;

    if (  nameRegex.test(textName) ) {  // Valid

        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        nameAlert.classList.add("d-none")

        return true
    }
    else { // Not Valid
        nameInput.classList.add("is-invalid")
        nameInput.classList.remove("is-valid")
        nameAlert.classList.remove("d-none")
        return false
    }
}

