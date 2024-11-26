/* eslint-disable @typescript-eslint/no-unused-vars */
import { twitchScopes } from "@/consts/twitchScopes";
import { Field, Form, Formik } from "formik";
import { AccordionBox } from "../accordion";
import { scopeLabels } from "./scopeLabes";

export function FormLogin() {
	const initialValues = Object.keys(twitchScopes).reduce<
		Record<string, boolean | string>
	>(
		(acc, key) => {
			acc[key] = false;
			return acc;
		},
		{
			clientId: localStorage.getItem("clientId") || "",
		}
	);
	const scopesMaps = Object.entries(twitchScopes).map(([key, value]) => [
		key,
		value,
	]);
	const readerScopes = scopesMaps.filter(([_, value]) =>
		value.includes("read")
	);
	const managerScopes = scopesMaps.filter(([_, value]) =>
		value.includes("manage")
	);
	const editorScopes = scopesMaps.filter(([_, value]) =>
		value.includes("edit")
	);
	const extraScopes = scopesMaps.filter(
		([_, value]) =>
			!value.includes("read") &&
			!value.includes("manage") &&
			!value.includes("edit")
	);

	const getScopeLabel = (scope: keyof typeof scopeLabels) => scopeLabels[scope];

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={({ clientId, ...values }) => {
				localStorage.setItem("clientId", clientId as string);
				const scopesKeys = Object.entries(values)
					.map(([key, value]) => {
						if (value) return key;
					})
					.filter((vl) => vl);
				const scopes = Object.entries(twitchScopes)
					.map(([key, value]) => {
						if (scopesKeys.includes(key)) return value;
					})
					.filter((vl) => vl);
				window.location.href = `
					https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=http://localhost:3000/qr&response_type=code&scope=${scopes.join(
					"+"
				)}
				`;
			}}
		>
			<Form className="flex flex-col items-center gap-10 w-full">
				<div className="flex flex-wrap gap-8 w-[450px] max-w-[80dvw]">
					<Field
						className="bg-transparent outline outline-2 focus:outline-4 outline-neutral-100 py-2 px-6 rounded-md text-neutral-50 placeholder:text-neutral-50 placeholder:opacity-70 placeholder:font-semibold w-full"
						name="clientId"
						placeholder="Cliente ID"
					/>
				</div>
				<AccordionBox
					dropdown={{
						children: "Permisos de lectura",
					}}
					item={{
						children: readerScopes.map(([key, value]) => (
							<div key={key} className="flex gap-2 w-full">
								<Field
									type="checkbox"
									id={key}
									name={key}
									placeholder="Cliente Secreto"
								/>
								<label htmlFor={value} className="text-white font-bold">
									{getScopeLabel(key as keyof typeof scopeLabels)}
								</label>
							</div>
						)),
					}}
					style={{
						width: "450px",
					}}
				/>
				<AccordionBox
					dropdown={{
						children: "Permisos de edición",
					}}
					item={{
						children: editorScopes.map(([key, value]) => (
							<div key={key} className="flex gap-2 w-full">
								<Field
									type="checkbox"
									id={value}
									name={value}
									placeholder="Cliente Secreto"
								/>
								<label htmlFor={value} className="text-white font-bold">
									{getScopeLabel(key as keyof typeof scopeLabels)}
								</label>
							</div>
						)),
					}}
					style={{
						width: "450px",
					}}
				/>
				<AccordionBox
					dropdown={{
						children: "Permisos de administración",
					}}
					item={{
						children: managerScopes.map(([key, value]) => (
							<div key={key} className="flex gap-2 w-full">
								<Field
									type="checkbox"
									id={value}
									name={value}
									placeholder="Cliente Secreto"
								/>
								<label htmlFor={value} className="text-white font-bold">
									{getScopeLabel(key as keyof typeof scopeLabels)}
								</label>
							</div>
						)),
					}}
					style={{
						width: "450px",
					}}
				/>
				<AccordionBox
					dropdown={{
						children: "Permisos adicionales",
					}}
					item={{
						children: extraScopes.map(([key, value]) => (
							<div key={key} className="flex gap-2 w-full">
								<Field
									type="checkbox"
									id={value}
									name={value}
									placeholder="Cliente Secreto"
								/>
								<label htmlFor={value} className="text-white font-bold">
									{getScopeLabel(key as keyof typeof scopeLabels)}
								</label>
							</div>
						)),
					}}
					style={{
						width: "450px",
					}}
				/>
				<button
					type="submit"
					className="bg-violet-800 hover:bg-violet-900 duration-500 text-white font-bold rounded-md px-10 py-2 h-fit w-fit"
				>
					AUTORIZAR
				</button>
			</Form>
		</Formik>
	);
}
