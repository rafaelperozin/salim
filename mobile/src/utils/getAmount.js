import { Globals } from '../styles/globals';

const calculateAmount = (budget, totalUsed) => {
    return (totalUsed / budget) * 100;
}

const getAmount = (budget, totalUsed) => {

    let usedAmount = calculateAmount(budget, totalUsed);

    // Set color status
    const goodColor = Globals.color.midGreen;
    const takeCareColor = Globals.color.midYellow;
    const BadColor = Globals.color.midRed;

    // On budget
    let statusColor = goodColor;
    // Almost used the total budget
    if (usedAmount > 80)
        statusColor = takeCareColor;
    // Exceeded the budget
    if (usedAmount > 100) {
        statusColor = BadColor;
        usedAmount = 100;
    }
    
    usedAmount = `${usedAmount}%`;

    return {
        color: statusColor,
        value: usedAmount
    };
}

export default getAmount;