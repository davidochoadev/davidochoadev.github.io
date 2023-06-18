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
			<div className='py-4'>
				<h2 className="text-center font-mono text-2xl text-white md:text-3xl py-4 lg:py-2">
					My Code & Design Collection 
				</h2>
				<p className='text-slate-400 font-mono text-center lg:py-4 lg:px-32'>
				Explore a variety of resources including components, landing pages, themes, and layouts. Click on the items below to access their respective source code repositories
				</p>
			</div>
			<div className="flex h-full w-full flex-col items-center justify-center gap-5 md:flex-row p-2">
				<div className="hidden  w-1/12 md:block">
					{currentPage !== 1 ? (
						<button
							onClick={prevPage}
							className="rounded-full bg-gradient-to-tl from-slate-900 to-[#05604b] p-4 shadow-md drop-shadow-md transition duration-300 hover:scale-125"
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
							className="md:h-autorounded-xl shadow-md drop-shadow-md group flex w-full cursor-pointer flex-col items-center justify-center rounded-xl bg-slate-700/50 p-8 backdrop-blur-md transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-600/50 md:w-full lg:w-full"
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
						</a>
					))}
				</div>
				<div className="hidden w-1/12 md:block">
					{currentPage !== nPages ? (
						<button
							onClick={nextPage}
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
				<div className="w-full md:hidden flex flex-row justify-center gap-4 items-center">
					{currentPage !== 1 ? (
						<button
							onClick={prevPage}
							className="rounded-full bg-gradient-to-tl from-slate-900 to-[#05604b] p-4 shadow-md drop-shadow-md transition duration-300 hover:scale-125"
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
					<p className='text-center text-slate-500'>{currentPage} of {nPages}</p>
					{currentPage !== nPages ? (
						<button
							onClick={nextPage}
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
