"use client";

import { useQuery } from "@tanstack/react-query";
import TransactionItem from "./components/TransactionItem";
import { useEffect, useState } from "react";

import getTransactions from "./getTransactions";
import { Transaction } from "./types";
import Loader from "./components/loader";
import Selected from "./components/selected";
export default function Home() {
  const { isPending, data } = useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  const [transactions, setTransactions] = useState<Transaction[] | undefined>();

  useEffect(() => {
    setTransactions(data);
  }, [data]);

  const [leftSelectedIds, setLeftSelectedIds] = useState<string[]>([]);
  const [rightSelectedIds, setRightSelectedIds] = useState<string[]>([]);

  const leftList = transactions?.filter(
    (transaction) => transaction.list === "left"
  );
  const rightList = transactions?.filter(
    (transaction) => transaction.list === "right"
  );

  const leftSelectedSum =
    leftList
      ?.filter((transaction) => leftSelectedIds.includes(transaction.id))
      .reduce((sum, transaction) => sum + transaction.amount, 0) || 0;

  const rightSelectedSum =
    rightList
      ?.filter((transaction) => rightSelectedIds.includes(transaction.id))
      .reduce((sum, transaction) => sum + transaction.amount, 0) || 0;

  const canRemoveSelected =
    leftSelectedSum === rightSelectedSum && leftSelectedSum !== 0;

  const handleLeftTransactionClick = (id: string) => {
    setLeftSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };

  const handleRightTransactionClick = (id: string) => {
    setRightSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };

  const handleRemoveSelected = () => {
    if (!canRemoveSelected || !transactions) return;

    const filteredTransactions = transactions.filter(
      (transaction) =>
        !(
          leftSelectedIds.includes(transaction.id) ||
          rightSelectedIds.includes(transaction.id)
        )
    );

    setTransactions(filteredTransactions);

    setLeftSelectedIds([]);
    setRightSelectedIds([]);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Transaction Management</h1>
        <button
          onClick={handleRemoveSelected}
          disabled={!canRemoveSelected}
          className={`px-4 py-2 rounded-md ${
            canRemoveSelected
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
        >
          Remove Selected Items
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left List */}
        <div className="border rounded-sm shadow-sm p-4">
          <h2 className="text-xl font-semibold mb-4">Left Transactions</h2>
          <Selected count={leftSelectedIds.length} sum={leftSelectedSum} />
          <div className="space-y-3">
            {isPending ? (
              <Loader />
            ) : (
              <>
                {leftList && leftList.length > 0 ? (
                  leftList?.map((transaction) => (
                    <TransactionItem
                      key={transaction.id}
                      transaction={transaction}
                      onClick={handleLeftTransactionClick}
                      isSelected={leftSelectedIds.includes(transaction.id)}
                    />
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-4">
                    No transactions in this list
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        {/* Right List */}
        <div className="border rounded-sm shadow-sm p-4">
          <h2 className="text-xl font-semibold mb-4">Right Transactions</h2>
          <Selected count={rightSelectedIds.length} sum={rightSelectedSum} />
          <div className="space-y-3">
            {isPending ? (
              <Loader />
            ) : (
              <>
                {rightList && rightList.length > 0 ? (
                  rightList?.map((transaction) => (
                    <TransactionItem
                      key={transaction.id}
                      transaction={transaction}
                      onClick={handleRightTransactionClick}
                      isSelected={rightSelectedIds.includes(transaction.id)}
                    />
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-4">
                    No transactions in this list
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
