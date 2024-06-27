import Task from "./Task";
import AddTask from "./AddTask";

export default function Tasks() {
    return (
        <div className="flex flex-col my-4 w-[750px]  ">
            <AddTask />
            <Task />
            <Task />
            <Task />
        </div>
    );
}
