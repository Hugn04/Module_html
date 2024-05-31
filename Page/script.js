var wrapper = document.querySelector(".warpper")
var loginLink = document.querySelector(".login-link")
var registerLink = document.querySelector(".register-link")
var btnLoginPopup = document.querySelector(".btnLogin-popup")
var btnLoginClose = document.querySelector(".icon-close")
var loginContainer = document.querySelector(".login-container")

loginLink.addEventListener("click", function(){
    wrapper.classList.add("active")
})
registerLink.addEventListener("click", function(){
    wrapper.classList.remove("active")
})
btnLoginPopup.addEventListener("click", function(){
    wrapper.classList.add("active-popup")
    loginContainer.classList.add("active")
})
btnLoginClose.addEventListener("click", function(){
    wrapper.classList.remove("active-popup")
    loginContainer.classList.remove("active")
})