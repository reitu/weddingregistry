import {createPlannerRegistry, plannerAcc, addPlannerProfile, init} from './api.js'
import {stringToHTML} from './helpers.js'

window.onload= start()

function start () {
    init()
    //must show the gifts in the div!  fix the null element
    var giftView = document.getElementById("giftlist")
    giftView.innerHTML = ''
    plannerAcc.userGifts.forEach(element => {
        console.log('This is my gift: ',element)
        giftView.appendChild(stringToHTML(`
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

const form = document.getElementById("form2")
form.onsubmit = addItem

function addItem(e) {
    e.preventDefault()
    var namegift = document.getElementById("giftname")
    var pricegift = document.getElementById("giftprice")
    createPlannerRegistry(namegift.value,pricegift.value) 
    
    render()
    objii()
   
} 

function render() {
    var listgift = document.getElementById("giftlist")
    listgift.innerHTML = ''
    plannerAcc.userGifts.forEach(element => {
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
    Congratulations ${plannerAcc.userName}! 
    Your gift registry containing: ${getallgifts()} is confirmed!
    Happy planning!
    `)
}

var seegift = [] //this for just the names of  the gifts 

function getallgifts () {
    plannerAcc.userGifts.forEach(element => {
        seegift.push(element.name)
    });
    return seegift
}