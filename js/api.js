export var gifts = [ {
    name: "duvet",
    price: 600
}]

export var brideUser = {}

export function init () {
    getBrideUserInfo()
}

export const stringToHTML = function (str) {
	var parser = new DOMParser()
	var doc = parser.parseFromString(str, 'text/html')
	return doc.body.firstChild
}

export function addGifts (gname, gprice) {
    gifts.push({
        name: gname,
        price: parseInt(gprice)
    })
    return gifts
}

export function addBrideUser(nameUser = '', emailUser = '', titleWed = '', detailWed = '') { //this is the default value for the parameters if your values are falsy
    brideUser = {   //tried it with an array as if many users 
        userName: nameUser,  //so one bride user and many guests? so 
        userEmail: emailUser,
        weddingTitle: titleWed, 
        weddingDetails: detailWed
    }
    storeBrideUser()
    return brideUser
}


export function storeBrideUser () {
    var myJSONstring = JSON.stringify(brideUser)
    window.localStorage.setItem('user', myJSONstring)
    return myJSONstring
}


export function getBrideUserInfo () {
    var brideStr = window.localStorage.getItem('user') //this is the thing taken from the local storage, obj
    if (brideStr) {     //if theres something in the storage then must pop the {} with that thing in there
        brideUser = JSON.parse(brideStr)
    }
    if (!brideStr) {
        addBrideUser()
    }
} //point is to populate your local object with whats in your local storage 