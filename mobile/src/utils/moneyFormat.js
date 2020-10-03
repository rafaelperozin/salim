const moneyFormat = value => {
    return Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP'
    }).format(value);
}

export default moneyFormat;