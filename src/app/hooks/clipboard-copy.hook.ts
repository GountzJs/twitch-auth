import { useEffect, useState } from "react";

export function useClipboardCopyHook() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isError, setIsError] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timer) clearTimeout(timer);

    return () => {
      if (timer) clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerOnCopy = async (value: string) => {
    setIsLoading(true);
    setIsCopied(true);
    try {
      await navigator.clipboard.writeText(value);
      setTimer(
        setTimeout(() => {
          setIsCopied(false);
        }, 1500)
      );
    } catch {
      setIsCopied(false);
      setIsError(true);
      setTimer(
        setTimeout(() => {
          setIsError(false);
        }, 1500)
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isCopied,
    isError,
    handlerOnCopy,
  };
}
