export function ContraButton() {
	return (
		<>
			<div
				className="contra-hire-me-button transition duration-300 hover:scale-105"
				data-analyticsUserId="324f13ff-36a2-490e-a679-fe1ff9ab2e71"
				data-theme="dark"
				data-username="davidochoa"
			></div>
			<script async src="https://contra.com/static/embed/sdk.js" charSet="utf-8"></script>
		</>
	);
}

export function FiverrButton() {
	return (
		<a
			href="https://www.fiverr.com/davidochoadev"
			className="flex h-[52px] w-[230px] flex-row items-center justify-center gap-2 rounded-lg bg-[#eee] transition duration-300 hover:scale-105"
		>
			<img src="./img/fiverr.webp" alt="fiverr" className="h-[30px] w-[30px]" loading="lazy" />
			<p className="text-xl font-semibold tracking-wide">Hire Me on Fiverr</p>
		</a>
	);
}

export default { ContraButton, FiverrButton };
