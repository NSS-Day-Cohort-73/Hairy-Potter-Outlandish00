import { usePottery } from "./PotteryCatalog.js"

export const pottertyListHTML = () => {
   let potteryHTML = ""

    for( const pot of usePottery()){
        potteryHTML+= `
    <section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">${pot.shape}</h2>
            <div class="pottery__properties">
                Item weighs ${pot.weight} grams and is ${pot.height} cm in height
            </div>
        <div class="pottery__price">Price is ${pot.price}</div>
   </section>
        `
    }
    return potteryHTML
}