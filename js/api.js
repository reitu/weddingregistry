export var gifts = []

export var brideUser = {}

export function init () {
    pullBrideUserInfo()
    pullBrideGifts ()
}

export function addBrideUser(nameUser = '', emailUser = '', titleWed = '', detailWed = '') { //this is the default value for the parameters if your values are falsy
    brideUser = {   
        userName: nameUser,  
        userEmail: emailUser,
        weddingTitle: titleWed, 
        weddingDetails: detailWed
    }
    pushBrideUser()
    return brideUser
}

function pushBrideUser () { //push and pull storage functions must never be exposed outside the API, so never exported!! Since all you need is access to the datasource, not the API local storage functions, the datasource, in this case the object brideUser is all that is needed to achieve everything th datasource and ui would need to, since also the push/pull functions update the local obj, thats the only thing that need to be accessed outside the API?! 
    var myJSONstring = JSON.stringify(brideUser) //the UI should never be able to touch the storage, or modify the datasource, should only ever be able to READ access, never to MODIFY, UPDATE or DELETE the dstasource. 
    window.localStorage.setItem('profile', myJSONstring)
}

// point is to populate your local object with whats in your local storage 
function pullBrideUserInfo () {
    var brideStr = window.localStorage.profile//this is the thing taken from the local storage, obj
    if (brideStr) {     //if theres something in the storage then must pop the {} with that thing in there
        brideUser = JSON.parse(brideStr)
    }
    if (!brideStr) {
        addBrideUser()
    }
}

export function addGifts (gname, gprice) {
    gifts.push({
        name: gname,
        price: parseInt(gprice)
    })
    pushBrideGifts()
    return gifts
}

//separate the datasources by pushing and pulling them in sep funcs

function pushBrideGifts () { //push and pull storage functions must never be exposed outside the API, so never exported!! Since all you need is access to the datasource, not the API local storage functions, the datasource, in this case the object brideUser is all that is needed to achieve everything th datasource and ui would need to, since also the push/pull functions update the local obj, thats the only thing that need to be accessed outside the API?! 
    var myJSONstring = JSON.stringify(gifts) //the UI should never be able to touch the storage, or modify the datasource, should only ever be able to READ access, never to MODIFY, UPDATE or DELETE the dstasource. 
    window.localStorage.setItem('registry', myJSONstring) //the 'registry' here is the name of the key of what im pushing
}

function pullBrideGifts () {
    var regStr = window.localStorage.registry 
    if (regStr) {     
        gifts = JSON.parse(regStr)
    }
    if (!regStr) {
        gifts = []
    }
}