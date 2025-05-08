import { useEffect, useState } from "react";

export function useTwitchAccessTokenHook() {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      setIsLoading(false);
      return;
    }

    const params = new URLSearchParams(hash.substring(1));

    const accessToken = params.get("access_token");
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
