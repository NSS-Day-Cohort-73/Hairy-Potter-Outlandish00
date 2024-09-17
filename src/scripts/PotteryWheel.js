// let primaryKey = 1
export let pottery = []


export const makePottery = (shape, weight, height) => {
    let primaryKey = 1
    primaryKey+=1

       let createdPottery = {shape : shape, weight: weight, height : height, id: primaryKey}
       pottery.push(createdPottery)
       return createdPottery
}