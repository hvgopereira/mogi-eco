// REGISTER FORM

 function togglePassword(id, icon) {
   const input = document.getElementById(id);
   if (input.type === "password") {
       input.type = "text";
       icon.textContent = 'visibility';
   } else {
       input.type = "password";
       icon.textContent = 'visibility_off';
   }
}

// REGISTER FORM

// Register Form

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", (event) => {
   event.preventDefault();

   checkInputName();
   checkInputEmail();
})

function checkInputName() {
   const usernameValue = username.value;

   if (usernameValue === "") {
      errorInput(username, "Preencha seu nome!")
   }else {
      const formItem = username.parentElement;
      formItem.className = "form-content"
   }
}

function checkInputEmail() {
   const emailValue = email.value;

   if(emailValue === "") {
      errorInput(email, "O email é obrigatório.")
   }else {
      const formItem = email.parentElement;
      formItem.className = "form-content"
   }
}


function errorInput(input, message) {
   const formItem = input.parentElement;
   const textMessage = formItem.querySelector(".error-message")

   textMessage.innerText = message;

   formItem.className = "form-content error"
}


