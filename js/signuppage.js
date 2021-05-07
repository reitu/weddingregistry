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
    var userpswd = document.getElementById("password-su")
    var userEmail = document.getElementById("email-su")
    userExist(userpswd)
    signupUser(userEmail.value, userpswd.value)
    console.log(users)
}


function userExist(nameEntered) {
    users.forEach(element => {
        if (element.newUser.userEmail === nameEntered) {
            console.log("NAME IS HERE!")
        }
        
    });
}