const funds = [
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    return data.reduce((sum, curr) => curr.amount > 0 ? sum + curr.amount : sum, 0);
};
console.log(getPositiveIncomeAmount(funds));
const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((sum, curr) => sum + curr.amount, 0) : getPositiveIncomeAmount(funds)
    
};
console.log(getTotalIncomeAmount(funds));