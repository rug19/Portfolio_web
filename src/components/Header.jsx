export default function Header() {
  return (
    <header className= "flex justify-between items-center bg-black fixed top-0 left-0 w-full h-20 p-5  " >
      <div className="ml-20">
        <h2 className="text-2xl  text-white  font-sans">RugCosta<span className="text-green">.</span></h2>
      </div>
      <div className="flex text-sm mr-20 gap-10 font-sans text-white">
        <button>Home</button>
        <button>Resume</button>
        <button>Project</button>
        <button>Contact</button>
      </div>
      
    </header>
  );
}

