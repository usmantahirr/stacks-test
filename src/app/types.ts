export type Transaction = {
  id: string;
  amount: number;
  currency: "EUR";
  reference: string;
  date: string;
  list: "left" | "right";
};
