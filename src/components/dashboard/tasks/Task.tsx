import Date from "../utils/Date";

export default function Task() {
    return (
        <div className="bg-gray-50 p-5 rounded-md flex justify-between border border-opacity-20 border-gray-500 my-0.5">
            <p className="text-gray-900 font-extrabold">
                Ejemplo de una tarea escrita
            </p>
            <Date />
        </div>
    );
}
