import { BtnCopy } from "@/components/btn-copy";
import QRCode from "react-qr-code";
import { Navigate, useSearchParams } from "react-router";

export default function QrPage() {
	const [searchParams] = useSearchParams();
	const code = searchParams.get("code");

	if (!code) return <Navigate to={"/"} />;

	return (
		<div className="bg-gray-950 flex flex-col items-center justify-center gap-8 min-h-screen p-4 w-full">
			<h1 className="text-white text-center font-bold text-3xl">
				Código de autorización
			</h1>
			<div className="flex items-center justify-center gap-4">
				<p className="text-white w-fit">{code}</p>
				<BtnCopy text={code} />
			</div>
			<div className="bg-white p-2 h-fit w-fit">
				<QRCode value={code} />
			</div>
		</div>
	);
}
