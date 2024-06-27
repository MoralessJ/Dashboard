function getInfo(type: number) {
    switch (type) {
        case 1: // Front-end
            return {
                textColor: "text-red-800",
                bgColor: "bg-red-300",
                barColor: "bg-red-500",
                textLabel: "Frontend",
            };
        case 2: // Back-end
            return {
                textColor: "text-green-800",
                bgColor: "bg-green-300",
                barColor: "bg-green-500",
                textLabel: "Backend",
            };
        case 3: // Desarrollo C#
            return {
                textColor: "text-yellow-800",
                bgColor: "bg-yellow-300",
                barColor: "bg-yellow-500",
                textLabel: "Desarrollo C#",
            };
        default:
            return {
                textColor: "",
                bgColor: "",
                barColor: "",
                textLabel: "",
            };
    }
}

interface CardProyectProps {
    type: number;
    title: string;
    details: string;
    progress?: number;
}

CardProyect.defaultProps = {
    type: undefined,
    title: undefined,
    details: undefined,
    progress: 0,
};

export default function CardProyect({
    type,
    title,
    details,
    progress,
}: CardProyectProps) {
    const { textColor, bgColor, barColor, textLabel } = getInfo(type);

    const widthBar = {
        width: `${progress}%`,
    };
    return (
        <div className="border border-opacity-20 border-gray-500 rounded-lg p-5 bg-gray-50 flex flex-col justify-between">
            <div className="">
                <div className="flex items-center h-10">
                    <h3 className="text-gray-950 text-xl font-extrabold">
                        {title}
                    </h3>
                    <p
                        className={`py-1 px-3 ${bgColor} ${textColor} rounded-xl mx-2 font-bold`}
                    >
                        {textLabel}
                    </p>
                </div>
                <p className="text-gray-500 text-base">{details}</p>
                <div className="my-2">
                    <div className="flex justify-between">
                        <p className="text-gray-500 text-base">Progreso</p>
                        <p className="text-gray-500 text-base">{progress}%</p>
                    </div>
                    <div className="h-3 w-full bg-transparent overflow-hidden rounded-xl">
                        <div
                            className={`h-3 ${barColor}`}
                            style={widthBar}
                        ></div>
                    </div>
                </div>
            </div>
            <div className="w-[125px] ">
                <p className="text-gray-50 text-base bg-slate-300 px-2 rounded-lg text-center">
                    26 Junio 2024
                </p>
            </div>
        </div>
    );
}
