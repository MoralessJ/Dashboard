import Date from "../utils/Date";

export default function Task() {
    return (
        <>
            <td className="bg-gray-50 p-5 flex justify-between border border-opacity-20 border-gray-500">
                <div className="flex items-center">
                    <p className="text-gray-900 font-extrabold">
                        Ejemplo de una tarea escrita
                    </p>
                </div>

                <Date />
            </td>
        </>
    );
}

{
    /*
        <div className="bg-gray-50 p-5 flex justify-between border border-opacity-20 border-gray-500 ">
            <div className="flex items-center">
                <p className="text-gray-900 font-extrabold">
                    Ejemplo de una tarea escrita
                </p>
            </div>

            <Date />
        </div> */
}
