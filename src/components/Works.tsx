import { useState } from 'react';
import requestedPosts from './projects.json';

interface PaginationProps {
	currentPage: number;
	nPages: number;
	setCurrentPage: (page: number) => void;
}

function Pagination({ currentPage, nPages, setCurrentPage }: PaginationProps) {
	const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
	const nextPage = () => {
		if (currentPage !== nPages) setCurrentPage(currentPage + 1);
	};
	const prevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};
	return (
		<nav className="flex w-full justify-center">
			<ul className="flex flex-row gap-2 self-center">
				<li className="bg-slate-400 p-2">
					<a className="page-link" onClick={prevPage} href="#">
						Previous
					</a>
				</li>
				{pageNumbers.map((pgNumber) => (
					<li key={pgNumber} className={`page-item ${currentPage == pgNumber ? 'active' : ''} `}>
						<a onClick={() => setCurrentPage(pgNumber)} className="page-link" href="#">
							{pgNumber}
						</a>
					</li>
				))}
				<li className="bg-slate-400 p-2">
					<a className="page-link" onClick={nextPage} href="#">
						Next
					</a>
				</li>
			</ul>
		</nav>
	);
}
export function Works() {
	const [currentPage, setCurrentPage] = useState(1);
	const [recordsPerPage] = useState(4);

	const projects = requestedPosts.projects; // circa una 30 di elementi da iterare
	const indexOfLastRecord = currentPage * recordsPerPage; // la posizione dell'ultimo elemento = pagina corrente * elementi per pagina(4)
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage; // la posizione del primo elemento = posizione dell'ultimo lemento - elementi per pagina(4)
	const currentRecords = projects.slice(indexOfFirstRecord, indexOfLastRecord); // elementi correnti
	const nPages = Math.ceil(projects.length / recordsPerPage);

	const getRangeOfItemsToShow = (pageNumber: number) => {
		const startIndex = (pageNumber - 1) * recordsPerPage;
		const endIndex = startIndex + recordsPerPage;

		return projects.slice(startIndex, endIndex);
	};

	const nextPage = () => {
		if (currentPage !== nPages) setCurrentPage(currentPage + 1);
	};
	const prevPage = () => {
		if (currentPage !== 1) setCurrentPage(currentPage - 1);
	};

	return (
		<div className="tranistion-all flex min-h-[300px] flex-row flex-wrap items-center gap-5 rounded-xl bg-gradient-to-tl from-slate-950 via-slate-900 to-[#05604b] p-4 shadow-[inset_4px_4px_10px_rgba(255,255,255,.2)] backdrop-blur-xl duration-300 ease-in-out hover:scale-105 hover:rounded-br-3xl hover:rounded-tl-3xl lg:w-2/3 lg:max-w-[830px] lg:rounded-3xl lg:rounded-br lg:rounded-tl lg:p-14">
         <div>
            {currentPage !== 1 ? ( 
               <button onClick={prevPage} className='p-2 bg-slate-300 '>
                  Previous
               </button>) : (
               <button className='p-2 bg-slate-300 disabled:opacity-50' disabled>
                  Previous
               </button>
               )
            }
         </div>
         <div className='flex-grow lg:grid lg:grid-cols-2 lg:grid-rows-2'>
            {currentRecords.map((item, index) => (
               <div key={index}>
                  <img src={`https://raw.githubusercontent.com/davidochoadev${item.imageUrl}`} alt="" height={'200px'} width={'200px'}/>
                  <p className='text-white'>{item.projectName}</p>
               </div>
            ))}
         </div>
         <div>
         {currentPage !== nPages &&
            <button onClick={nextPage} className='p-2 bg-slate-300'>
               Next
            </button>
         }
         </div>
		</div>
	);
}

export default { Works };
