interface BtnPrimaryProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export function BtnPrimary({ children, isLoading, ...props }: BtnPrimaryProps) {
  const isDisabled = props.disabled;
  const isDisabledStyles = isDisabled
    ? "opacity-50 cursor-not-allowed"
    : "hover:scale-110 transition-scale duration-300 cursor-pointer";

  return (
    <button
      {...props}
      className={`bg-purple-600 text-white will-change-transform font-semibold px-4 py-2 rounded-md w-fit ${props.className} ${isDisabledStyles}`}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}
