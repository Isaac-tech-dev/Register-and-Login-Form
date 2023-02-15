const signUpButton = document.getElementById('Register');
const signInButton = document.getElementById('signIn');
const Main = document.getElementById('main');

signUpButton.addEventListener('click', () => {
    Main.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    Main.classList.remove("right-panel-active");
});