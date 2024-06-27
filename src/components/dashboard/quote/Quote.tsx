import { useState, useEffect, Dispatch, SetStateAction } from "react";

async function fetchQuote(setQuote: Dispatch<SetStateAction<string>>) {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    setQuote(data.content);
}

export default function Quote() {
    const [quote, setQuote] = useState("Frase inicial");

    useEffect(() => {
        fetchQuote(setQuote);
    }, []);

    return (
        <div className="my-3">
            <h3 className="text-gray-950 text-xl font-extrabold px-5 mb-6">
                Frase Motivacional
            </h3>
            <div className="bg-slate-50 border border-opacity-20 border-gray-500 p-5">
                <p className="text-gray-500 text-base">{quote}</p>
            </div>
        </div>
    );
}
