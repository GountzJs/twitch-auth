import { useState } from "react";

export function useTwitchOAuth() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = (clientId: string, scopes: string[]) => {
    setIsLoading(true);
    const scopeParam = encodeURIComponent(scopes.join(" "));
    const uriRedirect = window.location.origin;
    console.log(uriRedirect);
    const authUrl = `https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
      uriRedirect
    )}&scope=${scopeParam}`;

    window.location.href = authUrl;
    setIsLoading(false);
  };

  return { isLoading, login };
}
