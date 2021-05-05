export var plannerAcc = {} // wedding planner account

export var guestAcc = {} // wedding guest account

export function init () { 
    pullPlannerAcc()
    pullGuestAcc()
}

//PLANNER SECTION

export function addPlannerProfile(nameUser = '', emailUser = '', titleWed = '', detailWed = '') { //this is the default value for the parameters if your values are falsy
    plannerAcc = {   
        userName: nameUser,  
        userEmail: emailUser,
        weddingTitle: titleWed, 
        weddingDetails: detailWed,
        userGifts: []
    }
    pushPlannerAcc()
    return plannerAcc
}

function pushPlannerAcc() { // point is to populate your local object with whats in your local storage 
    var myJSONstring = JSON.stringify(plannerAcc) //the UI should never be able to touch the storage, or modify the datasource, should only ever be able to READ access, never to MODIFY, UPDATE or DELETE the dstasource. 
    window.localStorage.setItem('plannerAcc', myJSONstring) 
}

function pullPlannerAcc () {
    var storedStr = window.localStorage.plannerAcc
    if (storedStr) {     
        plannerAcc = JSON.parse(storedStr)
    }
    if (!storedStr) {
        addPlannerProfile()
    }
}

export function createPlannerRegistry (gname, gprice) { 
    pullPlannerAcc()
    plannerAcc.userGifts.push({
        name: gname,
        price: parseInt(gprice)
    })
    pushPlannerAcc()
}


//GUEST SECTION 

export function addGuestProfile (thename, theemail) {
    guestAcc = {
        guestName : thename,
        guestEmail: theemail, 
        guestGift: {}
    }
    pushGuestAcc()
}

function pushGuestAcc () { 
    var myJSONstring = JSON.stringify(guestAcc) 
    window.localStorage.setItem('guestAccount', myJSONstring) 
}

function pullGuestAcc () {
    var storedStrP = window.localStorage.guestAccount
    if  (storedStrP) {     
        guestAcc = JSON.parse(storedStrP)
    }
    if (!storedStrP) {
        guestAcc = {}
    }
}

export function addGuestGift(selectedGift) {
    pullGuestAcc()
    guestAcc.guestGift = selectedGift
    pushGuestAcc()
}