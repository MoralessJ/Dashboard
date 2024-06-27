export default function OrderTasksButton() {
    return (
        <div className="flex my-3">
            <button className=" bg-slate-950 text-lg font-semibold text-gray-200 px-4 py-2 rounded-md w-[150px]">
                <div className="flex flex-row justify-between">
                    <p>Todas</p>
                    <p className="bg-slate-700 px-2 rounded-md">0</p>
                </div>
            </button>
            <button className="text-slate-950 text-lg font-semibold px-2 py-2 rounded-md w-[150px]">
                Pendientes
            </button>
            <button className="text-slate-950 text-lg font-semibold py-2 rounded-md w-[150px]">
                Completadas
            </button>
        </div>
    );
}
