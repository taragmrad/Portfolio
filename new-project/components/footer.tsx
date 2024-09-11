export function Footer() {
    return (
        <div className="bg-[#1e4556] py-6 md:min-h-[100px]" id="contact">
            <div className="flex flex-col md:flex-row md:justify-center items-center md:items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                    <h1 className="text-3xl font-semibold text-center text-white md:text-left md:text-4xl">
                        Contact Me
                    </h1>
                </div>
                <div className="flex flex-col items-center md:items-start space-y-2 ">
                    <h1 className="text-white font-serif">itstararad@gmail.com</h1>
                    <li className=" list-none text-white font-serif relative group">
                        <a className="group-hover:brightness-75" href="https://www.linkedin.com/in/tara-ghasemi-monfared-rad-2998aa242"target="_blank">Linkedin</a>
                    </li>
                    <li className="list-none text-white font-serif relative group">
                        <a className="group-hover:brightness-75" href="https://github.com/taragmrad"target="_blank">GitHub</a>
                    </li>
                </div>
                <div className="text-white px-10 text-xl md:text-2xl relative group pt-3 md:pl-10">
                    <button className="bg-[#002530] px-4 rounded-full group-hover:brightness-75">
                        Resume
                    </button>
                </div>
            </div>
        </div>
    ); 
}