import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Dashboard from "./components/dashboard/Dashboard";
import Aside from "./components/aside/Aside";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <div className="grid grid-cols-[250px_1fr] h-screen relative bg-gray-100">
            <aside className="bg-gray-50">
                <Aside />
            </aside>
            <main>
                <Dashboard />
            </main>
        </div>
    </React.StrictMode>
);
