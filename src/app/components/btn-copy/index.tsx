import { useState } from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
	text: string;
}

export function BtnCopy({ text }: Props) {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const handleClipboard = () => {
		setIsLoading(true);
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setIsSuccess(true);
				setTimeout(() => setIsSuccess(false), 1500);
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<button
			type="button"
			disabled={isLoading || isSuccess}
			onClick={handleClipboard}
		>
			{isSuccess ? (
				<img
					src="/double-check.svg"
					width={30}
					height={30}
					alt="Icon doble check"
				/>
			) : (
				<img
					src="/copy-to-clipboard.svg"
					width={30}
					height={30}
					alt="Clip to board"
				/>
			)}
		</button>
	);
}
