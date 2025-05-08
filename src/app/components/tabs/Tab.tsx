interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
}

export function Tab({ children, isActive = false, ...props }: Props) {
  const isActiveStyles = isActive ? "bg-gray-950" : "bg-gray-800";
  const isDisabledStyles = props.disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      {...props}
      type="button"
      className={`rounded-md text-white font-semibold text-center py-2 px-6 text-sm transition-colors duration-300 ${isActiveStyles} ${isDisabledStyles} ${props.className}`.trim()}
    >
      {children}
    </button>
  );
}
