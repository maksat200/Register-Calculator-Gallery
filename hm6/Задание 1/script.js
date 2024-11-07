const button = document.getElementById("submitButton");

button.addEventListener("click", function() {
    const name = document.getElementById("name");
    const password = document.getElementById("password");
    const email = document.getElementById("email");
    let submit_true = true;

    document.getElementById("passwordError").textContent = "";
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";

    if (name.value === "") {
        document.getElementById("nameError").textContent = "Имя не может быть пустым";
        submit_true = false;
    }

    if (!email.value.includes("@")) {
        document.getElementById("emailError").textContent = "Неверный формат email, вы пропустили @";
        submit_true = false;
    }

    if (!email.value.includes(".")) { 
        document.getElementById("emailError").textContent += " Неверный формат email, вы пропустили точку";
        submit_true = false;
    }

    if (password.value.length < 8) {
        document.getElementById("passwordError").textContent = "Пароль должен быть длиннее 8 символов";
        submit_true = false;
    } 

    if (submit_true) {
        alert("You Registered");
    }
});
