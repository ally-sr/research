// BTCUSDT
const urlvalue = 'https://fapi.binance.com/futures/data/'
const ratiovalue = 'globalLongShortAccountRatio?symbol=BTCUSDT&period=15m'
const urlvalue4hr = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hr = 'globalLongShortAccountRatio?symbol=BTCUSDT&period=4h'
const urlvalue1hr = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hr = 'globalLongShortAccountRatio?symbol=BTCUSDT&period=1h'
const urlvalue24hr = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hr = 'globalLongShortAccountRatio?symbol=BTCUSDT&period=1d'
fetch(urlvalue + ratiovalue)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        const initialvalue15m = parseFloat(data.at(28)['longShortRatio'])
        const finalvalue15m = parseFloat(data.at(29)['longShortRatio'])
        const variation15min = finalvalue15m - initialvalue15m
        const percentage15min = ((finalvalue15m / initialvalue15m) - 1) * 100
        const lsrgvalue = data.at(29)['longShortRatio']
        const tstmp = data.at(29)['timestamp']
        const dtlsr = new Date(tstmp)
        document.getElementById('lsrglobal').
            innerHTML = parseFloat(lsrgvalue).toFixed(3)
        document.getElementById('LSR').
            innerHTML = parseFloat(lsrgvalue).toFixed(3)
        document.getElementById('btcusdt').
            innerHTML = data[5]['symbol']
        document.getElementById('timestamplsrg').
            innerHTML = dtlsr.toLocaleString()
        document.getElementById('15mlsr').
            innerHTML = variation15min.toFixed(3)
        document.getElementById('15mplsr').
            innerHTML = percentage15min.toFixed(2) + '%'

        fetch(urlvalue4hr + ratiovalue4hr)
            .then(function (response) {
                return response.json()
            }).then(function (data2) {
                const initialvalue4h = parseFloat(data2.at(28)['longShortRatio'])
                const finalvalue4h = parseFloat(data2.at(29)['longShortRatio'])
                const variation4h = finalvalue4h - initialvalue4h
                const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
                document.getElementById('alt4h').
                    innerHTML = parseFloat(percentage4h).toFixed(2) + '%'
                document.getElementById('4hlsr').
                    innerHTML = parseFloat(variation4h).toFixed(3)
                document.getElementById('4hplsr').
                    innerHTML = parseFloat(percentage4h).toFixed(2) + '%'
            })
        fetch(urlvalue1hr + ratiovalue1hr)
            .then(function (response) {
                return response.json()
            }).then(function (data3) {
                const initialvalue1h = parseFloat(data3.at(28)['longShortRatio'])
                const finalvalue1h = parseFloat(data3.at(29)['longShortRatio'])
                const variation1h = finalvalue1h - initialvalue1h
                const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
                document.getElementById('1hlsr').
                    innerHTML = parseFloat(variation1h).toFixed(3)
                document.getElementById('1hplsr').
                    innerHTML = parseFloat(percentage1h).toFixed(2) + '%'
            })
        fetch(urlvalue24hr + ratiovalue24hr)
            .then(function (response) {
                return response.json()
            }).then(function (data4) {
                const initialvalue24h = parseFloat(data4.at(28)['longShortRatio'])
                const finalvalue24h = parseFloat(data4.at(29)['longShortRatio'])
                const variation24h = finalvalue24h - initialvalue24h
                const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
                document.getElementById('24hlsr').
                    innerHTML = parseFloat(variation24h).toFixed(3)
                document.getElementById('24hplsr').
                    innerHTML = parseFloat(percentage24h).toFixed(2) + '%'
            })


    })

