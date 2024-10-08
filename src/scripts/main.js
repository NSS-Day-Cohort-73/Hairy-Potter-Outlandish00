// Imports go first
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { makePottery } from "./PotteryWheel.js"
import { pottertyListHTML } from "./PotteryList.js"


// Make 5 pieces of pottery at the wheel
export let mug = makePottery("mug", 2 , 3)
export let plate = makePottery("flat", 5, 1)
export let vase = makePottery ("vase", 12, 4)
export let bowl = makePottery ("bowl", 4, 3)
export let urn = makePottery ("urn", 7, 5)



// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 40)
let firedPlate= firePottery(plate, 3000)
let firedVase = firePottery(vase, 700)
let firedBowl = firePottery(bowl, 50000)
let firedUrn = firePottery(urn, 1000)
// console.log(firedMug)
// console.log(firedPlate)
// console.log(firedVase)
// console.log(firedBowl)
// console.log(firedUrn)

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedPlate)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedUrn)
usePottery()
// Invoke the component function that renders the HTML list

let newPotteryHTML = pottertyListHTML()
let potteryArticle = document.getElementsByClassName("potteryList")[0]
potteryArticle.innerHTML = newPotteryHTML


