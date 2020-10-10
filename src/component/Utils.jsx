import * as moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';


export function formatMoney(money) {
    return new Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'INR' }).format(money);
}

export function formatMoneyInShortFormat(money) {
    return new Intl.NumberFormat('en-IN',{ notation: "compact" , compactDisplay: "long" }).format(money);
}

export function formatNum(num) {
    return new Intl.NumberFormat('en-IN').format(num);
}

export function todayDate(){
    return moment().format("YYYY-MM-DD");
}

export function yesterdayDate(){
    return moment().subtract(1, 'day').format("YYYY-MM-DD");
}

export function mockAssetzService(){
    return '{"data":[{"portfolioName":"Emergency Fund","assets":{"highlights":[{"previousValuation":155251.44237265,"changePercentage":0.8,"change":0E-8,"name":"Current Valuation","amount":155251.44237265},{"previousValuation":155251.44237265,"changePercentage":0E-8,"change":0E-8,"name":"Mutual Fund","amount":155251.44237265}],"details":[{"assetType":"Mutual Fund","currentValuation":155251.44237265,"amountInvested":144664.45541104,"gainLoss":0E-8,"gainLossPercentage":0E-8,"totalNotionalGainLoss":10586.98696161,"totalRealizedGainLoss":0,"previousValuation":155251.44237265}]}},{"portfolioName":"Prisha Marriage","assets":{"highlights":[{"previousValuation":32377.405395,"changePercentage":0.000000,"change":0.000000,"name":"Current Valuation","amount":32377.405395},{"previousValuation":32377.405395,"changePercentage":0.000000,"change":0.000000,"name":"Mutual Fund","amount":32377.405395}],"details":[{"assetType":"Mutual Fund","currentValuation":32377.405395,"amountInvested":35999.92550205,"gainLoss":0.000000,"gainLossPercentage":0.000000,"totalNotionalGainLoss":-3622.52010705,"totalRealizedGainLoss":0,"previousValuation":32377.405395}]}},{"portfolioName":"Near Future","assets":{"highlights":[{"previousValuation":134581.58897920,"changePercentage":0E-8,"change":0E-8,"name":"Current Valuation","amount":134581.58897920},{"previousValuation":131595.98897920,"changePercentage":0E-8,"change":0E-8,"name":"Mutual Fund","amount":131595.98897920},{"previousValuation":2985.6,"changePercentage":0.0,"change":0.0,"name":"Stock","amount":2985.6}],"details":[{"assetType":"Mutual Fund","currentValuation":131595.98897920,"amountInvested":154000.01334580,"gainLoss":0E-8,"gainLossPercentage":0E-8,"totalNotionalGainLoss":-22404.02436660,"totalRealizedGainLoss":0,"previousValuation":131595.98897920},{"assetType":"Stock","currentValuation":2985.6,"amountInvested":9950.6496,"gainLoss":0.0,"gainLossPercentage":0.0,"totalNotionalGainLoss":-6965.0496,"totalRealizedGainLoss":0,"previousValuation":2985.6}]}},{"portfolioName":"Home Purchase","assets":{"highlights":[{"previousValuation":71954.643928,"changePercentage":0.000000,"change":0.000000,"name":"Current Valuation","amount":71954.643928},{"previousValuation":71954.643928,"changePercentage":0.000000,"change":0.000000,"name":"Mutual Fund","amount":71954.643928}],"details":[{"assetType":"Mutual Fund","currentValuation":71954.643928,"amountInvested":90000.0036908,"gainLoss":0.000000,"gainLossPercentage":0.000000,"totalNotionalGainLoss":-18045.3597628,"totalRealizedGainLoss":0,"previousValuation":71954.643928}]}},{"portfolioName":"P Loan","assets":{"highlights":[{"previousValuation":63144.77547684,"changePercentage":0E-8,"change":0E-8,"name":"Current Valuation","amount":63144.77547684},{"previousValuation":63144.77547684,"changePercentage":0E-8,"change":0E-8,"name":"Mutual Fund","amount":63144.77547684}],"details":[{"assetType":"Mutual Fund","currentValuation":63144.77547684,"amountInvested":59032.47625404,"gainLoss":0E-8,"gainLossPercentage":0E-8,"totalNotionalGainLoss":4112.29922280,"totalRealizedGainLoss":0,"previousValuation":63144.77547684}]}},{"portfolioName":"Prisha Higher Education","assets":{"highlights":[{"previousValuation":42061.6726770,"changePercentage":0E-7,"change":0E-7,"name":"Current Valuation","amount":42061.6726770},{"previousValuation":42061.6726770,"changePercentage":0E-7,"change":0E-7,"name":"Mutual Fund","amount":42061.6726770}],"details":[{"assetType":"Mutual Fund","currentValuation":42061.6726770,"amountInvested":45910.04797620,"gainLoss":0E-7,"gainLossPercentage":0E-7,"totalNotionalGainLoss":-3848.37529920,"totalRealizedGainLoss":0,"previousValuation":42061.6726770}]}},{"portfolioName":"Retirement","assets":{"highlights":[{"previousValuation":3592965.60911022,"changePercentage":0E-8,"change":0E-8,"name":"Current Valuation","amount":3592965.60911022},{"previousValuation":943535.05911022,"changePercentage":0E-8,"change":0E-8,"name":"Mutual Fund","amount":943535.05911022},{"previousValuation":1631757.15,"changePercentage":0.00,"change":0.00,"name":"Stock","amount":1631757.15}],"details":[{"assetType":"Mutual Fund","currentValuation":943535.05911022,"amountInvested":1097885.73811157,"gainLoss":0E-8,"gainLossPercentage":0E-8,"totalNotionalGainLoss":-154350.67900135,"totalRealizedGainLoss":0,"previousValuation":943535.05911022},{"assetType":"PPF","currentValuation":201810.4000,"amountInvested":142000,"gainLoss":0.0000,"gainLossPercentage":0.0000,"totalNotionalGainLoss":59810.4000,"totalRealizedGainLoss":0,"previousValuation":201810.4000},{"assetType":"EPF","currentValuation":815863,"amountInvested":815863,"gainLoss":0,"gainLossPercentage":0,"totalNotionalGainLoss":0,"totalRealizedGainLoss":0,"previousValuation":815863},{"assetType":"Stock","currentValuation":1631757.15,"amountInvested":1591183.2977,"gainLoss":0.00,"gainLossPercentage":0.00,"totalNotionalGainLoss":40573.8523,"totalRealizedGainLoss":0,"previousValuation":1631757.15}]}},{"portfolioName":"Prachi Assets","assets":{"highlights":[{"previousValuation":101009.5517470,"changePercentage":0E-7,"change":0E-7,"name":"Current Valuation","amount":101009.5517470},{"previousValuation":52551.3017470,"changePercentage":0E-7,"change":0E-7,"name":"Mutual Fund","amount":52551.3017470},{"previousValuation":48458.25,"changePercentage":0.00,"change":0.00,"name":"Stock","amount":48458.25}],"details":[{"assetType":"Mutual Fund","currentValuation":52551.3017470,"amountInvested":53400.0160355,"gainLoss":0E-7,"gainLossPercentage":0E-7,"totalNotionalGainLoss":-848.7142885,"totalRealizedGainLoss":0,"previousValuation":52551.3017470},{"assetType":"Stock","currentValuation":48458.25,"amountInvested":65179.7456,"gainLoss":0.00,"gainLossPercentage":0.00,"totalNotionalGainLoss":-16721.4956,"totalRealizedGainLoss":0,"previousValuation":48458.25}]}}],"total":{"previousNetworth":4193346.68968591,"totalNetworth":4193346.68968591,"totalNetworthChange":0E-8}}';
}

