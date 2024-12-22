import { DataUsers } from "./data.js";
import { FuncGetTransactionHistoryForActiveUsers } from "./quest.js";
const renderDataUser = (() => {
    // const bodyDataUser = document.getElementById("dataUser");
    // const elemen = DataUsers.map(
    //   (user) =>
    //     `
    //       <h2>${user.name}</h2>
    //       `
    // ).join("");
    // if (bodyDataUser) {
    //   (bodyDataUser.innerHTML = elemen);
    // }
    // console.log({soal1: FuncGetTotalBalancePerUser(DataUsers, 1)})
    // console.log({soal2: FuncGetUsersWithAboveAverageTransactions(DataUsers)})
    // console.log({soal3: FuncSortUsersByActivityAndAge(DataUsers)})
    // console.log({
    //   CheckDeposit: FuncGetUserWithMostTransactions(DataUsers, "deposit"),
    // });
    // console.log({
    //   CheckWithdrawal: FuncGetUserWithMostTransactions(
    //     DataUsers,
    //     "withdrawal"
    //   ),
    // });
    // console.log({checkUrutan: FuncGetTop3HighestDeposits(DataUsers)})
    console.log({ ListTransactionUserOnActive: FuncGetTransactionHistoryForActiveUsers(DataUsers) });
})();
