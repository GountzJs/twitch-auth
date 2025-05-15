import { Dots } from "@/components/atoms/dots";
import { useClipboardCopyHook } from "@/hooks/clipboard-copy.hook";
import checkCircleIcon from "@assets/check-circle-icon.svg";
import clipboardIcon from "@assets/clipboard-icon.svg";
import errorIcon from "@assets/error-icon.svg";

interface Props {
  label: string;
  value: string;
}

export function Clipboard({ label, value }: Props) {
  const { isLoading, isCopied, isError, handlerOnCopy } =
    useClipboardCopyHook();

  if (isError)
    return (
      <div className="flex gap-4 w-fit">
        <img
          src={errorIcon}
          width={30}
          height={30}
          loading="lazy"
          alt="Check copy"
        />
        <p className="text-white font-semibold text-xl">
          Hubo un error al copiar
        </p>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex gap-4 w-fit">
        <Dots />
        <p className="text-white font-semibold text-xl">Copiando...</p>
      </div>
    );

  if (isCopied)
    return (
      <div className="flex gap-4 w-fit">
        <img
          src={checkCircleIcon}
          width={30}
          height={30}
          loading="lazy"
          alt="Check copy"
        />
        <p className="text-white font-semibold text-xl">Copiado!</p>
      </div>
    );

  return (
    <button
      type="button"
      className="flex gap-4 w-fit cursor-pointer"
      onClick={() => handlerOnCopy(value)}
    >
      <img
        src={clipboardIcon}
        width={30}
        height={30}
        loading="lazy"
        alt="Clipboard"
      />

      <p className="text-white font-semibold text-xl">{label}</p>
    </button>
  );
}
