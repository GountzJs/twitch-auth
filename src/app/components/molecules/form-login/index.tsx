import { BtnPrimary } from "@/components/atoms/btn-primary";
import { useUser } from "@/contexts/user.context";
import { useTwitchOAuth } from "@/hooks/twitch-oauth.hook.ts";
import twitchLogo from "@assets/twitch.svg";
import { useState } from "react";

interface FormProps {
  clientId: string;
  scopes: string[];
}

interface FormLoginProps {
  isLoadingToken: boolean;
}

export function FormLogin({ isLoadingToken }: FormLoginProps) {
  const { login, isLoading } = useTwitchOAuth();
  const { setUser, getUser } = useUser();
  const user = getUser();
  const [form, setForm] = useState<FormProps>({
    clientId: user?.clientId || "",
    scopes: [
      "chat:read",
      "chat:edit",
      "channel:moderate",
      "whispers:read",
      "whispers:edit",
    ],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { scopes, clientId } = form;
    setUser({ clientId });
    login(clientId, scopes);
  };

  return (
    <form
      className="flex flex-col items-center gap-4 w-full"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="text-white outline-white outline-2 rounded-md py-2 px-6 w-full"
        placeholder="Ingrese su Client ID"
        name="clientId"
        value={form.clientId}
        onChange={handleChange}
        autoComplete="off"
        pattern="^[a-z0-9]{30}$"
      />

      <BtnPrimary
        type="submit"
        className="flex items-center gap-2"
        disabled={isLoadingToken || isLoading}
        isLoading={isLoadingToken || isLoading}
      >
        <img src={twitchLogo} alt="Twitch Logo" className="w-6 h-6" />
        Iniciar sesión con Twitch
      </BtnPrimary>
    </form>
  );
}
