//add imports here if needed

export function formatMoney(money) {
    return new Intl.NumberFormat('en-IN').format(money);
}