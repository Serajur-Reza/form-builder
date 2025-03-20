import "./App.css";
// import Code from "./components/Code";
import Elements from "./components/Elements";
import Fields from "./components/Fields";
import {useState} from "react";
import { DndContext } from '@dnd-kit/core';
import {useAppDispatch, useAppSelector} from "./store/hooks.ts";
import {addElement} from "./store/Form/formSlice.ts";

function App() {
    const dispatch = useAppDispatch()
    // const elements = useAppSelector(state => state.form.forms);
    // console.log(elements);

    const handleDragEnd = (event) => {
        const { active } = event;

        // Add the dragged element to the canvas
        if (active.data.current) {
            // setElements((prev) => [...prev, active.data.current]);
            // elements.push(active.data.current);
            // console.log(elements);
            dispatch(addElement(active.data.current));
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
                    <Fields />
                    {/*<Code />*/}
                </div>
            </div>
        </DndContext>

    </>
  );
}

export default App;
