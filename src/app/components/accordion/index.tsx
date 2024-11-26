import { useState } from "react";

interface Item extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

interface Dropdown extends React.HTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	dropdown: Dropdown;
	item: Item;
}

export function AccordionBox({
	dropdown: { children: dropdownChildren, ...propsDropdown },
	item: { children: itemChildren, ...propsItem },
	...props
}: Props) {
	const [open, setOpen] = useState(false);

	return (
		<div
			{...props}
			className={`flex flex-col outline outline-2 outline-gray-50 p-4 rounded-lg w-full ${
				props?.className || ""
			}`}
		>
			<button
				type="button"
				{...propsDropdown}
				className={`flex items-center text-white font-bold text-lg justify-between w-full ${
					propsDropdown?.className || ""
				}`}
				onClick={() => setOpen(!open)}
			>
				{dropdownChildren}
				<span className="text-white">{open ? "▲" : "▼"}</span>
			</button>
			{open && (
				<div
					{...propsItem}
					className={`p-4 w-full ${propsItem?.className || ""}`}
				>
					{itemChildren}
				</div>
			)}
		</div>
	);
}
