import { cn } from "@/lib/utils";
import { Transaction } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function TransactionItem({
  transaction,
  onClick,
  isSelected,
}: {
  transaction: Transaction;
  onClick: (id: string) => void;
  isSelected: boolean;
}) {
  return (
    <Card
      className={cn(
        "hover:bg-accent transition-colors cursor-pointer",
        isSelected && "border-primary bg-accent"
      )}
      onClick={() => onClick(transaction.id)}
    >
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <p className="font-medium">{transaction.reference}</p>
          <p className="text-sm text-muted-foreground">{transaction.date}</p>
          <p className="font-semibold mt-1">
            {transaction.amount} {transaction.currency}
          </p>
        </div>
        {isSelected && (
          <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
            <Check className="h-4 w-4 text-primary-foreground" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
