import { pottery } from "./PotteryWheel.js"
import { vase } from "./main.js"

export const firePottery = (pot, temp) =>{
        pot[`fired`] = true
        if (temp > 2200){
            pot['cracked'] = true
        }else if (temp <= 2200){
            pot['cracked'] = false
        }
        return pot


}