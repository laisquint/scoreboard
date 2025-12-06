let numHome = document.getElementById("numHome");
let numGuest = document.getElementById("numGuest");

let pointsHome = 0
let pointsGuest = 0



function guestAdd1() {
  pointsGuest += 1
  numGuest.textContent =pointsGuest



}

function guestAdd2() {
  pointsGuest += 2
  numGuest.textContent = pointsGuest



}



function guestAdd3() {
  pointsGuest += 3
  numGuest.textContent = pointsGuest


}
function homeAdd1() {
  pointsHome += 1

  numHome.textContent = pointsHome


}

function homeAdd2() {
  pointsHome += 2

  numHome.textContent = pointsHome


}

function homeAdd3() {
 pointsHome += 3

  numHome.textContent = pointsHome

}

let clearGuest=0
let clearHome=0
function newGame (){
  numGuest.textContent= clearGuest
  numHome.textContent= clearHome
  

}