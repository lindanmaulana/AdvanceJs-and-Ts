const DEPOSIT = "deposit";
const WITHDRAWAL = "withdrawal";
export const TypeTransaction = {
    DEPOSIT,
    WITHDRAWAL,
};
export const ExampleCheckActivity = (data, isActive) => {
    return data.filter((user) => user.isActive === isActive);
};
export const ExampleTotalTransaction = (data, type) => {
    return data.map((user) => {
        const mostTransaction = user.transactions.reduce((acc, call) => {
            call.type === type ? (acc += call.amount) : 0;
            return acc;
        }, 0);
        return Object.assign(Object.assign({}, user), { transactions: mostTransaction });
    });
};
