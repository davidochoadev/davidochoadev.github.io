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
		<div className="tranistion-all flex min-h-[300px] flex-row items-center gap-5 rounded-xl bg-gradient-to-tl from-slate-950 via-slate-900 to-[#05604b] p-4 shadow-[inset_4px_4px_10px_rgba(255,255,255,.2)] backdrop-blur-xl duration-300 ease-in-out hover:scale-105 hover:rounded-br-3xl hover:rounded-tl-3xl lg:w-full lg:rounded-3xl lg:rounded-br lg:rounded-tl lg:p-14">
			<div className="w-1/12">
				{currentPage !== 1 ? (
					<button onClick={prevPage} className="p-4 rounded-full bg-gradient-to-tl from-slate-900 to-[#05604b] shadow-md drop-shadow-md transition duration-300 hover:scale-125">
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
					<button className="bg-gradient-to-tl from-slate-950/50 to-[#05604b]/50 p-4 disabled:opacity-40 rounded-full opacity-10 shadow-md drop-shadow-md" disabled>
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
			<div className="grid h-full w-full grid-cols-2 grid-rows-2 place-items-center gap-8">
				{currentRecords.map((item, index) => (
					<div key={index} className="w-[200px] md:w-[250px] lg:w-[400px] md:h-autorounded-xl bg-slate-700/50 p-8 backdrop-blur-md flex justify-center flex-col items-center">
						<img
							src={`https://raw.githubusercontent.com/davidochoadev${item.imageUrl}`}
							alt=""
							height={'100%'}
							width={'100%'}
							className='md:w-[200px] md:h-auto'
						/>
						<p className="text-white">{item.projectName}</p>
					</div>
				))}
			</div>
			<div className="w-1/12">
				{currentPage !== nPages && (
					<button onClick={nextPage} className="p-4 rounded-full bg-gradient-to-tl from-slate-950 to-[#05604b] shadow-md drop-shadow-md transition duration-300 hover:scale-125">
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
	);
}

export default { Works };
