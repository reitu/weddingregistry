import {gifts, addGifts, brideUser, addBrideUser, init} from './api.js'
import {stringToHTML} from './helpers.js'

window.onload= start()

function start () {
    init()
    //must show the gifts in the div! not 
}

const form = document.getElementById("form2")
form.onsubmit = addItem

function addItem(e) {
    e.preventDefault()
    var namegift = document.getElementById("giftname")
    var pricegift = document.getElementById("giftprice")
    addGifts(namegift.value,pricegift.value) 
    console.log("These are all my gifts", gifts) 
    render()
    objii()
   
} 

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

function objii() {
    for (let i = 0; i < localStorage.length; i++) {
        let storedValue = localStorage.key(i);
        console.log(`Item at ${i}: ${storedValue}`);
    }
    console.log('this is in the LOCAL: ', localStorage)
}

var btnconfirmall = document.getElementById("giftButton")

btnconfirmall.onclick = function () {
    window.alert(`
    Congratulations ${brideUser.userName}! 
    Your gift registry containing: ${getallgifts()} is confirmed!
    Happy planning!
    `)
}

var seegift = [] //this for just the names of  the gifts 

function getallgifts () {
    gifts.forEach(element => {
        seegift.push(element.name)
    });
    return seegift
}