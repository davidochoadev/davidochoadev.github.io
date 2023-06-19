import { useState } from 'react';
import requestedPosts from './projects.json';

export function Works() {
	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage] = useState(4);

	const projects = requestedPosts.projects; // circa una 30 di elementi da iterare
	const indexOfLastRecord = currentPage * recordsPerPage; // la posizione dell'ultimo elemento = pagina corrente * elementi per pagina(4)
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage; // la posizione del primo elemento = posizione dell'ultimo lemento - elementi per pagina(4)
	const currentRecords = projects.slice(indexOfFirstRecord, indexOfLastRecord); // elementi correnti
	const nPages = Math.ceil(projects.length / recordsPerPage);

	const nextPage = () => {
		if (currentPage !== nPages) setCurrentPage(currentPage + 1);
	};
	const prevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};

	return (
		<div className="flex min-h-[300px] w-full flex-col items-center gap-5 rounded-xl bg-gradient-to-tl from-slate-950 via-slate-900 to-[#05604b] p-4 shadow-[inset_4px_4px_10px_rgba(255,255,255,.2)] backdrop-blur-xl transition-all duration-300 ease-in-out hover:rounded-br-3xl hover:rounded-tl-3xl lg:rounded-3xl lg:rounded-br lg:rounded-tl lg:p-14">
			<div className="py-4">
				<h2 className="py-4 text-center font-mono text-2xl text-white md:text-3xl lg:py-2">
					My Code & Design Collection
				</h2>
				<p className="text-center font-mono text-slate-400 lg:px-32 lg:py-4">
					Explore a variety of resources including components, landing pages, themes, and layouts.
					Click on the items below to access their respective source code repositories
				</p>
			</div>
			<div className="flex h-full w-full flex-col items-center justify-center gap-5 p-2 md:flex-row">
				<div className="hidden  w-1/12 md:flex justify-start">
					{currentPage !== 1 ? (
						<button
							onClick={prevPage}
							className="rounded-full bg-gradient-to-tl from-slate-900 to-[#05604b] p-4 shadow-md drop-shadow-md transition duration-300 hover:scale-125"
							aria-label="Previous Page"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="white"
								className="bi bi-chevron-left"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
								/>
							</svg>
						</button>
					) : (
						<button
							className="rounded-full bg-gradient-to-tl from-slate-950/50 to-[#05604b]/50 p-4 opacity-10 shadow-md drop-shadow-md disabled:opacity-40"
							aria-label="Disabled Previous Page"
							disabled
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="white"
								className="bi bi-chevron-left"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
								/>
							</svg>
						</button>
					)}
				</div>
				<div className="grid h-full w-full grid-cols-1 grid-rows-4 place-items-center gap-8 md:grid-cols-2 md:grid-rows-2">
					{currentRecords.map((item, index) => (
						<a
							key={index}
							className="md:h-autorounded-xl group flex w-full cursor-pointer flex-col items-center justify-center rounded-xl bg-slate-700/50 p-8 shadow-md drop-shadow-md backdrop-blur-md transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-600/50 md:w-full lg:w-full"
							href={item.link}
							target="_blank"
						>
							<img
								src={`https://raw.githubusercontent.com/davidochoadev${item.imageUrl}`}
								alt=""
								height={'100%'}
								width={'100%'}
								className="rounded-lg shadow-lg drop-shadow-lg md:h-auto md:w-[200px] lg:w-[400px]"
							/>
							<p className="pt-6 text-center text-xs text-slate-500 transition duration-300 ease-in-out group-hover:text-slate-300 lg:text-base">
								{item.title}
							</p>
							<div className="flex flex-row items-center justify-center gap-2 pt-4 lg:gap-3">
								{item.tools.map((tool, index) => {
									switch (tool) {
										case 'HTML5':
											return (
												<div key={index}>
													<svg
														aria-hidden="true"
														focusable="false"
														viewBox="0 0 32 32"
														fill="currentColor"
														height="38px"
														width="38px"
													>
														<path
															className="fill-slate-500"
															d="M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172H4.664zm4.286 5.5l-.068-.763h7.107v2.842h-4.005l.259 2.911h3.746v2.842H9.649L8.951 8.91zm13.567 5.754l-.667 7.483-.043.48-5.822 1.616-5.814-1.616-.398-4.463h2.849l.202 2.267 3.163.854 3.165-.856.329-3.686h-3.485v-2.842h6.587l-.069.763zm.514-5.754l-.129 1.441-.057.639H16V8.149h7.1l-.068.762z"
														/>
													</svg>
												</div>
											);
										case 'CSS3':
											return (
												<div key={index}>
													<svg
														aria-hidden="true"
														focusable="false"
														viewBox="0 0 32 32"
														className="fill-slate-500"
														height="38px"
														width="38px"
													>
														<path
															className="fill-slate-500"
															d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
														/>
													</svg>
												</div>
											);
										case 'Astro':
											return (
												<div key={index}>
													<svg
														aria-hidden="true"
														focusable="false"
														viewBox="0 0 24 24"
														className="w-8 fill-slate-500"
														astro-icon="simple-icons:astro"
													>
														<path d="M16.074 16.86c-.72.616-2.157 1.035-3.812 1.035-2.032 0-3.735-.632-4.187-1.483-.161.488-.198 1.046-.198 1.402 0 0-.106 1.75 1.111 2.968 0-.632.513-1.145 1.145-1.145 1.083 0 1.082.945 1.081 1.712v.069c0 1.164.711 2.161 1.723 2.582a2.347 2.347 0 0 1-.236-1.029c0-1.11.652-1.523 1.41-2.003.602-.383 1.272-.807 1.733-1.66a3.129 3.129 0 0 0 .378-1.494 3.14 3.14 0 0 0-.148-.954zM15.551.6c.196.244.296.572.496 1.229l4.368 14.347a18.18 18.18 0 0 0-5.222-1.768L12.35 4.8a.37.37 0 0 0-.71.002l-2.81 9.603a18.175 18.175 0 0 0-5.245 1.771L7.974 1.827c.2-.656.3-.984.497-1.227a1.613 1.613 0 0 1 .654-.484C9.415 0 9.757 0 10.443 0h3.135c.686 0 1.03 0 1.32.117A1.614 1.614 0 0 1 15.55.6z"></path>
													</svg>
												</div>
											);
										case 'React':
											return (
												<div key={index}>
													<svg
														aria-hidden="true"
														focusable="false"
														viewBox="0 0 512 512"
														height="32px"
														width="32px"
														className="fill-slate-500"
													>
														<path d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 00-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 00-64.18-10.16 481.27 481.27 0 00-40.57-50.75q5.38-5.22 11.02-10.15zM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 01-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76zM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0116.12 42.32 434.44 434.44 0 01-44.79 7.65q7.62-12.09 14.75-24.48zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 01-15.37 41.39zm-98.24-107.45a439.75 439.75 0 0128.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18zM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 00201 160.51a499.12 499.12 0 00-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0023.4 60.75 502.46 502.46 0 00-23.69 61.58zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0064.69 9.39 501.2 501.2 0 0041.2 51c-2.98 2.93-6.03 5.75-9.14 8.48zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 01-28.2 34.74zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0040.23-51.2 477.84 477.84 0 0065-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 00-24.31-60.94 481.52 481.52 0 0023.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52z"></path>
														<path d="M256 298.55a43 43 0 10-42.86-43 42.91 42.91 0 0042.86 43z"></path>
													</svg>
												</div>
											);
										case 'TypeScript':
											return (
												<div key={index}>
													<svg
														aria-hidden="true"
														focusable="false"
														width="32px"
														viewBox="0 0 400 400"
														id="Layer_1"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path className="fill-slate-500" d="M0 200V0h400v400H0"></path>
														<path
															className="fill-slate-800"
															d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
														></path>
													</svg>
												</div>
											);
										case 'JavaScript':
											return (
												<div key={index}>
													<svg
														aria-hidden="true"
														focusable="false"
														viewBox="0 0 24 24"
														className="w-8 fill-slate-500"
														height="32px"
														width="32px"
													>
														<path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
													</svg>
												</div>
											);
										case 'TailwindCSS':
											return (
												<div key={index}>
													<svg
														aria-hidden="true"
														focusable="false"
														viewBox="0 0 24 24"
														className="w-8 fill-slate-500"
														astro-icon="simple-icons:tailwindcss"
													>
														<path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"></path>
													</svg>
												</div>
											);
										default:
											return null;
									}
								})}
							</div>
						</a>
					))}
				</div>
				<div className="hidden w-1/12 md:flex justify-end">
					{currentPage !== nPages ? (
						<button
							onClick={nextPage}
							className="rounded-full bg-gradient-to-tl from-slate-950 to-[#05604b] p-4 shadow-md drop-shadow-md transition duration-300 hover:scale-125"
							aria-label="Next Page"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="white"
								className="bi bi-chevron-right"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
					) : (
						<button
							className="rounded-full bg-gradient-to-tl from-slate-950/50 to-[#05604b]/50 p-4 opacity-10 shadow-md drop-shadow-md disabled:opacity-40"
							aria-label="Disabled next page"
							disabled
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="white"
								className="bi bi-chevron-right"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
					)}
				</div>
				<div className="flex w-full flex-row items-center justify-center gap-4 md:hidden">
					{currentPage !== 1 ? (
						<button
							onClick={prevPage}
							className="rounded-full bg-gradient-to-tl from-slate-900 to-[#05604b] p-4 shadow-md drop-shadow-md transition duration-300 hover:scale-125"
							aria-label="Previous Page"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="white"
								className="bi bi-chevron-left"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
								/>
							</svg>
						</button>
					) : (
						<button
							className="rounded-full bg-gradient-to-tl from-slate-950/50 to-[#05604b]/50 p-4 opacity-10 shadow-md drop-shadow-md disabled:opacity-40"
							aria-label="Disabled Previous Page"
							disabled
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="white"
								className="bi bi-chevron-left"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
								/>
							</svg>
						</button>
					)}
					<p className="text-center text-slate-500">
						{currentPage} of {nPages}
					</p>
					{currentPage !== nPages ? (
						<button
							onClick={nextPage}
							aria-label="Next Page"
							className="rounded-full bg-gradient-to-tl from-slate-950 to-[#05604b] p-4 shadow-md drop-shadow-md transition duration-300 hover:scale-125"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="white"
								className="bi bi-chevron-right"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
					) : (
						<button
							className="rounded-full bg-gradient-to-tl from-slate-950/50 to-[#05604b]/50 p-4 opacity-10 shadow-md drop-shadow-md disabled:opacity-40"
							aria-label="Disabled Next Page"
							disabled
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="white"
								className="bi bi-chevron-right"
								viewBox="0 0 16 16"
							>
								<path
									fillRule="evenodd"
									d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default { Works };
