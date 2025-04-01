import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDispatch } from "react-redux";
import { removeElement } from "@/store/Form/formSlice";

export const SortableItem = (props) => {
  const { id, element, index } = props;
  const dispatch = useDispatch();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  // console.log("fndkjlafj,", id, element);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  //   const handleRemove = () => {
  //     dispatch(removeElement(id));
  //   };

  return (
    <div
      className={
        "grid grid-cols-12 gap-4 flex items-center justify-center bg-gray-100 my-4 rounded-md px-4 "
      }
      key={id}
      ref={setNodeRef}
      style={{
        ...style,
      }}
      {...attributes}
      // {...listeners}
    >
      <div
        className={"col-span-11 border-1 border-dashed rounded-md  cursor-move"}
        {...listeners}
        style={{ cursor: "move" }}
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
    </div>
  );
};
