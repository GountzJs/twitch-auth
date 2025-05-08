import { useState } from "react";
import { Tab, TabsBox, TabsList } from "./components/tabs";

export function App() {
  const [activeTab, setActiveTab] = useState<"generate" | "qr">("generate");
  const [token, setToken] = useState<string | null>(null);

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
              isActive={activeTab === "generate"}
              className="w-48"
              onClick={() => setActiveTab("generate")}
            >
              Generar nuevo Token
            </Tab>
            <Tab
              isActive={activeTab === "qr"}
              className="w-48"
              disabled={!token}
              onClick={() => setActiveTab("qr")}
            >
              Ver Token QR
            </Tab>
          </TabsList>
          {activeTab === "generate" && <div>Generar nuevo Token</div>}
          {activeTab === "qr" && <div>Ver Token QR</div>}
        </TabsBox>
      </main>
    </div>
  );
}
