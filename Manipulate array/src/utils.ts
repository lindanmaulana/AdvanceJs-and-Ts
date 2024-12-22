import { IDataUsers } from "./data";
const DEPOSIT = "deposit";
const WITHDRAWAL = "withdrawal";

export const TypeTransaction = {
  DEPOSIT,
  WITHDRAWAL,
};

export const ExampleCheckActivity = (data: IDataUsers[], isActive: boolean) => {
  if (!Array.isArray(data)) throw new Error("Expected an array of users");
  
  return data.filter((user) => user.isActive === isActive);
};

export const ExampleTotalTransaction = (
  data: IDataUsers[],
  type: "deposit" | "withdrawal"
) => {
  return data.map((user) => {
    const mostTransaction = user.transactions.reduce((acc, call) => {
      call.type === type ? (acc += call.amount) : 0;

      return acc;
    }, 0);

    return { ...user, transactions: mostTransaction };
  });
};
