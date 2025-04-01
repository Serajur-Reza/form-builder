import "./App.css";
// import Code from "./components/Code";
import Elements from "./components/Elements";
import Fields from "./components/Fields";
import { useState } from "react";
import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core";
import { useAppDispatch, useAppSelector } from "./store/hooks.ts";
import { addElement, reorderElements } from "./store/Form/formSlice.ts";
import { nanoid } from "@reduxjs/toolkit";

function App() {
  const dispatch = useAppDispatch();
  const elements = useAppSelector((state) => state.form.forms);
  console.log(elements);

  const [activeElement, setActiveElement] = useState(null);

  const handleDragStart = (event) => {
    if (event.active.data.current?.type === "form-element") {
      console.log(event.active.data.current);
      setActiveElement(event.active.data.current);
    }

    const { active, over } = event;

    console.log(active, over);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    setActiveElement(null);

    if (!over) return;

    console.log(active, over);

    // Add the dragged element to the canvas
    if (
      active.data.current?.type === "form-element" &&
      (over.id === "canvas" ||
        elements.findIndex((item) => item.uid === over.id) !== -1)
    ) {
      // setElements((prev) => [...prev, active.data.current]);
      // elements.push(active.data.current);
      // console.log(elements);
      dispatch(addElement({ uid: nanoid(), ...active.data.current }));
      return;
    }

    if (active.id !== over.id) {
      // const elem = elements.find((item) => item.uid === active.id);
      // console.log(elem);
      // setActiveElement(elem);
      const oldIndex = elements.findIndex((item) => item.uid === active.id);
      const newIndex = elements.findIndex((item) => item.uid === over.id);
      console.log(oldIndex, newIndex);
      dispatch(reorderElements({ oldIndex, newIndex }));
    }
  };

  // console.log(elements)

  return (
    <>
      <DndContext
        // collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="font-bold  mt-4">
          <h1 className="text-3xl text-center">Form Builder</h1>

          <div className="grid grid-cols-2 gap-4 m-4">
            <Elements />
            <Fields />

            <DragOverlay>
              {activeElement ? (
                <div
                  style={{
                    padding: "10px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    backgroundColor: "white",
                    visibility: !activeElement?.uid ? "hidden" : undefined,

                    transform: "scale(1.02)",
                    opacity: 0.9,
                    cursor: "grabbing",
                  }}
                >
                  {activeElement?.element}
                </div>
              ) : null}
            </DragOverlay>
          </div>
        </div>
      </DndContext>
    </>
  );
}

export default App;
