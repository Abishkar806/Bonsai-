const signUpButton = document.getElementById("signUp");// Do something when the button is clicked



const signInButton = document.getElementById("signIn");// Do something when the button is clicked



//  after clicking on sinup button right pannel ma vako sign up part  will add and active 


signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
// after clicking on sinin button sinup part will remove and  come to left pannel part or active sin in part

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
