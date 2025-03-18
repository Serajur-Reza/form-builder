import "./App.css";
// import Code from "./components/Code";
import Elements from "./components/Elements";
import Fields from "./components/Fields";
import {useState} from "react";
import { DndContext } from '@dnd-kit/core';

function App() {
    const [elements, setElements] = useState([]);

    const handleDragEnd = (event) => {
        const { active } = event;

        // Add the dragged element to the canvas
        if (active.data.current) {
            setElements((prev) => [...prev, active.data.current]);
        }
    };

    // console.log(elements)

    return (
    <>

        <DndContext onDragEnd={handleDragEnd}>
            <div className="font-bold  mt-4">
                <h1 className="text-3xl text-center">Form Builder</h1>


                <div className="grid grid-cols-2 gap-4 m-4">
                    <Elements />
                    <Fields elements={elements}/>
                    {/*<Code />*/}
                </div>
            </div>
        </DndContext>

    </>
  );
}

export default App;
