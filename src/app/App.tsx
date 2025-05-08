import { useState } from "react";
import { Tab, TabsBox, TabsList } from "./components/atoms/tabs";
import { FormLogin } from "./components/molecules/form-login";
import { useTwitchAccessTokenHook } from "./hooks/get-token-twitch.hook";

enum TabKey {
  Generate = "generate",
  Qr = "qr",
}

export function App() {
  const [activeTab, setActiveTab] = useState<TabKey>(TabKey.Generate);
  const { token, isLoading: isLoadingToken } = useTwitchAccessTokenHook();

  const changeTab = (key: TabKey) => setActiveTab(key);

  return (
    <div className="bg-gray-800 flex items-center justify-center h-screen w-screen">
      <main className="flex flex-col items-center gap-4 rounded-md p-8 shadow-lg bg-gray-900">
        <h1 className="text-3xl font-extrabold text-white flex items-center gap-6 w-full">
          Bienvenido a Twitch Auth
        </h1>
        <p className="text-lg font-semibold text-center text-gray-300 w-full">
          Genera y visualiza tu token de twitch
        </p>
        <TabsBox>
          <TabsList>
            <Tab
              isActive={activeTab === TabKey.Generate}
              className="w-48"
              onClick={() => changeTab(TabKey.Generate)}
            >
              Generar nuevo Token
            </Tab>
            <Tab
              isActive={activeTab === TabKey.Qr}
              className="w-48"
              disabled={!token}
              onClick={() => changeTab(TabKey.Qr)}
            >
              Ver Token QR
            </Tab>
          </TabsList>
          {activeTab === TabKey.Generate && (
            <div className="flex flex-col items-center gap-6 w-full max-w-96">
              <p className="text-lg font-semibold text-center text-gray-200">
                Haz clic en el botón para iniciar sesión con Twitch y generar un
                token
              </p>
              <FormLogin isLoadingToken={isLoadingToken} />
            </div>
          )}
          {activeTab === TabKey.Qr && <div>Ver Token QR</div>}
        </TabsBox>
      </main>
    </div>
  );
}
