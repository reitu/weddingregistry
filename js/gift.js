import {createPlannerRegistry, plannerAcc , addPlannerProfile, init, guestAcc} from './api.js'
import {stringToHTML} from './helpers.js'


window.onload= start()

function start () {
    init()
    var divresponse = document.getElementById("respdiv")
    divresponse.style.display= "none"
    // set Bride details
    document.getElementById("username").value = plannerAcc .userName
    document.getElementById("useremail").value = plannerAcc .userEmail
    document.getElementById("wedtitle").value = plannerAcc .weddingTitle
    document.getElementById("weddetails").value = plannerAcc .weddingDetails
}

const firstform = document.getElementById("userform")
firstform.onsubmit = addBride

function addBride(e) {
    e.preventDefault()
    var userName = document.getElementById("username").value
    var userEmail = document.getElementById("useremail").value
    var wedTitle = document.getElementById("wedtitle").value
    var wedDetails = document.getElementById("weddetails").value  //calling it once
    console.log('THIS IS THE BRIDE USER INFO: ', addPlannerProfile(userName, userEmail, wedTitle, wedDetails)) //calling it again so it would then be at 2 items in obj. be careful
    console.log(`
        ${userName}
        ${userEmail}
        ${wedTitle}
        ${wedDetails}
    `)
}

var btnresp = document.getElementById("responseButton")
btnresp.onclick = function () {
    var divresponse = document.getElementById("respdiv")
    divresponse.style.display= "block"
    showResponses()
}


function showResponses() {
    var divresponse = document.getElementById("respdiv")
    divresponse.appendChild(stringToHTML(`
    <div class="viewReg"> 
        <div class="itemname">
            Name of guest: ${guestAcc.guestName}
        </div>
        <div class="itemprice">R
            Email of guest: ${guestAcc.guestEmail}
        </div>
        <button id="btncls"> x </button>
    </div>
`)) 
    var btncls = document.getElementById("btncls")
    ///close them
    btncls.onclick = function () {
        divresponse.style.display = "none"
    
        
    }
}
   






