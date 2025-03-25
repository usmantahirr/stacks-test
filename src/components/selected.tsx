const Selected = ({ count, sum }: { count: number; sum: number }) => {
  return (
    <div className="mb-6 p-4 bg-muted rounded-sm">
      <p>
        <strong>Selected:</strong> {count}
      </p>
      <p>
        <strong>Sum:</strong> {sum}
      </p>
    </div>
  );
};

export default Selected;
