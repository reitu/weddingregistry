import {createPlannerRegistry, plannerAcc, addPlannerProfile, init, addGuestProfile, addGuestGift, guestAcc} from './api.js'
import {stringToHTML} from './helpers.js'


window.onload = start()

function start() {
    init()
    console.log('myguests stuff so far', guestAcc)
    console.log('before: ',guestAcc.guestGift)
    console.log('guest acc before: ', guestAcc)
    console.log(plannerAcc.userGifts)
    var viewList = document.getElementById("showlist")
    viewList.innerHTML = ''
    plannerAcc.userGifts.forEach(element => {
        viewList.appendChild(stringToHTML(`
            <div class="viewReg"> 
                <div class="itemname">
                    ${element.name}
                </div>
                <div class="itemprice">R
                    ${element.price}
                </div>
                <button id="btnBuyGift"> I will buy 
                </button>
            </div>
        `))
        console.log('This is my gift: ',element)
        var btnbuy = document.getElementById("btnBuyGift")
        btnbuy.onclick = function () {
            console.log(guestAcc)
            console.log("hey", element)
            addGuestGift(element)
            console.log('THis is the wedding guest: ', guestAcc)

        }


    });
    //addGuestGift()

}
