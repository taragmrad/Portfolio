export function AboutPage() {
    return (
    <div className="bg-black" id="abt-title">
        <div className="py-6 pt-6">
            <div className="flex items-center justify-center">
                <h1 className="mx-4 text-3xl font-semibold text-center text-white md:text-4xl">
                    About
                </h1>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-center md:items-start justify-center space-x-0 md:space-x-6 text-white">
            {/* My Picture */}
            <div className="mb-6 md:mb-0 md:ml-6 ">
                <img src="/Tara Rad.jpeg"
                alt = "Picture of Tara G.M Rad"
                className="w-48 h-48 object-cover md:w-64 md:h-64 lg:w-72 lg:h-72 border-4 border-[#5b7b8b] p-2"
                />
            </div>
                {/* Description */}
            <div className="text-white max-w-xl md:text-left">
                <p className="mb-6 ml-6">
                    Hi, my name is <span className="name">Tara Ghasemi Monfared Rad.</span>I am a student at the <span className="uofc"><a href = "https://www.ucalgary.ca" target="_blank">University of Calgary</a></span>, and I am in my third year of <span className="uofc">Computer Science. I am concentrating on Information Security, and I teach myself other skills --like web development-- on the side!</span>
                </p>
            </div>
        </div>
    </div>
    );
}