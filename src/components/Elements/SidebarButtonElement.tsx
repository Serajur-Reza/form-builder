import { useDraggable } from "@dnd-kit/core";

type Props = { id: number; formElement: any; code: string; name: string };

const SidebarButtonElement = (props: Props) => {
  const { id, formElement, code, name, icon } = props;

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      type: "form-element",
      element: formElement,
      label: name,
      id: id,
      code: code,
      icon: icon,
    },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div
      ref={setNodeRef}
      className={
        "bg-gray-100 border-1 rounded-md p-4 m-4 cursor-pointer flex gap-x-4 items-center"
      }
      style={{ ...style }}
      {...listeners}
      {...attributes}
    >
      <div>{icon}</div>
      <div>{name}</div>
    </div>
  );
};

export default SidebarButtonElement;
