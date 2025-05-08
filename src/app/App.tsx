import { useState } from "react";
import { Tab, TabsBox, TabsList } from "./components/tabs";

enum TabKey {
  Generate = "generate",
  Qr = "qr",
}

export function App() {
  const [activeTab, setActiveTab] = useState<TabKey>(TabKey.Generate);
  const [token, setToken] = useState<string | null>(null);

  const changeTab = (key: TabKey) => setActiveTab(key);

  return (
    <div className="bg-gray-800 flex items-center justify-center h-screen w-screen">
      <main className="flex flex-col items-center gap-4 rounded-md px-6 py-4 shadow-lg bg-gray-900">
        <h1 className="text-3xl font-extrabold text-white w-full">
          Bienvenido a Twitch Auth
        </h1>
        <p className="text-lg font-semibold text-gray-300 w-full">
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
          {activeTab === TabKey.Generate && <div>Generar nuevo Token</div>}
          {activeTab === TabKey.Qr && <div>Ver Token QR</div>}
        </TabsBox>
      </main>
    </div>
  );
}
