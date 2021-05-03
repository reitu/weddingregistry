import {gifts, stringToHTML, addGifts, brideUser, addBrideUser, storeBrideUser, getBrideUserInfo, init} from './api.js'


window.onload= startGuest()

function startGuest() {
    init()
    document.body.appendChild(stringToHTML(`
            <div class="guestD"> 
                <div class="itemprice">
                 ${brideUser.weddingTitle}
                </div>
                <div class="guestD">
                ${brideUser.weddingDetails}
                </div>

                <div class="guestD">
                   Thank you for your RSVP, love,  ${brideUser.userName}
                </div>
                <div class="guestD">
                   Contact me here if you have any questions✅ : ${brideUser.userEmail}
                </div>
            </div>
        `))
}