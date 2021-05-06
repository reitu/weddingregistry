import {createPlannerRegistry, plannerAcc, addPlannerProfile, users, init, addGuestProfile, guestAcc, signupUser} from './api.js'
import {stringToHTML} from './helpers.js'


window.onload = begin()

function begin() {
    init()
    console.log('these are my users', users)
    
}

const signupForm = document.getElementById("signup-form")
signupForm.onsubmit = addSignup //!!!

function addSignup(e) {
    //console.log(signupForm.onsubmit) 
    e.preventDefault()
    var userName = document.getElementById("username-su")
    var userEmail = document.getElementById("email-su")
    signupUser(userName.value, userEmail.value)
    console.log(users)
}


