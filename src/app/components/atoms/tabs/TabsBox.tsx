interface Props {
  children: React.ReactNode;
}

export function TabsBox({ children }: Props) {
  return <div className="flex flex-col gap-6 w-fit">{children}</div>;
}
