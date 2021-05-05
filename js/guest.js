import {createPlannerRegistry, plannerAcc, addPlannerProfile, init, addGuestProfile, guestAcc} from './api.js'
import {stringToHTML} from './helpers.js'

window.onload= startGuest()

function startGuest() {
    init()
    document.body.appendChild(stringToHTML(`
            <div class="welcomeinfo"> 
                <div>
                    <div class="giftinfo">
                    Welcome to ${plannerAcc.weddingTitle}!
                    </div>
                    <div class="giftinfo">
                    ${plannerAcc.weddingDetails}
                    </div>
                </div>
                <div class="rsvp-section"> 
                    <p> Please RSVP for  our wedding below </p>
                    <label for="guestname"> Your name:</label>
                    <input type="text" id="guestName"> </input>  </br>
                    <label for="guestEmail"> Your email: </label>
                    <input type="email" id="guestEmail"> </input> </br>
                    <button type="submit" id="subbtn"> Subtmit RSVP </button>

                </div>
                <div class="gift-intro">
                    <p> We have created a gift registry to  make gift shopping easier for our guests. </p>
                    <p> Click below to view registry and choose gift.</p> 
                    <button onclick="location.href = 'guestviewreg.html'" id="giftButton" class="float-left submit-button" > View registry</button>
                </div>

                <div id="notice-section"> 
                    <p>All RSVPS and registries will be sent to:</p>
                    ${plannerAcc.userName} at ${plannerAcc.userEmail}

                    <p> Thank you. </p>
                </div>
            </div>
        `))
}


{/* <div class="guestinfo">
                   Thank you for your RSVP, love,  ${plannerAcc.userName}
                </div>
                <div class="giftinfo">
                   Contact me here if you have any questions✅ : ${plannerAcc.userEmail}
                </div> */}




var btnRsvpSubmit = document.getElementById("subbtn")
btnRsvpSubmit.onclick = addGuest

function addGuest () {
    var theguestname = document.getElementById("guestName").value
    var theguestemail = document.getElementById("guestEmail").value

    addGuestProfile(theguestname, theguestemail)

    console.log('My Guest info: ',guestAcc)
}

