export function ContraButton() {
	return (
		<>
			<div
				className="contra-hire-me-button"
				data-analyticsUserId="324f13ff-36a2-490e-a679-fe1ff9ab2e71"
				data-theme="dark"
				data-username="davidochoa"
			></div>
			<script async src="https://contra.com/static/embed/sdk.js" charSet="utf-8"></script>
		</>
	);
}

export function FiverrButton() {
   return(
   <a href="https://www.fiverr.com/davidochoadev" className="bg-[#eee] flex flex-row justify-center items-center w-[230px] rounded-lg gap-2 h-[52px]">
         <img src="./img/fiverr.webp" alt="fiverr"  className="w-[30px] h-[30px]" loading="lazy" />
      <p className="text-xl font-semibold tracking-wide" >
         Hire Me on Fiverr
      </p>
   </a>)
}

export default { ContraButton, FiverrButton };
