let primaryKey = 1
let pottery = []


export const makePottery = (shape, weight, height) => {
    primaryKey+=1

        pottery.push({shape : shape, weight: weight, height : height, id: primaryKey})
}