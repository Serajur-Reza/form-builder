import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDispatch } from "react-redux";
import { removeElement } from "@/store/Form/formSlice";

export const SortableItem = (props) => {
  const { id, element, index } = props;
  const dispatch = useDispatch();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
    over,
  } = useSortable({ id: id });

  const isOverFromAbove = over?.id === id && isOver;

  // console.log("fndkjlafj,", id, element);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "all 0.3s ease",
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 1 : 0,
    boxShadow: isDragging ? "0 0 10px rgba(0,0,0,0.3)" : "none",
  };

  //   const handleRemove = () => {
  //     dispatch(removeElement(id));
  //   };

  return (
    <div
      className={
        "grid grid-cols-12 gap-4 flex items-center justify-center  my-4 rounded-md px-4 "
      }
      key={id}
      ref={setNodeRef}
      style={{
        ...style,
      }}
      {...attributes}
      // {...listeners}
    >
      {isOverFromAbove && (
        <div
          style={{
            position: "absolute",
            top: "-4px",
            left: 0,
            right: 0,
            height: "2px",
            backgroundColor: "#4285f4",
            zIndex: 1,
          }}
        />
      )}
      <div
        className={
          "col-span-11 border-1 border-dashed rounded-md bg-gray-100  my-4 rounded-md"
        }
        {...listeners}
        style={{
          cursor: "grab",
        }}
      >
        {element.element}
      </div>
      <button
        className={
          "col-span-1 border-1 h-[50px] rounded-md  my-4 cursor-pointer"
        }
        onClick={() => dispatch(removeElement(index))}
      >
        -
      </button>

      {isOver && !isOverFromAbove && (
        <div
          style={{
            position: "absolute",
            bottom: "-4px",
            left: 0,
            right: 0,
            height: "2px",
            backgroundColor: "#4285f4",
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
};
