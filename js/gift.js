import {gifts, addGifts, brideUser, addBrideUser, init} from './api.js'
import {stringToHTML} from './helpers.js'


window.onload= start()

function start () {
    init()
    // set Bride details
    document.getElementById("username").value = brideUser.userName
    document.getElementById("useremail").value = brideUser.userEmail
    document.getElementById("wedtitle").value = brideUser.weddingTitle
    document.getElementById("weddetails").value = brideUser.weddingDetails
}

const firstform = document.getElementById("userform")
firstform.onsubmit = addBride

function addBride(e) {
    e.preventDefault()
    var userName = document.getElementById("username").value
    var userEmail = document.getElementById("useremail").value
    var wedTitle = document.getElementById("wedtitle").value
    var wedDetails = document.getElementById("weddetails").value  //calling it once
    console.log('THIS IS THE BRIDE USER INFO: ', addBrideUser(userName, userEmail, wedTitle, wedDetails)) //calling it again so it would then be at 2 items in obj. be careful
    console.log(`
        ${userName}
        ${userEmail}
        ${wedTitle}
        ${wedDetails}
    `)
}










