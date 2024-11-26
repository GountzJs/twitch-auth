import { FormLogin } from "@/components/form-login";

export default function HomePage() {
	return (
		<div className="bg-gray-950 flex flex-col items-center justify-center gap-8 p-14 min-h-screen w-full">
			<img src="/twitch-logo.svg" width={80} height={80} alt="Twitch logo" />
			<h1 className="text-white text-3xl font-extrabold">
				Generar código de autorización
			</h1>
			<FormLogin />
		</div>
	);
}