export function mockAppStatusService(){
    return '{"data":{"mfNavSyncDt":"2020-04-20","stocksNavSyncDt":"2020-04-21"}}';
}

export function mockAnalysisService(){
    return '{ "cardsData": [ { "name":"Today", "fromDate":"2020-05-12", "toDate":"2020-05-12", "details":[ { "schemeName": "ABC", "lastNav": 100.00 }, { "schemeName": "XYZ", "lastNav": 100.00 } ] }, { "name":"This Week", "fromDate":"2020-05-05", "toDate":"2020-05-12", "details":[ { "schemeName": "ABC", "lastNav": 100.00 }, { "schemeName": "XYZ", "lastNav": 100.00 } ] } ] }';
}

export function lossGainFormatter(cell, row) {
    let icon;
    const formattedAmount = formatMoney(cell)
    if (cell < 0) {
        icon = <FontAwesomeIcon icon="arrow-alt-circle-down" color="red" />
    } else if (cell > 0) {
        icon = <FontAwesomeIcon icon="arrow-alt-circle-up" color="green" />
    }
    return (
        <span>{formattedAmount} {icon}</span>

    );
}

export function moneyFormatter(cell, row) {
    const formattedAmount = formatMoney(cell)
    return (
        <span>{formattedAmount} </span>
    );
}

export function percentFormatter(cell, row) {
    let icon;
    const formattedPer = formatNum(cell)
    if (cell < 0) {
        icon = <FontAwesomeIcon icon="arrow-alt-circle-down" color="red" />
    } else if (cell > 0) {
        icon = <FontAwesomeIcon icon="arrow-alt-circle-up" color="green" />
    }
    return (
        <span>{formattedPer} % {icon}</span>
    );
}


export function getHostName() {
    return "http://192.168.0.112:";
}

export function getPort() {
    return "30707";
}