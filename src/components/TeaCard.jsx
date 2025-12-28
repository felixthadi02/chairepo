export const TeaCard = ({ tea, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className="relative group overflow-hidden">
            <div className="h-[500px] relative rounded-xl">
                <img
                    src={tea.image}
                    alt={tea.name}
                    className="w-full h-full object-cover rounded-xl
                     transition-transform duration-700
                     group-hover:scale-105"
                />

                <div
                    className={`absolute inset-0 ${isEven ? "bg-yellow-900/20" : "bg-pink-900/30"
                        } mix-blend-overlay`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 p-12">
                    <span className="text-6xl font-thin text-white/20">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-4xl font-thin mb-2 text-[#8dcb3f]">
                        {tea.name}
                    </h3>
                    <p
                        className={`text-xl mb-4 ${isEven ? "text-yellow-400" : "text-pink-400"
                            }`}
                    >
                        {tea.title}
                    </p>
                    <p className="text-gray-300 line-clamp-3">
                        {tea.description}
                    </p>
                </div>
            </div>
        </div>
    );
};
