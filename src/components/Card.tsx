import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";

export function UserCard() {
	return (
		<div className="lg:max-w-[800px] min-h-[300px] flex flex-row flex-wrap items-center gap-5 rounded-xl bg-gradient-to-tl from-slate-950 via-slate-900 to-[#05604b] p-4 backdrop-blur-xl lg:w-2/3 lg:rounded-3xl lg:rounded-br lg:rounded-tl lg:p-14">
			<img src="./img/profile.webp" width={'55px'} height={'55px'} alt="David Ochoa drinking coffee" className="w-14 rounded-full" />
			<div className="flex flex-col md:flex-grow">
				<h3 className="text-md md:text-lg text-white">Hi, I'm David Ochoa. 👋</h3>
				<h4 className="text-xs md:text-sm text-slate-500">Junior Web Developer & Web Designer</h4>
			</div>
			<h1 className="py-2 font-mono text-3xl text-white lg:py-8 lg:text-5xl md:text-5xl">
				Driven to design and develop websites.
			</h1>
			<p className="text-slate-600 md:text-xl lg:text-2xl">
				Fueled by a deep passion for constant learning, I am always seeking new knowledge and skills
				to enhance my abilities.
			</p>
		</div>
	);
}

export function MemojiCard() {
   const ref = useRef<HTMLDivElement>(null); // Specify the type of the ref
   const ref2 = useRef<HTMLImageElement>(null);

   useAnimationFrame((t) => {
     const y = (1 + Math.sin(t / 1000)) * -20;
     (ref.current as HTMLElement).style.transform = `translateY(${y}px)`; // Use type assertion
   });

   useAnimationFrame((t) => {
      const y = (1 + Math.sin(t / 1000)) * -10;
      (ref2.current as HTMLElement).style.transform = `translateY(${y}px)`; // Use type assertion
    });
    
	return (
		<div className="flex min-h-[400px] lg:max-w-[400px] flex-row flex-wrap items-center gap-5 rounded-xl bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#33DDB3] via-[#1D7776] to-[#071038] backdrop-blur-xl lg:w-1/3 lg:rounded-3xl lg:rounded-bl lg:rounded-tr overflow-hidden">
         <div ref={ref} className="absolute left-0 transform -translate-y-1/2 w-full -bottom-[0px]">
            <div className="w-[400px] h-[400px] rounded-full bg-[#33DDB3] absolute -bottom-[400px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50"></div>
            <div className="w-[480px] h-[480px] rounded-full bg-[#2AB49A]  absolute -bottom-[480px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-40"></div>
            <div className="w-[560px] h-[560px] rounded-full bg-[#218B82] absolute -bottom-[560px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-30"></div>
            <div className="w-[640px] h-[640px] rounded-full bg-[#196269] absolute -bottom-[640px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-20"></div>
            <div className="w-[720px] h-[720px] rounded-full bg-[#103951] absolute -bottom-[720px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10"></div>
         </div>
			<div ref={ref2} className="w-full h-full absolute z-[60] -bottom-[20px] left-0 transform -translate-x-1/2" >
				<img src="./img/avatar.webp" alt="David Ochoa" className="w-min h-min md:h-full lg:h-min absolute bottom-0 max-h-[350px] left-1/2 -translate-x-1/2" width={'350px'} height={'350px'}/>
			</div>
      </div>
   )
}

export function SocialCard() {
	return (
		<div className="max-w-[400px] max-h-[400px] flex flex-row flex-wrap content-center justify-center items-center gap-4 rounded-xl bg-gradient-to-bl from-slate-950 via-slate-900 to-[#05604b] p-10 backdrop-blur-xl lg:w-2/3 lg:rounded-3xl lg:rounded-bl lg:rounded-tr md:p-10">
				<a href="https://github.com/davidochoadev" target="_blank" className="flex justify-center items-center w-[100px] h-[100px] hover:scale-110 transition duration-300">
					<img src="./img/github.webp" alt="Github" className="w-20 h-20" width={'80px'} height={'80px'}/>
				</a>
				<a href="https://linkedin.com/in/davidochoadev" target="_blank" className="flex justify-center items-center w-[100px] h-[100px] hover:scale-110 transition duration-300">
					<img src="./img/linkedin.webp" alt="Linkedin" className="w-20 h-20"width={'80px'} height={'80px'}/>
				</a>
				<a href="https://twitter.com/davidochoadev" target="_blank" className="flex justify-center items-center w-[100px] h-[100px] hover:scale-110 transition duration-300">
					<img src="./img/twitter.webp" alt="Twitter" className="w-[92px] h-[92px]" width={'92px'} height={'92px'}/>
				</a>
				<a href="https://api.whatsapp.com/send?phone=393517908366" target="_blank" className="flex justify-center items-center w-[100px] h-[100px] hover:scale-110 transition duration-300">
					<img src="./img/whatsapp.webp" alt="Twitter" className="w-[92px] h-[92px]" width={'92px'} height={'92px'}/>
				</a>
		</div>
	)
}

export function ReadCvCard() {
	return (
		<div className="max-w-[400px] max-h-[400px] min-h-[400px] content-center flex flex-col flex-wrap justify-center items-center gap-8 rounded-xl bg-gradient-to-br from-slate-200 via-slate-400 to-slate-600 backdrop-blur-xl lg:w-2/3 lg:rounded-3xl lg:rounded-bl lg:rounded-tr p-10">
			<div className="flex flex-row gap-4 justify-center items-center">
				<a href="https://read.cv/davidochoa.dev" target="_blank" className="h-[80px] min-w-[80px] border flex-grow transition duration-300 hover:scale-110 border-slate-300 rounded-3xl bg-slate-100 shadow-md drop-shadow-md flex justify-center items-center">
					<img src="./img/readcv.svg" alt="" className="w-[60px] h-[60px]" width={'60px'} height={'60px'}/>
				</a>
				<h3 className="font-mono text-xl text-slate-700">
					Check my Resume on read.cv
				</h3>
			</div>
			<div  className="flex flex-row gap-4 justify-center items-center">
				<a href="https://www.frontendmentor.io/profile/davidochoadev" target="_blank" className="h-[80px] min-w-[80px] border flex-grow transition duration-300 hover:scale-110 border-slate-300 rounded-3xl bg-white shadow-md drop-shadow-md flex justify-center items-center">
					<img src="./img/frontendmentor.webp" alt="Frontend Mentor" className="w-[70px] h-[70px]" width={'70px'} height={'70px'}/>
				</a>
				<h3 className="font-mono text-xl text-slate-700">
					Or my profile on Frontend Mentor
				</h3>
			</div>
		</div>
	)
}

export default { UserCard, MemojiCard, SocialCard, ReadCvCard };
