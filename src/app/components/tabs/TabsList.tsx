interface Props {
  children: React.ReactNode;
}

export function TabsList({ children }: Props) {
  return (
    <div className="flex bg-gray-800 rounded-md gap-2 p-1">{children}</div>
  );
}
