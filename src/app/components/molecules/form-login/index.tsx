import { useState } from "react";
import twitchLogo from "../../../../assets/twitch.svg";
import { useUser } from "../../../contexts/user.context";
import { BtnPrimary } from "../../atoms/btn-primary";

interface FormProps {
  clientId: string;
  username: string;
  scopes: string[];
}

interface FormLoginProps {
  isLoadingToken: boolean;
}

export function FormLogin({ isLoadingToken }: FormLoginProps) {
  const { user } = useUser();
  const [form, setForm] = useState<FormProps>({
    clientId: user?.clientId || "",
    username: user?.username || "",
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

  return (
    <form className="flex flex-col items-center gap-4 w-full">
      <input
        type="text"
        className="text-white outline-white outline-2 rounded-md py-2 px-6 w-full"
        placeholder="Ingrese su Client ID"
        name="clientId"
        value={form.clientId}
        onChange={handleChange}
        autoComplete="off"
      />
      <input
        type="text"
        className="text-white outline-white outline-2 rounded-md py-2 px-6 w-full"
        placeholder="Ingrese su usuario de twitch"
        name="username"
        value={form.username}
        onChange={handleChange}
        autoComplete="off"
      />
      <BtnPrimary
        type="button"
        className="flex items-center gap-2"
        disabled={isLoadingToken}
        isLoading={isLoadingToken}
      >
        <img src={twitchLogo} alt="Twitch Logo" className="w-6 h-6" />
        Iniciar sesión con Twitch
      </BtnPrimary>
    </form>
  );
}
