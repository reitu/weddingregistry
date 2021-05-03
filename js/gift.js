import {gifts, stringToHTML, addGifts, brideUser, addBrideUser, init} from './api.js'
  
var addbtn = document.getElementById("btnadd")

addbtn.onclick = addItem

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


const form = document.getElementById("form2")
form.onsubmit = addItem


function addItem(e) {
    e.preventDefault()
    var namegift = document.getElementById("giftname")
    var pricegift = document.getElementById("giftprice")
    addGifts(namegift.value,pricegift.value) //why not working if i do it like this? //var namegift = document.getElementById("giftname").value ???
    render()
    console.log("These are all my gifts", gifts) 
    form.reset()
}

console.log("These are all my gifts", gifts) //why does it keep replacing the latest added array item??? to do!!



function render() {
    var listgift = document.getElementById("giftlist")
    listgift.innerHTML = ''
    gifts.forEach(element => {
        console.log('This is my gift: ',element)
        listgift.appendChild(stringToHTML(`
            <div class="listitem"> 
                <div class="itemname">
                    ${element.name}
                </div>
                <div class="itemprice">
                    ${element.price}
                </div>
                <button class="Remove"> Remove 
                </button>
            </div>
        `))
    });

}












