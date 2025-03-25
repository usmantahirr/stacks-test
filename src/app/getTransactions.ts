import { Transaction } from "./types";

export default function getTransactions(): Promise<Transaction[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "tx0",
          amount: 15,
          currency: "EUR",
          reference: "Friday dinner",
          date: "2024-09-15",
          list: "left",
        },
        {
          id: "tx1",
          amount: 1,
          currency: "EUR",
          reference: "Bank fee",
          date: "2024-08-01",
          list: "right",
        },
        {
          id: "tx2",
          amount: 14,
          currency: "EUR",
          reference: "Grocery store",
          date: "2024-08-29",
          list: "right",
        },
        {
          id: "tx3",
          amount: -11,
          currency: "EUR",
          reference: "Account Top-Up",
          date: "2024-09-05",
          list: "right",
        },
        {
          id: "tx4",
          amount: 2,
          currency: "EUR",
          reference: "Theater tickets",
          date: "2024-09-05",
          list: "left",
        },
        {
          id: "tx5",
          amount: -4,
          currency: "EUR",
          reference: "Public transport",
          date: "2024-08-03",
          list: "left",
        },
        {
          id: "tx6",
          amount: -8,
          currency: "EUR",
          reference: "Music subscription",
          date: "2024-09-15",
          list: "right",
        },
        {
          id: "tx7",
          amount: -5,
          currency: "EUR",
          reference: "Plumber services",
          date: "2024-08-03",
          list: "left",
        },
        {
          id: "tx8",
          amount: 3,
          currency: "EUR",
          reference: "Gas station",
          date: "2024-07-21",
          list: "left",
        },
        {
          id: "tx9",
          amount: -1,
          currency: "EUR",
          reference: "Office snacks",
          date: "2024-09-15",
          list: "left",
        },
        {
          id: "tx10",
          amount: -15,
          currency: "EUR",
          reference: "Museum tickets",
          date: "2024-10-19",
          list: "left",
        },
        {
          id: "tx11",
          amount: -1,
          currency: "EUR",
          reference: "Refund",
          date: "2024-08-09",
          list: "right",
        },
        {
          id: "tx12",
          amount: 2,
          currency: "EUR",
          reference: "Coffee",
          date: "2024-12-29",
          list: "right",
        },
      ]);
    }, 3000);
  });
}
