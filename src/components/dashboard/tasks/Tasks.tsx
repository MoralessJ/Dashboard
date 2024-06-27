import Task from "./Task";

export default function Tasks() {
    return (
        <div className="flex flex-col my-4">
            <table className="">
                <tbody>
                    <Task />
                    <Task />
                    <Task />
                </tbody>
            </table>
        </div>
    );
}
