import { useEffect, useState } from "react";

export function useTwitchAccessTokenHook() {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (!params.size || params.size === 0) {
      setIsLoading(false);
      return;
    }

    const accessToken = params.get("code");
    const oauthError = params.get("error");

    if (accessToken) {
      setToken(accessToken);
    } else if (oauthError) {
      setError(oauthError);
    }

    setIsLoading(false);
  }, []);

  return { token, error, isLoading };
}
