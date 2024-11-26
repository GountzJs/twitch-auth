import { Suspense } from "react";

export function LoaderPage({ children }: { children: React.ReactNode }) {
	return <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>;
}
