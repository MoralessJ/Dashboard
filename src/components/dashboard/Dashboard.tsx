import CardProyect from "./proyects/CardProyect";
import OrderTasksButton from "./tasks/OrderTasksButton";
import Tasks from "./tasks/Tasks";

export default function Dashboard() {
    return (
        <div className="py-5 px-10">
            <div className="my-5">
                {/* Últimos Proyectos */}
                <div className="my-5">
                    <h1 className="text-gray-950 text-3xl font-extrabold">
                        Bienvenido, Jonathan
                    </h1>
                    <p className="text-gray-500 text-base">
                        Checa los últimos proyectos
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <CardProyect
                        type={1}
                        title={"Interface web"}
                        details={
                            "Desarrollar una interface web con react y tailwind css"
                        }
                        progress={3}
                    />
                    <CardProyect
                        type={3}
                        title={"Base de Datos"}
                        details={"Crear la base de datos MySQL"}
                    />
                    <CardProyect
                        type={2}
                        title={"Creación de MVC"}
                        details={"Desarrollar cliente dinámico con node.js"}
                    />
                </div>
            </div>
            {/* Tareas recientes */}
            <div className="my-10">
                <OrderTasksButton />
                <Tasks />
            </div>
        </div>
    );
}
