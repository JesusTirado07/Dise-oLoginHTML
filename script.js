const loginForm = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordField = document.querySelector("#password");
const toggleButton = document.querySelector(".toggle-button");

if (passwordField && toggleButton) {
  toggleButton.addEventListener("click", () => {
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    } else {
      passwordField.type = "password";
      toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
    }
  });
}

const userDatabase = [
    {
        username: "usuario1",
        password: "contraseña1"
    },
    {
        username: "usuario2",
        password: "contraseña2"
    }
];

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (password.value.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    const user = userDatabase.find(user => user.username === username.value);
    if (!user) {
        alert("El usuario no existe.");
        return;
    }

    if (user.password !== password.value) {
        alert("La contraseña es incorrecta.");
        return;
    }

    alert(`Bienvenido, ${user.username}!`);
});