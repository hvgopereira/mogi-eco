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

   checkInputs();
})

function checkInputs() {
   const usernameValue = username.value;
   const emailValue = email.value;
   const passwordValue = password.value;
   const confirmPasswordValue = confirmPassword.value;

   if (usernameValue === "") {
      errorInput(username, "Preencha seu nome completo!")
   }else {
      successInput(username);
   }

   if(emailValue === "") {
      errorInput(email, "O email é obrigatório.")
   }else if (!checkEmail(emailValue)) {
      errorInput(email, "Por favor, insira um email válido.");
   }else {
      successInput(email);

   }

   if (passwordValue === "") {
      errorInput(password, "A senha é obrigatória.");
   } else if (passwordValue.length < 7) {
      errorInput(password, "Precisa ter no mínimo 7 caracteres.");
   } else {
      // successInput(password);
   }


   if (confirmPasswordValue === "") {
      errorInput(confirmPassword, "A confirmação da senha é obrigatória.");
   } else if (confirmPasswordValue !== passwordValue) {
      errorInput(confirmPassword, "As senhas não coincidem.");
   } else {
      successInput(confirmPassword);
   }

 }






function errorInput(input, message) {
   const formItem = input.closest(".form-content");
   
   const textMessage = formItem.querySelector(".error-message");

   textMessage.innerText = message;
   formItem.classList.add("error");

}

function successInput(input) {
   const formItem = input.parentElement;
   formItem.className = "form-content sucess";
}

function checkEmail(email) {
   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
     email
   );
 }


