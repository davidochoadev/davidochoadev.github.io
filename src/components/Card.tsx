import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";

export function UserCard() {
	return (
		<div className="flex flex-row flex-wrap items-center gap-5 rounded-xl bg-gradient-to-tl from-slate-950 via-slate-900 to-[#05604b] p-4 backdrop-blur-xl lg:w-2/3 lg:rounded-3xl lg:rounded-br lg:rounded-tl lg:p-14">
			<img src="./profile.webp" alt="David Ochoa drinking coffee" className="w-14 rounded-full" />
			<div className="flex flex-col md:flex-grow">
				<h3 className="text-lg text-white">Hi, I'm David Ochoa. 👋</h3>
				<h4 className="text-sm text-slate-500">Junior Web Developer & Designer</h4>
			</div>
			<div className="flex w-full flex-row gap-2 duration-300 md:w-max">
				<a
					href="https://github.com/davidochoadev"
					target="_blank"
					className="rounded-lg bg-gradient-to-tl from-slate-800 via-slate-900 to-[#30413d] p-2 backdrop-blur-sm transition ease-in-out duration-300 delay-100 hover:scale-110"
				>
					<img src="./github.svg" alt="" className="h-6 w-6" loading="lazy"/>
				</a>
				<a
					href="https://twitter.com/davidochoadev"
					target="_blank"
					className="rounded-lg bg-gradient-to-tl from-slate-800 via-slate-900 to-[#30413d] p-2 backdrop-blur-sm transition ease-in-out duration-300 delay-100 hover:scale-110 "
				>
					<img src="./twitter.svg" alt="" className="h-6 w-6" loading="lazy"/>
				</a>
				<a
					href="https://linkedin.com/in/davidochoadev"
					target="_blank"
					className="rounded-lg bg-gradient-to-tl from-slate-800 via-slate-900 to-[#30413d] p-2 backdrop-blur-sm transition ease-in-out duration-300 delay-100 hover:scale-110 "
				>
					<img src="./linkedin.svg" alt="" className="h-6 w-6" loading="lazy"/>
				</a>
			</div>
			<h1 className="py-2 font-mono text-3xl text-white lg:py-8 lg:text-5xl">
				Driven to design and develop websites.
			</h1>
			<p className="text-slate-600 lg:text-2xl">
				Fueled by a deep passion for constant learning, I am always seeking new knowledge and skills
				to enhance my abilities.
			</p>
		</div>
	);
}

export function AboutCard() {
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
		<div className="flex min-h-[400px] flex-row flex-wrap items-center gap-5 rounded-xl bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#33DDB3] via-[#1D7776] to-[#071038] backdrop-blur-xl lg:w-1/3 lg:rounded-3xl lg:rounded-bl lg:rounded-tr overflow-hidden">
         <div ref={ref} className="absolute left-0 transform -translate-y-1/2 w-full -bottom-[0px]">
            <div className="w-[400px] h-[400px] rounded-full bg-[#33DDB3] absolute -bottom-[400px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50"></div>
            <div className="w-[480px] h-[480px] rounded-full bg-[#2AB49A]  absolute -bottom-[480px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-40"></div>
            <div className="w-[560px] h-[560px] rounded-full bg-[#218B82] absolute -bottom-[560px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-30"></div>
            <div className="w-[640px] h-[640px] rounded-full bg-[#196269] absolute -bottom-[640px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-20"></div>
            <div className="w-[720px] h-[720px] rounded-full bg-[#103951] absolute -bottom-[720px] left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-10"></div>
         </div>
			<div ref={ref2} className="w-full h-full absolute z-[60] -bottom-[20px] left-0 transform -translate-x-1/2" >
				<img src="./design.webp" alt="" className="z-0 h-3/4 lg:w-2/3 lg:h-auto top-10 absolute md:left-16 w-auto lg:left-4 lg:top-6" loading="lazy"/>
				<img src="./coding.webp" alt="" className="z-0 h-1/3 lg:w-1/3 lg:h-auto top-2 absolute" loading="lazy"/>
				<img src="./editor.webp" alt="" className="h-1/3 lg:w-1/3 lg:h-auto top-10 absolute right-0" loading="lazy"/>
				<img src="./avatar-laptop.webp" alt="David Ochoa" className="w-min h-min md:h-full lg:h-min absolute bottom-0 max-h-[350px] left-1/2 -translate-x-1/2" loading="lazy"/>
			</div>
      </div>
   )
}

export default { UserCard, AboutCard };
