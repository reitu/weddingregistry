export var plannerAcc = {} // wedding planner account

export var guestAcc = {} // wedding guest account

export var users = [] //user accounts

export function init() {
    pullPlannerAcc()
    pullGuestAcc()
    pullUserSignupAcc()
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

function pullPlannerAcc() {
    var storedStr = window.localStorage.plannerAcc
    if (storedStr) {
        plannerAcc = JSON.parse(storedStr)
    }
    if (!storedStr) {
        addPlannerProfile()
    }
}

export function createPlannerRegistry(gname, gprice) {
    pullPlannerAcc()
    plannerAcc.userGifts.push({
        name: gname,
        price: parseInt(gprice)
    })
    pushPlannerAcc()
}


//GUEST SECTION 

export function addGuestProfile(thename, theemail) {
    guestAcc = {
        guestName: thename,
        guestEmail: theemail,
        guestGift: {}
    }
    pushGuestAcc()
}

function pushGuestAcc() {
    var myJSONstring = JSON.stringify(guestAcc)
    window.localStorage.setItem('guestAccount', myJSONstring)
}

function pullGuestAcc() {
    var storedStrP = window.localStorage.guestAccount
    if (storedStrP) {
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


//SIGN UP SECTION

export function signupUser(name, username, email, password) {
    users.push({
        fullName: name,
        userName: username,
        emailAddress: email,
        passWord: password,
        uuid: getUniqueID()
    })

    pushUserSignupAcc()
}

function pushUserSignupAcc() {
    var myJSONstring = JSON.stringify(users)
    window.localStorage.setItem('userAccounts', myJSONstring)
}

function pullUserSignupAcc() {
    var storedStrU = window.localStorage.userAccounts
    if (storedStrU) {
        users = JSON.parse(storedStrU)
    }
    if (!storedStrU) {
        users = []
    }
}

//find unique id for user

const idGenerator = (function* () {
    const options = [
        () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0
            const v = c === 'x' ? r : (r & 0x3 | 0x8)
            return v.toString(16)
        }),
        () => 'cxx1xxxx-xx1x-4xxx-yxxx-sxcxxxxcxx1x',
        () => '1xx2xaxx-xa1x-4xxx-yxxy-cxxvxvxaxv2y'
    ]
    while (1) yield options[Math.floor(Math.random() * options.length)]()
})()
function uuidv4() {
    return idGenerator.next().value
}


function getUniqueID () {
    var duplicate = false
    let id = uuidv4()
    users.forEach(element => {
        if (element.uuid === id) {
            duplicate = true
        }
    });
    if (duplicate) {
        return getUniqueID()
    } else {
        return id
    }
}

//use some() or object to optimise above duplicate check - to do / time-space complexity

//changer users to objects - to do!