// ZILUSDT
const urlvalueZILUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueZILUSDT = 'globalLongShortAccountRatio?symbol=ZILUSDT&period=15m'
const urlvalue4hrZILUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrZILUSDT = 'globalLongShortAccountRatio?symbol=ZILUSDT&period=4h'
const urlvalue1hrZILUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrZILUSDT = 'globalLongShortAccountRatio?symbol=ZILUSDT&period=1h'
const urlvalue24hrZILUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrZILUSDT = 'globalLongShortAccountRatio?symbol=ZILUSDT&period=1d'
fetch(urlvalueZILUSDT + ratiovalueZILUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data5) {
        const initialvalue = parseFloat(data5.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data5.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('zilusdt').
            innerHTML = data5.at(28)['symbol']
        document.getElementById('15mlsrZILUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrZILUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalZILUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrZILUSDT + ratiovalue1hrZILUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data6) {
        const initialvalue1h = parseFloat(data6.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data6.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrZILUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrZILUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrZILUSDT + ratiovalue4hrZILUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data7) {
        const initialvalue4h = parseFloat(data7.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data7.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrZILUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrZILUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrZILUSDT + ratiovalue24hrZILUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data8) {
        const initialvalue24h = parseFloat(data8.at(28)['longShortRatio'])
        const finalvalue24h = parseFloat(data8.at(29)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrZILUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrZILUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// 1000LUNCUSDT
const urlvalue1000LUNCUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1000LUNCUSDT = 'globalLongShortAccountRatio?symbol=1000LUNCUSDT&period=15m'
const urlvalue4hr1000LUNCUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hr1000LUNCUSDT = 'globalLongShortAccountRatio?symbol=1000LUNCUSDT&period=4h'
const urlvalue1hr1000LUNCUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hr1000LUNCUSDT = 'globalLongShortAccountRatio?symbol=1000LUNCUSDT&period=1h'
const urlvalue24hr1000LUNCUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hr1000LUNCUSDT = 'globalLongShortAccountRatio?symbol=1000LUNCUSDT&period=1d'
fetch(urlvalue1000LUNCUSDT + ratiovalue1000LUNCUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data9) {
        const initialvalue = parseFloat(data9.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data9.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('1000LUNCUSDT').
            innerHTML = data9.at(28)['symbol']
        document.getElementById('15mlsr1000LUNCUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsr1000LUNCUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobal1000LUNCUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrZILUSDT + ratiovalue1hrZILUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data10) {
        const initialvalue1h = parseFloat(data10.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data10.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsr1000LUNCUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsr1000LUNCUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hr1000LUNCUSDT + ratiovalue4hr1000LUNCUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data11) {
        const initialvalue4h = parseFloat(data11.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data11.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsr1000LUNCUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsr1000LUNCUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hr1000LUNCUSDT + ratiovalue24hr1000LUNCUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data12) {
        const initialvalue24h = parseFloat(data12.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data12.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsr1000LUNCUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsr1000LUNCUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// 1000SHIBUSDT
const urlvalue1000SHIBUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1000SHIBUSDT = 'globalLongShortAccountRatio?symbol=1000SHIBUSDT&period=15m'
const urlvalue4hr1000SHIBUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hr1000SHIBUSDT = 'globalLongShortAccountRatio?symbol=1000SHIBUSDT&period=4h'
const urlvalue1hr1000SHIBUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hr1000SHIBUSDT = 'globalLongShortAccountRatio?symbol=1000SHIBUSDT&period=1h'
const urlvalue24hr1000SHIBUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hr1000SHIBUSDT = 'globalLongShortAccountRatio?symbol=1000SHIBUSDT&period=1d'
fetch(urlvalue1000SHIBUSDT + ratiovalue1000SHIBUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data13) {
        const initialvalue = parseFloat(data13.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data13.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('1000SHIBUSDT').
            innerHTML = data13.at(28)['symbol']
        document.getElementById('15mlsr1000SHIBUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsr1000SHIBUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobal1000SHIBUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hr1000SHIBUSDT + ratiovalue1hr1000SHIBUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data14) {
        const initialvalue1h = parseFloat(data14.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data14.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsr1000SHIBUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsr1000SHIBUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hr1000SHIBUSDT + ratiovalue4hr1000SHIBUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data15) {
        const initialvalue4h = parseFloat(data15.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data15.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsr1000SHIBUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsr1000SHIBUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hr1000LUNCUSDT + ratiovalue24hr1000LUNCUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data16) {
        const initialvalue24h = parseFloat(data16.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data16.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsr1000SHIBUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsr1000SHIBUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// 1000XECUSDT
const urlvalue1000XECUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1000XECUSDT = 'globalLongShortAccountRatio?symbol=1000XECUSDT&period=15m'
const urlvalue4hr1000XECUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hr1000XECUSDT = 'globalLongShortAccountRatio?symbol=1000XECUSDT&period=4h'
const urlvalue1hr1000XECUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hr1000XECUSDT = 'globalLongShortAccountRatio?symbol=1000XECUSDT&period=1h'
const urlvalue24hr1000XECUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hr1000XECUSDT = 'globalLongShortAccountRatio?symbol=1000XECUSDT&period=1d'
fetch(urlvalue1000XECUSDT + ratiovalue1000XECUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data17) {
        const initialvalue = parseFloat(data17.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data17.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('1000XECUSDT').
            innerHTML = data17.at(28)['symbol']
        document.getElementById('15mlsr1000XECUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsr1000XECUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobal1000XECUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hr1000XECUSDT + ratiovalue1hr1000XECUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data18) {
        const initialvalue1h = parseFloat(data18.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data18.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsr1000XECUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsr1000XECUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hr1000XECUSDT + ratiovalue4hr1000XECUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data19) {
        const initialvalue4h = parseFloat(data19.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data19.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsr1000XECUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsr1000XECUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hr1000XECUSDT + ratiovalue24hr1000XECUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data20) {
        const initialvalue24h = parseFloat(data20.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data20.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsr1000XECUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsr1000XECUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// 1INCHUSDT
const urlvalue1INCHUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1INCHUSDT = 'globalLongShortAccountRatio?symbol=1INCHUSDT&period=15m'
const urlvalue4hr1INCHUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hr1INCHUSDT = 'globalLongShortAccountRatio?symbol=1INCHUSDT&period=4h'
const urlvalue1hr1INCHUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hr1INCHUSDT = 'globalLongShortAccountRatio?symbol=1INCHUSDT&period=1h'
const urlvalue24hr1INCHUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hr1INCHUSDT = 'globalLongShortAccountRatio?symbol=1INCHUSDT&period=1d'
fetch(urlvalue1INCHUSDT + ratiovalue1INCHUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data21) {
        const initialvalue = parseFloat(data21.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data21.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('1INCHUSDT').
            innerHTML = data21.at(28)['symbol']
        document.getElementById('15mlsr1INCHUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsr1INCHUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobal1INCHUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hr1INCHUSDT + ratiovalue1hr1INCHUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data22) {
        const initialvalue1h = parseFloat(data22.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data22.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsr1INCHUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsr1INCHUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hr1INCHUSDT + ratiovalue4hr1INCHUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data23) {
        const initialvalue4h = parseFloat(data23.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data23.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsr1INCHUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsr1INCHUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hr1INCHUSDT + ratiovalue24hr1INCHUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data24) {
        const initialvalue24h = parseFloat(data24.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data24.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsr1INCHUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsr1INCHUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// AAVEUSDT
const urlvalueAAVEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueAAVEUSDT = 'globalLongShortAccountRatio?symbol=AAVEUSDT&period=15m'
const urlvalue4hrAAVEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrAAVEUSDT = 'globalLongShortAccountRatio?symbol=AAVEUSDT&period=4h'
const urlvalue1hrAAVEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrAAVEUSDT = 'globalLongShortAccountRatio?symbol=AAVEUSDT&period=1h'
const urlvalue24hrAAVEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrAAVEUSDT = 'globalLongShortAccountRatio?symbol=AAVEUSDT&period=1d'
fetch(urlvalueAAVEUSDT + ratiovalueAAVEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data25) {
        const initialvalue = parseFloat(data25.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data25.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('AAVEUSDT').
            innerHTML = data25.at(28)['symbol']
        document.getElementById('15mlsrAAVEUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrAAVEUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalAAVEUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrAAVEUSDT + ratiovalue1hrAAVEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data26) {
        const initialvalue1h = parseFloat(data26.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data26.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrAAVEUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrAAVEUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrAAVEUSDT + ratiovalue4hrAAVEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data27) {
        const initialvalue4h = parseFloat(data27.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data27.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrAAVEUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrAAVEUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrAAVEUSDT + ratiovalue24hrAAVEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data28) {
        const initialvalue24h = parseFloat(data28.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data28.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrAAVEUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrAAVEUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// ADAUSDT
const urlvalueADAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueADAUSDT = 'globalLongShortAccountRatio?symbol=ADAUSDT&period=15m'
const urlvalue4hrADAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrADAUSDT = 'globalLongShortAccountRatio?symbol=ADAUSDT&period=4h'
const urlvalue1hrADAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrADAUSDT = 'globalLongShortAccountRatio?symbol=ADAUSDT&period=1h'
const urlvalue24hrADAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrADAUSDT = 'globalLongShortAccountRatio?symbol=ADAUSDT&period=1d'
fetch(urlvalueADAUSDT + ratiovalueADAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data29) {
        const initialvalue = parseFloat(data29.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data29.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('ADAUSDT').
            innerHTML = data29.at(28)['symbol']
        document.getElementById('15mlsrADAUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrADAUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalADAUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrAAVEUSDT + ratiovalue1hrAAVEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data30) {
        const initialvalue1h = parseFloat(data30.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data30.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrADAUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrADAUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrADAUSDT + ratiovalue4hrADAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data31) {
        const initialvalue4h = parseFloat(data31.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data31.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrADAUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrADAUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrADAUSDT + ratiovalue24hrADAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data32) {
        const initialvalue24h = parseFloat(data32.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data32.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrADAUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrADAUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })


// ALGOUSDT
const urlvalueALGOUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueALGOUSDT = 'globalLongShortAccountRatio?symbol=ALGOUSDT&period=15m'
const urlvalue4hrALGOUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrALGOUSDT = 'globalLongShortAccountRatio?symbol=ALGOUSDT&period=4h'
const urlvalue1hrALGOUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrALGOUSDT = 'globalLongShortAccountRatio?symbol=ALGOUSDT&period=1h'
const urlvalue24hrALGOUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrALGOUSDT = 'globalLongShortAccountRatio?symbol=ALGOUSDT&period=1d'
fetch(urlvalueALGOUSDT + ratiovalueALGOUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data32) {
        const initialvalue = parseFloat(data32.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data32.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('ALGOUSDT').
            innerHTML = data32.at(28)['symbol']
        document.getElementById('15mlsrALGOUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrALGOUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalALGOUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrALGOUSDT + ratiovalue1hrALGOUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data33) {
        const initialvalue1h = parseFloat(data33.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data33.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrALGOUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrALGOUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrALGOUSDT + ratiovalue4hrALGOUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data34) {
        const initialvalue4h = parseFloat(data34.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data34.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrALGOUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrALGOUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrALGOUSDT + ratiovalue24hrALGOUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data35) {
        const initialvalue24h = parseFloat(data35.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data35.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrALGOUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrALGOUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// ALICEUSDT
const urlvalueALICEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueALICEUSDT = 'globalLongShortAccountRatio?symbol=ALICEUSDT&period=15m'
const urlvalue4hrALICEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrALICEUSDT = 'globalLongShortAccountRatio?symbol=ALICEUSDT&period=4h'
const urlvalue1hrALICEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrALICEUSDT = 'globalLongShortAccountRatio?symbol=ALICEUSDT&period=1h'
const urlvalue24hrALICEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrALICEUSDT = 'globalLongShortAccountRatio?symbol=ALICEUSDT&period=1d'
fetch(urlvalueALICEUSDT + ratiovalueALICEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data33) {
        const initialvalue = parseFloat(data33.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data33.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('ALICEUSDT').
            innerHTML = data33.at(28)['symbol']
        document.getElementById('15mlsrALICEUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrALICEUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalALICEUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrALICEUSDT + ratiovalue1hrALICEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data34) {
        const initialvalue1h = parseFloat(data34.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data34.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrALICEUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrALICEUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrALICEUSDT + ratiovalue4hrALICEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data35) {
        const initialvalue4h = parseFloat(data35.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data35.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrALICEUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrALICEUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrALICEUSDT + ratiovalue24hrALICEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data36) {
        const initialvalue24h = parseFloat(data36.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data36.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrALICEUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrALICEUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })
// ALPHAUSDT
const urlvalueALPHAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueALPHAUSDT = 'globalLongShortAccountRatio?symbol=ALPHAUSDT&period=15m'
const urlvalue4hrALPHAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrALPHAUSDT = 'globalLongShortAccountRatio?symbol=ALPHAUSDT&period=4h'
const urlvalue1hrALPHAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrALPHAUSDT = 'globalLongShortAccountRatio?symbol=ALPHAUSDT&period=1h'
const urlvalue24hrALPHAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrALPHAUSDT = 'globalLongShortAccountRatio?symbol=ALPHAUSDT&period=1d'
fetch(urlvalueALPHAUSDT + ratiovalueALPHAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data37) {
        const initialvalue = parseFloat(data37.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data37.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('ALPHAUSDT').
            innerHTML = data37.at(28)['symbol']
        document.getElementById('15mlsrALPHAUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrALPHAUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalALPHAUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrALPHAUSDT + ratiovalue1hrALPHAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data38) {
        const initialvalue1h = parseFloat(data38.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data38.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrALPHAUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrALPHAUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrALPHAUSDT + ratiovalue4hrALPHAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data39) {
        const initialvalue4h = parseFloat(data39.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data39.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrALPHAUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrALPHAUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrALPHAUSDT + ratiovalue24hrALPHAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data40) {
        const initialvalue24h = parseFloat(data40.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data40.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrALPHAUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrALPHAUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// ANKRUSDT
const urlvalueANKRUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueANKRUSDT = 'globalLongShortAccountRatio?symbol=ANKRUSDT&period=15m'
const urlvalue4hrANKRUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrANKRUSDT = 'globalLongShortAccountRatio?symbol=ANKRUSDT&period=4h'
const urlvalue1hrANKRUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrANKRUSDT = 'globalLongShortAccountRatio?symbol=ANKRUSDT&period=1h'
const urlvalue24hrANKRUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrANKRUSDT = 'globalLongShortAccountRatio?symbol=ANKRUSDT&period=1d'
fetch(urlvalueANKRUSDT + ratiovalueANKRUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data41) {
        const initialvalue = parseFloat(data41.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data41.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('ANKRUSDT').
            innerHTML = data41.at(28)['symbol']
        document.getElementById('15mlsrANKRUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrANKRUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalANKRUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrANKRUSDT + ratiovalue1hrANKRUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data42) {
        const initialvalue1h = parseFloat(data42.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data42.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrANKRUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrANKRUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrANKRUSDT + ratiovalue4hrANKRUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data43) {
        const initialvalue4h = parseFloat(data43.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data43.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrANKRUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrANKRUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrANKRUSDT + ratiovalue24hrANKRUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data44) {
        const initialvalue24h = parseFloat(data44.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data44.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrANKRUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrANKRUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// ANTUSDT
const urlvalueANTUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueANTUSDT = 'globalLongShortAccountRatio?symbol=ANTUSDT&period=15m'
const urlvalue4hrANTUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrANTUSDT = 'globalLongShortAccountRatio?symbol=ANTUSDT&period=4h'
const urlvalue1hrANTUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrANTUSDT = 'globalLongShortAccountRatio?symbol=ANTUSDT&period=1h'
const urlvalue24hrANTUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrANTUSDT = 'globalLongShortAccountRatio?symbol=ANTUSDT&period=1d'
fetch(urlvalueANTUSDT + ratiovalueANTUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data45) {
        const initialvalue = parseFloat(data45.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data45.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('ANTUSDT').
            innerHTML = data45.at(28)['symbol']
        document.getElementById('15mlsrANTUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrANTUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalANTUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrANTUSDT + ratiovalue1hrANTUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data46) {
        const initialvalue1h = parseFloat(data46.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data46.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrANTUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrANTUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrANTUSDT + ratiovalue4hrANTUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data47) {
        const initialvalue4h = parseFloat(data47.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data47.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrANTUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrANTUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrANTUSDT + ratiovalue24hrANTUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data48) {
        const initialvalue24h = parseFloat(data48.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data48.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrANTUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrANTUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })


// APEUSDT
const urlvalueAPEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueAPEUSDT = 'globalLongShortAccountRatio?symbol=APEUSDT&period=15m'
const urlvalue4hrAPEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrAPEUSDT = 'globalLongShortAccountRatio?symbol=APEUSDT&period=4h'
const urlvalue1hrAPEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrAPEUSDT = 'globalLongShortAccountRatio?symbol=APEUSDT&period=1h'
const urlvalue24hrAPEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrAPEUSDT = 'globalLongShortAccountRatio?symbol=APEUSDT&period=1d'
fetch(urlvalueAPEUSDT + ratiovalueAPEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data49) {
        const initialvalue = parseFloat(data49.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data49.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('APEUSDT').
            innerHTML = data49.at(28)['symbol']
        document.getElementById('15mlsrAPEUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrAPEUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalAPEUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrAPEUSDT + ratiovalue1hrAPEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data50) {
        const initialvalue1h = parseFloat(data50.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data50.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrAPEUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrAPEUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrAPEUSDT + ratiovalue4hrAPEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data51) {
        const initialvalue4h = parseFloat(data51.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data51.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrAPEUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrAPEUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrAPEUSDT + ratiovalue24hrAPEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data52) {
        const initialvalue24h = parseFloat(data52.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data52.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrAPEUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrAPEUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// API3USDT
const urlvalueAPI3USDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueAPI3USDT = 'globalLongShortAccountRatio?symbol=API3USDT&period=15m'
const urlvalue4hrAPI3USDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrAPI3USDT = 'globalLongShortAccountRatio?symbol=API3USDT&period=4h'
const urlvalue1hrAPI3USDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrAPI3USDT = 'globalLongShortAccountRatio?symbol=API3USDT&period=1h'
const urlvalue24hrAPI3USDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrAPI3USDT = 'globalLongShortAccountRatio?symbol=API3USDT&period=1d'
fetch(urlvalueAPI3USDT + ratiovalueAPI3USDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data53) {
        const initialvalue = parseFloat(data53.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data53.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('API3USDT').
            innerHTML = data53.at(28)['symbol']
        document.getElementById('15mlsrAPI3USDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrAPI3USDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalAPI3USDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrAPI3USDT + ratiovalue1hrAPI3USDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data54) {
        const initialvalue1h = parseFloat(data54.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data54.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrAPI3USDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrAPI3USDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrAPI3USDT + ratiovalue4hrAPI3USDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data55) {
        const initialvalue4h = parseFloat(data55.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data55.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrAPI3USDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrAPI3USDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrAPI3USDT + ratiovalue24hrAPI3USDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data56) {
        const initialvalue24h = parseFloat(data56.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data56.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrAPI3USDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrAPI3USDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// ARPAUSDT
const urlvalueARPAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueARPAUSDT = 'globalLongShortAccountRatio?symbol=ARPAUSDT&period=15m'
const urlvalue4hrARPAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrARPAUSDT = 'globalLongShortAccountRatio?symbol=ARPAUSDT&period=4h'
const urlvalue1hrARPAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrARPAUSDT = 'globalLongShortAccountRatio?symbol=ARPAUSDT&period=1h'
const urlvalue24hrARPAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrARPAUSDT = 'globalLongShortAccountRatio?symbol=ARPAUSDT&period=1d'
fetch(urlvalueARPAUSDT + ratiovalueARPAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data57) {
        const initialvalue = parseFloat(data57.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data57.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('ARPAUSDT').
            innerHTML = data57.at(28)['symbol']
        document.getElementById('15mlsrARPAUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrARPAUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalARPAUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrAPI3USDT + ratiovalue1hrAPI3USDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data58) {
        const initialvalue1h = parseFloat(data58.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data58.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrARPAUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrARPAUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrARPAUSDT + ratiovalue4hrARPAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data59) {
        const initialvalue4h = parseFloat(data59.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data59.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrARPAUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrARPAUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrARPAUSDT + ratiovalue24hrARPAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data60) {
        const initialvalue24h = parseFloat(data60.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data60.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrARPAUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrARPAUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// ARUSDT
const urlvalueARUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueARUSDT = 'globalLongShortAccountRatio?symbol=ARUSDT&period=15m'
const urlvalue4hrARUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrARUSDT = 'globalLongShortAccountRatio?symbol=ARUSDT&period=4h'
const urlvalue1hrARUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrARUSDT = 'globalLongShortAccountRatio?symbol=ARUSDT&period=1h'
const urlvalue24hrARUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrARUSDT = 'globalLongShortAccountRatio?symbol=ARUSDT&period=1d'
fetch(urlvalueARUSDT + ratiovalueARUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data61) {
        const initialvalue = parseFloat(data61.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data61.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('ARPAUSDT').
            innerHTML = data61.at(28)['symbol']
        document.getElementById('15mlsrARUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrARUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalARUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrAPI3USDT + ratiovalue1hrAPI3USDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data62) {
        const initialvalue1h = parseFloat(data62.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data62.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrARUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrARUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrARPAUSDT + ratiovalue4hrARPAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data63) {
        const initialvalue4h = parseFloat(data63.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data63.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrARUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrARUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrARUSDT + ratiovalue24hrARUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data64) {
        const initialvalue24h = parseFloat(data64.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data64.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrARUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrARUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// ATAUSDT
const urlvalueATAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueATAUSDT = 'globalLongShortAccountRatio?symbol=ATAUSDT&period=15m'
const urlvalue4hrATAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrATAUSDT = 'globalLongShortAccountRatio?symbol=ATAUSDT&period=4h'
const urlvalue1hrATAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrATAUSDT = 'globalLongShortAccountRatio?symbol=ATAUSDT&period=1h'
const urlvalue24hrATAUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrATAUSDT = 'globalLongShortAccountRatio?symbol=ATAUSDT&period=1d'
fetch(urlvalueATAUSDT + ratiovalueATAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data65) {
        const initialvalue = parseFloat(data65.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data65.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('ATAUSDT').
            innerHTML = data65.at(28)['symbol']
        document.getElementById('15mlsrATAUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrATAUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalATAUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrAPI3USDT + ratiovalue1hrAPI3USDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data66) {
        const initialvalue1h = parseFloat(data66.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data66.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrATAUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrATAUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrATAUSDT + ratiovalue4hrATAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data67) {
        const initialvalue4h = parseFloat(data67.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data67.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrATAUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrATAUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrATAUSDT + ratiovalue24hrATAUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data68) {
        const initialvalue24h = parseFloat(data68.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data68.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrATAUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrATAUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// ATOMUSDT
const urlvalueATOMUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueATOMUSDT = 'globalLongShortAccountRatio?symbol=ATOMUSDT&period=15m'
const urlvalue4hrATOMUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrATOMUSDT = 'globalLongShortAccountRatio?symbol=ATOMUSDT&period=4h'
const urlvalue1hrATOMUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrATOMUSDT = 'globalLongShortAccountRatio?symbol=ATOMUSDT&period=1h'
const urlvalue24hrATOMUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrATOMUSDT = 'globalLongShortAccountRatio?symbol=ATOMUSDT&period=1d'
fetch(urlvalueATOMUSDT + ratiovalueATOMUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data69) {
        const initialvalue = parseFloat(data69.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data69.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('ATOMUSDT').
            innerHTML = data69.at(28)['symbol']
        document.getElementById('15mlsrATOMUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrATOMUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalATOMUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrATOMUSDT + ratiovalue1hrATOMUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data70) {
        const initialvalue1h = parseFloat(data70.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data70.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrATOMUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrATOMUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrATOMUSDT + ratiovalue4hrATOMUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data71) {
        const initialvalue4h = parseFloat(data71.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data71.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrATOMUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrATOMUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrATOMUSDT + ratiovalue24hrATOMUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data72) {
        const initialvalue24h = parseFloat(data72.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data72.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrATOMUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrATOMUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// AVAXUSDT
const urlvalueAVAXUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueAVAXUSDT = 'globalLongShortAccountRatio?symbol=AVAXUSDT&period=15m'
const urlvalue4hrAVAXUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrAVAXUSDT = 'globalLongShortAccountRatio?symbol=AVAXUSDT&period=4h'
const urlvalue1hrAVAXUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrAVAXUSDT = 'globalLongShortAccountRatio?symbol=AVAXUSDT&period=1h'
const urlvalue24hrAVAXUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrAVAXUSDT = 'globalLongShortAccountRatio?symbol=AVAXUSDT&period=1d'
fetch(urlvalueAVAXUSDT + ratiovalueAVAXUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data73) {
        const initialvalue = parseFloat(data73.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data73.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('AVAXUSDT').
            innerHTML = data73.at(28)['symbol']
        document.getElementById('15mlsrAVAXUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrAVAXUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalAVAXUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrAVAXUSDT + ratiovalue1hrAVAXUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data74) {
        const initialvalue1h = parseFloat(data74.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data74.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrAVAXUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrAVAXUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrAVAXUSDT + ratiovalue4hrAVAXUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data75) {
        const initialvalue4h = parseFloat(data75.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data75.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrAVAXUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrAVAXUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrAVAXUSDT + ratiovalue24hrAVAXUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data76) {
        const initialvalue24h = parseFloat(data76.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data76.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrAVAXUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrAVAXUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })


// BAKEUSDT
const urlvalueBAKEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueBAKEUSDT = 'globalLongShortAccountRatio?symbol=BAKEUSDT&period=15m'
const urlvalue4hrBAKEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrBAKEUSDT = 'globalLongShortAccountRatio?symbol=BAKEUSDT&period=4h'
const urlvalue1hrBAKEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrBAKEUSDT = 'globalLongShortAccountRatio?symbol=BAKEUSDT&period=1h'
const urlvalue24hrBAKEUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrBAKEUSDT = 'globalLongShortAccountRatio?symbol=BAKEUSDT&period=1d'
fetch(urlvalueBAKEUSDT + ratiovalueBAKEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data77) {
        const initialvalue = parseFloat(data77.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data77.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('BAKEUSDT').
            innerHTML = data77.at(28)['symbol']
        document.getElementById('15mlsrBAKEUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrBAKEUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalBAKEUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrBAKEUSDT + ratiovalue1hrBAKEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data78) {
        const initialvalue1h = parseFloat(data78.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data78.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrBAKEUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrBAKEUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrBAKEUSDT + ratiovalue4hrBAKEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data79) {
        const initialvalue4h = parseFloat(data79.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data79.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrBAKEUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrBAKEUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrBAKEUSDT + ratiovalue24hrBAKEUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data80) {
        const initialvalue24h = parseFloat(data80.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data80.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrBAKEUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrBAKEUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// BALUSDT
const urlvalueBALUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueBALUSDT = 'globalLongShortAccountRatio?symbol=BALUSDT&period=15m'
const urlvalue4hrBALUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrBALUSDT = 'globalLongShortAccountRatio?symbol=BALUSDT&period=4h'
const urlvalue1hrBALUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrBALUSDT = 'globalLongShortAccountRatio?symbol=BALUSDT&period=1h'
const urlvalue24hrBALUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrBALUSDT = 'globalLongShortAccountRatio?symbol=BALUSDT&period=1d'
fetch(urlvalueBALUSDT + ratiovalueBALUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data81) {
        const initialvalue = parseFloat(data81.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data81.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('BALUSDT').
            innerHTML = data81.at(28)['symbol']
        document.getElementById('15mlsrBALUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrBALUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalBALUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrBALUSDT + ratiovalue1hrBALUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data82) {
        const initialvalue1h = parseFloat(data82.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data82.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrBALUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrBALUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrBALUSDT + ratiovalue4hrBALUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data83) {
        const initialvalue4h = parseFloat(data83.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data83.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrBALUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrBALUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrBALUSDT + ratiovalue24hrBALUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data84) {
        const initialvalue24h = parseFloat(data84.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data84.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrBALUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrBALUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// BANDUSDT
const urlvalueBANDUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueBANDUSDT = 'globalLongShortAccountRatio?symbol=BANDUSDT&period=15m'
const urlvalue4hrBANDUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrBANDUSDT = 'globalLongShortAccountRatio?symbol=BANDUSDT&period=4h'
const urlvalue1hrBANDUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrBANDUSDT = 'globalLongShortAccountRatio?symbol=BANDUSDT&period=1h'
const urlvalue24hrBANDUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrBANDUSDT = 'globalLongShortAccountRatio?symbol=BANDUSDT&period=1d'
fetch(urlvalueBANDUSDT + ratiovalueBANDUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data85) {
        const initialvalue = parseFloat(data85.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data85.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('BANDUSDT').
            innerHTML = data85.at(28)['symbol']
        document.getElementById('15mlsrBANDUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrBANDUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalBANDUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrBANDUSDT + ratiovalue1hrBANDUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data86) {
        const initialvalue1h = parseFloat(data86.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data86.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrBANDUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrBANDUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrBANDUSDT + ratiovalue4hrBANDUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data87) {
        const initialvalue4h = parseFloat(data87.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data87.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrBANDUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrBANDUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrBANDUSDT + ratiovalue24hrBANDUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data88) {
        const initialvalue24h = parseFloat(data88.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data88.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrBANDUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrBANDUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// BATUSDT
const urlvalueBATUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueBATUSDT = 'globalLongShortAccountRatio?symbol=BATUSDT&period=15m'
const urlvalue4hrBATUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrBATUSDT = 'globalLongShortAccountRatio?symbol=BATUSDT&period=4h'
const urlvalue1hrBATUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrBATUSDT = 'globalLongShortAccountRatio?symbol=BATUSDT&period=1h'
const urlvalue24hrBATUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrBATUSDT = 'globalLongShortAccountRatio?symbol=BATUSDT&period=1d'
fetch(urlvalueBATUSDT + ratiovalueBATUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data89) {
        const initialvalue = parseFloat(data89.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data89.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('BATUSDT').
            innerHTML = data89.at(28)['symbol']
        document.getElementById('15mlsrBATUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrBATUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalBATUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrBANDUSDT + ratiovalue1hrBANDUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data90) {
        const initialvalue1h = parseFloat(data90.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data90.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrBATUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrBATUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrBATUSDT + ratiovalue4hrBATUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data91) {
        const initialvalue4h = parseFloat(data91.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data91.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrBATUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrBATUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrBATUSDT + ratiovalue24hrBATUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data91) {
        const initialvalue24h = parseFloat(data91.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data91.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrBATUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrBATUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// BCHUSDT
const urlvalueBCHUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueBCHUSDT = 'globalLongShortAccountRatio?symbol=BCHUSDT&period=15m'
const urlvalue4hrBCHUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrBCHUSDT = 'globalLongShortAccountRatio?symbol=BCHUSDT&period=4h'
const urlvalue1hrBCHUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrBCHUSDT = 'globalLongShortAccountRatio?symbol=BCHUSDT&period=1h'
const urlvalue24hrBCHUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrBCHUSDT = 'globalLongShortAccountRatio?symbol=BCHUSDT&period=1d'
fetch(urlvalueBCHUSDT + ratiovalueBCHUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data92) {
        const initialvalue = parseFloat(data92.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data92.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('BCHUSDT').
            innerHTML = data92.at(28)['symbol']
        document.getElementById('15mlsrBCHUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrBCHUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalBCHUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrBANDUSDT + ratiovalue1hrBANDUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data93) {
        const initialvalue1h = parseFloat(data93.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data93.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrBCHUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrBCHUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrBCHUSDT + ratiovalue4hrBCHUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data94) {
        const initialvalue4h = parseFloat(data94.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data94.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrBCHUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrBCHUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrBCHUSDT + ratiovalue24hrBCHUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data95) {
        const initialvalue24h = parseFloat(data95.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data95.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrBCHUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrBCHUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })


// BELUSDT
const urlvalueBELUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueBELUSDT = 'globalLongShortAccountRatio?symbol=BELUSDT&period=15m'
const urlvalue4hrBELUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrBELUSDT = 'globalLongShortAccountRatio?symbol=BELUSDT&period=4h'
const urlvalue1hrBELUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrBELUSDT = 'globalLongShortAccountRatio?symbol=BELUSDT&period=1h'
const urlvalue24hrBELUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrBELUSDT = 'globalLongShortAccountRatio?symbol=BELUSDT&period=1d'
fetch(urlvalueBELUSDT + ratiovalueBELUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data96) {
        const initialvalue = parseFloat(data96.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data96.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('BELUSDT').
            innerHTML = data96.at(28)['symbol']
        document.getElementById('15mlsrBELUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrBELUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalBELUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrBELUSDT + ratiovalue1hrBELUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data97) {
        const initialvalue1h = parseFloat(data97.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data97.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrBELUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrBELUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrBELUSDT + ratiovalue4hrBELUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data98) {
        const initialvalue4h = parseFloat(data98.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data98.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrBELUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrBELUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrBELUSDT + ratiovalue24hrBELUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data99) {
        const initialvalue24h = parseFloat(data99.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data99.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrBELUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrBELUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })

// BLZUSDT
const urlvalueBLZUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalueBLZUSDT = 'globalLongShortAccountRatio?symbol=BLZUSDT&period=15m'
const urlvalue4hrBLZUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue4hrBLZUSDT = 'globalLongShortAccountRatio?symbol=BLZUSDT&period=4h'
const urlvalue1hrBLZUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue1hrBLZUSDT = 'globalLongShortAccountRatio?symbol=BLZUSDT&period=1h'
const urlvalue24hrBLZUSDT = 'https://fapi.binance.com/futures/data/'
const ratiovalue24hrBLZUSDT = 'globalLongShortAccountRatio?symbol=BLZUSDT&period=1d'
fetch(urlvalueBLZUSDT + ratiovalueBLZUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data100) {
        const initialvalue = parseFloat(data100.at(28)['longShortRatio'])
        const finalvalue = parseFloat(data100.at(29)['longShortRatio'])
        const variation = finalvalue - initialvalue
        const percentage = ((finalvalue / initialvalue) - 1) * 100
        document.getElementById('BLZUSDT').
            innerHTML = data100.at(28)['symbol']
        document.getElementById('15mlsrBLZUSDT').
            innerHTML = parseFloat(variation).toFixed(3)
        document.getElementById('15mplsrBLZUSDT').
            innerHTML = parseFloat(percentage).toFixed(2) + '%'
        document.getElementById('lsrglobalBLZUSDT').
            innerHTML = finalvalue.toFixed(3)
    })
fetch(urlvalue1hrBLZUSDT + ratiovalue1hrBLZUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data101) {
        const initialvalue1h = parseFloat(data101.at(28)['longShortRatio'])
        const finalvalue1h = parseFloat(data101.at(29)['longShortRatio'])
        const variation1h = finalvalue1h - initialvalue1h
        const percentage1h = ((finalvalue1h / initialvalue1h) - 1) * 100
        document.getElementById('1hlsrBLZUSDT').
            innerHTML = parseFloat(variation1h).toFixed(3)
        document.getElementById('1hplsrBLZUSDT').
            innerHTML = parseFloat(percentage1h).toFixed(2) + '%'

    })
fetch(urlvalue4hrBLZUSDT + ratiovalue4hrBLZUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data102) {
        const initialvalue4h = parseFloat(data102.at(28)['longShortRatio'])
        const finalvalue4h = parseFloat(data102.at(29)['longShortRatio'])
        const variation4h = finalvalue4h - initialvalue4h
        const percentage4h = ((finalvalue4h / initialvalue4h) - 1) * 100
        document.getElementById('4hlsrBLZUSDT').
            innerHTML = parseFloat(variation4h).toFixed(3)
        document.getElementById('4hplsrBLZUSDT').
            innerHTML = parseFloat(percentage4h).toFixed(2) + '%'

    })
fetch(urlvalue24hrBLZUSDT + ratiovalue24hrBLZUSDT)
    .then(function (response) {
        return response.json()
    })
    .then(function (data103) {
        const initialvalue24h = parseFloat(data103.at(22)['longShortRatio'])
        const finalvalue24h = parseFloat(data103.at(23)['longShortRatio'])
        const variation24h = finalvalue24h - initialvalue24h
        const percentage24h = ((finalvalue24h / initialvalue24h) - 1) * 100
        document.getElementById('24hlsrBLZUSDT').
            innerHTML = parseFloat(variation24h).toFixed(3)
        document.getElementById('24hplsrBLZUSDT').
            innerHTML = parseFloat(percentage24h).toFixed(2) + '%'

    })