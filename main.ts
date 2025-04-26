import {version, exchanges, indodax} from 'ccxt'
console.log(version, Object.keys(exchanges))

const exchange = new indodax()
const ticker = await exchange.fetchTicker('BTC/USDT')
console.log(ticker)
