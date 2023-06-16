import requestedPosts from "./projects.json";
export function Works() {
   const projects = requestedPosts.projects;
   console.log("projects are: ", projects);

   return (
      <div className="lg:max-w-[830px] min-h-[300px] flex flex-row flex-wrap items-center gap-5 rounded-xl shadow-[inset_4px_4px_10px_rgba(255,255,255,.2)] bg-gradient-to-tl from-slate-950 via-slate-900 to-[#05604b] p-4 backdrop-blur-xl lg:w-2/3 lg:rounded-3xl lg:rounded-br lg:rounded-tl lg:p-14 hover:rounded-br-3xl hover:rounded-tl-3xl tranistion-all duration-300 hover:scale-105 ease-in-out">
      </div> 
   )
}

export default { Works }