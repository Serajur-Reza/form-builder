
import { useDroppable } from '@dnd-kit/core';


const Fields = (props) => {
  const { elements } = props;
  const { setNodeRef } = useDroppable({
    id: 'canvas',
  });

  console.log(elements)
  return <div className={'bg-white border-1 rounded-md p-4  m-2 overflow-auto'}>
    <div>
      <h1 className={'text-2xl font-bold'} >Fields</h1>
      <div >
        {elements?.map((el, i) => (<div className={'my-4' }>{el.type}</div>))}
      </div>
    </div>
  </div>;
};

export default Fields;
