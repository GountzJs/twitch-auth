import { useState } from "react";

type UseTwitchOAuthProps = {
  clientId: string;
  scopes: string[];
  state?: string;
};

export function useTwitchOAuth({
  clientId,
  scopes,
  state = crypto.randomUUID(),
}: UseTwitchOAuthProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = () => {
    setIsLoading(true);
    const scopeParam = encodeURIComponent(scopes.join(" "));
    const uriRedirect = window.location.origin;
    const authUrl = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=${clientId}&redirect_uri=${encodeURIComponent(
      uriRedirect
    )}&scope=${scopeParam}&state=${state}`;

    window.location.href = authUrl;
    setIsLoading(false);
  };

  return { loading: isLoading, login };
}
