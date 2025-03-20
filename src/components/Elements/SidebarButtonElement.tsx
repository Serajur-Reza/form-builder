import { useDraggable } from '@dnd-kit/core';

type Props = {id: number, formElement: any, code: string, name: string}

const SidebarButtonElement = (props:Props ) => {
    const {id, formElement, code, name} = props

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id,
        data: { type: formElement, label:name, id: id, code: code },
    });

    const style = transform
        ? {
            transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        }
        : undefined;
    return (
        <div
            ref={setNodeRef}
            className={'bg-gray-100 border-1 rounded-md p-4 m-4 cursor-pointer'}
            style={{...style}}
            {...listeners}
            {...attributes}>
            {name}
        </div>
    );
};

export default SidebarButtonElement;