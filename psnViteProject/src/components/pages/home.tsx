import { useState } from "react";

export function Home() {

    const [number, setNumber] = useState<number>(0);

    function add() {
        setNumber((state) => state + 1);
        console.log(number);
    }

    console.log("renderizou");

    return (
        <div>
            <h1 id="number">{number}</h1>
            <button id="botao" className="button" onClick={add}> Add Number</button>
        </div>
    );
}
