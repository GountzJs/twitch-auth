import { Route, Routes } from "react-router";
import { LoaderPage } from "./components/loader-page";
import { HomePage } from "./pages/pages";
import QrPage from "./pages/qr";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LoaderPage children={<HomePage />} />} />
			<Route path="/qr" element={<LoaderPage children={<QrPage />} />} />
		</Routes>
	);
}

export default App;
