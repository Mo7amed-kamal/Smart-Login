// Select Element
let emailInput = document.getElementById("emailInput");
let passwordInput = document.getElementById("passwordInput");
let btn = document.getElementById("btn");

// get local storge
let arrayStorge = JSON.parse(localStorage.getItem("storgeAccount"));
console.log(arrayStorge);

btn.addEventListener("click", () => {

  if (localStorage.getItem("storgeAccount") != null) {
    for (var i = 0; i < arrayStorge.length; i++) {
        var emailValid = emailInput.value == arrayStorge[i].email;
        var passValid =  passwordInput.value == arrayStorge[i].password

      if (emailValid && passValid) {

        localStorage.setItem("items", JSON.stringify(arrayStorge[i].username));

        window.open("home.html", "_self");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All inputs is required!",
        });
      }
    }
  }
});
