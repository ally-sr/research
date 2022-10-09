const moeda = ['ANTUSDT', 'APEUSDT', 'API3USDT', 'ARPAUSDT', 'ARUSDT', 'ATAUSDT', 'ATOMUSDT',
    'AVAXUSDT', 'AVAXUSDT', 'AXSUSDT', 'BAKEUSDT', 'BALUSDT', 'BANDUSDT', 'BATUSDT', 'BCHUSDT', 'BELUSDT',
    'BLZUSDT', 'BNBUSDT', 'BNXUSDT', 'BTCDOMUSDT', 'BTCUSDT', 'C98USDT', 'CELOUSDT', 'CHRUSDT', 'CHZUSDT',
    'COMPUSDT', 'COTIUSDT', 'CRVUSDT', 'CVXUSDT', 'DARUSDT', 'DEFIUSDT', 'DENTUSDT', 'DGBUSDT', 'DOGEUSDT',
    'DOTUSDT', 'DUSKUSDT', 'DYDXUSDT', 'EGLDUSDT', 'ENJUSDT', 'ENSUSDT', 'EOSUSDT', 'ETCUSDT', 'ETHUSDT',
    'FILUSDT', 'FLMUSDT', 'FLOWUSDT', 'FOOTBALLUSDT', 'FTMUSDT', 'FTTUSDT', 'GALUSDT', 'GTCUSDT', 'HBARUSDT',
    'HNTUSDT', 'HOTUSDT', 'ICPUSDT', 'ICXUSDT', 'IMXUSDT', 'INJUSDT', 'IOSTUSDT', 'IOTAUSDT', 'IOTXUSDT',
    'JASMYUSDT', 'KAVAUSDT', 'KLAYUSDT', 'KNCUSDT', 'KSMUSDT', 'LDOUSDT', 'LINAUSDT', 'LINKUSDT', 'LITUSDT',
    'LPTUSDT', 'LRCUSDT', 'LTCUSDT', 'LUNA2USDT', 'MANAUSDT', 'MASKUSDT', 'MATICUSDT', 'MKRUSDT', 'MTLUSDT',
    'NEARUSDT', 'NEOUSDT', 'DGBUSDT']

moeda.forEach(item => {

    function print() {
        // declarando variáveis //
        curr = item
        url1 = 'https://fapi.binance.com/futures/data/'
        url2 = 'globalLongShortAccountRatio?symbol=' + curr + '&period=15m'
        url3 = url1 + url2
        idHTMLvalue = 'lsr'+curr
        idHTMLvaria = '15mlsr' + curr
        idHTMLvariap = '15mplsr' + curr


        // fazendo fetch //

        fetch(url3)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                
                const v1 = parseFloat(data.at(28)['longShortRatio'])
                const v2 = parseFloat(data.at(29)['longShortRatio'])
                const va = (v2 - v1)
                const vp = (((v2 / v1) - 1) * 100)
                document.getElementById(curr).
                    innerHTML = data.at(29)['symbol']
                document.getElementById(idHTMLvalue).
                    innerHTML = v2.toFixed(3)
                document.getElementById(idHTMLvaria).
                    innerHTML = va.toFixed(3)
                document.getElementById(idHTMLvariap).
                    innerHTML = vp.toFixed(2) + '%'
                document.getElementById(idHTMLvalue).
                    innerHTML = v2.toFixed(3)
                document.getElementById(idHTMLvaria).
                    innerHTML = va.toFixed(3)
                document.getElementById(idHTMLvaria).
                    innerHTML = vp.toFixed(3) + '%'

            }).then(function umah() {
                // declarando variáveis //
                curr = item
                url1 = 'https://fapi.binance.com/futures/data/'
                url2 = 'globalLongShortAccountRatio?symbol=' + {} + '&period=1h'
                url3 = url1 + url2
                idHTMLvalue = '1hlsr'
                idHTMLvaria = '1hlsr'
                idHTMLvariap = '1hplsr'

                // fazendo fetch //

                    fetch(url3)
                        .then(function (response) {
                            return response.json()
                        })
                        .then(function (data1h) {

                            const v1 = parseFloat(data1h.at(28)['longShortRatio'])
                            const v2 = parseFloat(data1h.at(29)['longShortRatio'])
                            const va = (v2 - v1)
                            const vp = (((v2 / v1) - 1) * 100)
                            document.getElementById(idHTMLvalue).
                                innerHTML = v2.toFixed(3)
                            document.getElementById(idHTMLvaria).
                                innerHTML = va.toFixed(3)
                            document.getElementById(idHTMLvariap).
                                innerHTML = vp.toFixed(2) + '%'

                        })
                })
    }
    print(item)
})
