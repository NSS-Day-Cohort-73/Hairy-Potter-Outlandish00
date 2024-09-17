let forSale = []

export const toSellOrNotToSell = (pot) =>{
    if (pot.cracked === true){
        return pot
    }
    else{
        if (pot.weight >= 6){
            pot.price = 40
        }
        else{
            pot.price = 20
        }
    }
    forSale.push(pot)

    return pot
}

export const usePottery = () =>{
    return forSale.slice()
} 