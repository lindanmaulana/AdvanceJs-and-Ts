// SOal soal manipulasi

import { DataUsers, IDataUsers } from "./data.js";
import { ExampleCheckActivity, ExampleTotalTransaction } from "./utils.js";

const DEPOSIT = "deposit";
const WITHDRAWAL = "withdrawal";

// 1. Total Balance per User
// Buatlah sebuah fungsi getTotalBalancePerUser yang menghitung total saldo untuk setiap pengguna.
// Saldo dihitung dengan mengurangi jumlah withdrawal dari jumlah deposit untuk setiap pengguna.
//  Fungsi ini harus mengembalikan objek dengan id pengguna sebagai key dan saldo totalnya sebagai value.
export const FuncGetTotalBalancePerUser = (data: IDataUsers[], id: number) => {
  const acountUser = data.find((user) => user.id === id);

  return acountUser?.transactions.reduce((acc, call) => {
    return call.type === DEPOSIT ? (acc += call.amount) : (acc -= call.amount);
  }, 0);
};

// 2. Users with Transactions Above Average
// Buatlah sebuah fungsi getUsersWithAboveAverageTransactions yang mengembalikan
//  daftar pengguna yang memiliki jumlah transaksi deposit di atas rata-rata seluruh transaksi deposit yang ada di sistem.

export const SumDeposit = (data: IDataUsers[]) => {
  const totalDeposit = data.reduce((acc, call) => {
    const userDeposit = call.transactions
      .filter((trans) => trans.type === DEPOSIT)
      .reduce((acc, call) => acc + call.amount, 0);

    return acc + userDeposit;
  }, 0);

  const totalTransaction = data.reduce(
    (acc, call) =>
      acc + call.transactions.filter((trans) => trans.type === DEPOSIT).length,
    0
  );

  return totalTransaction > 0 ? totalDeposit / totalTransaction : 0;
};

export const FuncGetUsersWithAboveAverageTransactions = (
  data: IDataUsers[]
) => {
  const sumAmountPerson = SumDeposit(DataUsers);

  return data.filter((user) => {
    const userTotalDeposit = user.transactions
      .filter((trans) => trans.type === DEPOSIT)
      .reduce((acc, call) => acc + call.amount, 0);

    return userTotalDeposit > sumAmountPerson;
  });
};

// 3. Sort Users by Activity and Age
// Buatlah sebuah fungsi sortUsersByActivityAndAge yang mengurutkan
//  pengguna berdasarkan status isActive (aktif terlebih dahulu) dan kemudian berdasarkan usia (age) secara menaik.
export const FuncSortUsersByActivityAndAge = (data: IDataUsers[]) => {
  const userActive = data.filter((user) => user.isActive === true);
  const userNonActive = data.filter((user) => user.isActive === false);

  return {
    userActive: userActive.sort((a, b) => a.age - b.age),
    userNonActive: userNonActive.sort((a, b) => a.age - b.age),
  };
};

// 4. Find User with Most Transactions
// Buatlah sebuah fungsi getUserWithMostTransactions yang mengembalikan
//  pengguna yang memiliki jumlah transaksi terbanyak, baik itu deposit maupun withdrawal.

export const FuncGetUserWithMostTransactions = (
  data: IDataUsers[],
  type: "deposit" | "withdrawal"
) => {
  const userMostTransaction = ExampleTotalTransaction(data, type);
  console.log({ userMostTransaction });

  const userWithMost = userMostTransaction.reduce((acc, call) => {
    return call.transactions > acc.transactions ? call : acc;
  });

  return userWithMost;
};

// 6. Top 3 Highest Deposits
// Buatlah sebuah fungsi getTop3HighestDeposits yang
// mengembalikan 3 pengguna dengan total deposit terbesar,
//  diurutkan dari yang terbesar.

export const FuncGetTop3HighestDeposits = (data: IDataUsers[]) => {
  const totalDeposit = ExampleTotalTransaction(data, "deposit");

  const userMostDeposit = [...totalDeposit].sort(
    (a, b) => b.transactions - a.transactions
  );

  return userMostDeposit.slice(0, 3);
};

// 7. Get Transaction History for Active Users
// Buatlah fungsi getTransactionHistoryForActiveUsers yang mengembalikan daftar semua transaksi untuk pengguna yang aktif (isActive: true). Fungsi ini harus mengembalikan array objek yang berisi name dan transactions dari setiap pengguna yang aktif.

export const FuncGetTransactionHistoryForActiveUsers = (data: IDataUsers[]) => {
  const userActive = ExampleCheckActivity(data, true);

  if(!userActive.length) return []

  return userActive.map(({ name, transactions }) => ({ name, transactions }));
};
