export function FunFacts(){
    return (
        <div className="bg-black" id="ff">
            <div className="py-6 pt-6">
                <div className="flex items-center justify-center">
                    <h1 className="mx-4 text-3xl font-semibold text-center text-white md:text-4xl">
                        More About Me
                    </h1>
                </div>
            </div>
            <div className="text-white">
                <p>
                My hobbies include reading, listening to music, and buying books I know I'm not going to read.
                </p>
                <h1 className="font-bold flex flex-row items-center justify-center font-serif">Favourite Artists</h1>
                        <ul className="flex flex-wrap items-center justify-center gap-4 mb-6 md:flex md:flex-row">
                            <li className="relative group">
                                <img 
                                    src="/HozierImg.avif"
                                    alt="Hozier's Unreal/Unearth Album Cover"
                                    className="w-36 h-36 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                                />
                                <span className="absolute inset-0 flex justify-center items-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Hozier
                                </span>
                            </li>
                            <li className="relative group">
                                <img 
                                    src="/PBImg.jpeg"
                                    alt= "Phoebe Bridger's Punisher Album Cover"
                                    className="w-36 h-36 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                                /> 
                                <span className="absolute inset-0 flex justify-center items-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Phoebe Bridgers
                                </span>
                            </li>
                            <li className="relative group">
                                <img
                                    src="/Beach_House_Img.png"
                                    alt="Beach House's Reveal Bloom"
                                    className="w-36 h-36 object-cover rounded transition-all duration-300 group-hover:brightness-50"
                                />
                                <span className="absolute inset-0 flex justify-center items-center text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Beach House
                                </span>
                            </li>
                        </ul>
                    <h1 className="font-bold flex flex-row items-center justify-center font-serif">Favourite Books</h1>
                        <ul className="flex flex-wrap items-center justify-center gap-4 mb-6 md:flex md:flex-row">
                            <li className="relative group">
                                <img 
                                    src="/NinthHouse.jpg"
                                    className="w-36 h-45 object-cover rounded"
                                />
                            </li>
                            <li className="relative group">
                                <img 
                                    src="/ADogsPurpose.jpg"
                                    className="w-36 h-45 object-cover rounded"
                                />
                            </li>
                            <li className="relative group">
                                <img 
                                    src="/TOG.jpg"
                                    className="w-36 h-45 object-cover rounded"
                                />
                            </li>
                        </ul>
            </div>
        </div>
    );
}