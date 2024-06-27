export default function OrderTasksButton() {
    return (
        <div className="flex my-3">
            <button className=" bg-slate-950 text-lg font-semibold text-gray-200 py-1 rounded-md w-[110px]">
                Todas
            </button>
            <button className="text-slate-950 text-lg font-semibold py-1 rounded-md w-[110px]">
                Pendientes
            </button>
            <button className="text-slate-950 text-lg font-semibold py-1 rounded-md w-[110px]">
                Completadas
            </button>
        </div>
    );
}
