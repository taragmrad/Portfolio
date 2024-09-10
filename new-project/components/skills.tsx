export function Skills(){
    return (
        <div className="bg-black" id="skills">
            <div className="py-6 pt-6">
                <div className="flex items-center justify-center">
                    <h1 className="mx-4 text-3xl font-semibold text-center text-white md:text-4xl">
                        Skills
                    </h1>
                </div>
            </div>
            <div className="text-white">
                <h1 className="font-bold flex flex-row items-center justify-center font-serif">Languages</h1>
                <ul className="flex flex-wrap items-center justify-center gap-4 mb-6 md:flex md:flex-row">
                    <li className="relative group">
                        <img 
                            src="/Python.png"
                            alt="Python Logo"
                            className="w-12 h-12 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                        />
                        <span className="inset-0 flex justify-center items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Python
                        </span>
                    </li>
                    <li className="relative group">
                        <img 
                            src="/java2.webp"
                            alt="Java Logo"
                            className="w-12 h-12 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                        />
                        <span className="inset-0 flex justify-center items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Java
                        </span>
                    </li>
                    <li className="relative group">
                        <img 
                            src="/ASM.png"
                            alt="Assembly Language Logo"
                            className="w-12 h-12 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                        />
                        <span className="inset-0 flex justify-center items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Assembly
                        </span>
                    </li>
                    <li className="relative group">
                        <img 
                            src="/HTML.png"
                            alt="HTML Logo"
                            className="w-12 h-12 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                        />
                        <span className="inset-0 flex justify-center items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            HTML
                        </span>
                    </li>
                    <li className="relative group">
                        <img 
                            src="/CSS.svg"
                            alt="CSS Logo"
                            className="w-12 h-12 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                        />
                        <span className="inset-0 flex justify-center items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            CSS
                        </span>
                    </li>
                    <li className="relative group">
                        <img 
                            src="/JS.webp"
                            alt="JavaScript Logo"
                            className="w-12 h-12 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                        />
                        <span className="inset-0 flex justify-center items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            JavaScript
                        </span>
                    </li>
                    <li className="relative group">
                        <img 
                            src="/C.png"
                            alt="C Language Logo"
                            className="w-12 h-12 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                        />
                        <span className="inset-0 flex justify-center items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            C
                        </span>
                    </li>
                </ul>
                <h1 className="font-bold flex flex-row items-center justify-center font-serif">Libraries and Frameworks</h1>
                <ul className="flex flex-wrap items-center justify-center gap-4 mb-6 md:flex md:flex-row">
                    <li className="relative group">
                        <img 
                            src="/Numpy.png"
                            alt="Numpy Logo"
                            className="w-12 h-12 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                        />
                        <span className="inset-0 flex justify-center items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Numpy
                        </span>
                    </li>
                    <li className="relative group">
                        <img 
                            src="/swing.png"
                            alt="Java Swing Logo"
                            className="w-12 h-12 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                        />
                        <span className="inset-0 flex justify-center items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Swing
                        </span>
                    </li>
                    <li className="relative group">
                        <img 
                            src="/react.svg"
                            alt="React Logo"
                            className="w-12 h-12 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                        />
                        <span className="inset-0 flex justify-center items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            React
                        </span>
                    </li>
                    <li className="relative group">
                        <img 
                            src="/tailwind.png"
                            alt="Tailwind CSS Logo"
                            className="w-12 h-12 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                        />
                        <span className="inset-0 flex justify-center items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Tailwind
                        </span>
                    </li>
                    <li className="relative group">
                        <img 
                            src="/Next-js.png"
                            alt="Next.js Logo"
                            className="w-12 h-12 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                        />
                        <span className="inset-0 flex justify-center items-center text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Next.js
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}