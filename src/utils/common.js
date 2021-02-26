/**
 * This file includes common libraries and settings for them; such as axios, web3, bignumber.js.
 * import the libraries from here to use
 */
import axios from "axios"

export const getCurrentGasPrices = async () => {
    let response = await axios.get('https://www.gasnow.org/api/v3/gas/price')
    console.log(response)
    return {
        low: response.data.data.slow / 1e9,
        medium: response.data.data.standard / 1e9,
        high: response.data.data.fast / 1e9
    }
}
