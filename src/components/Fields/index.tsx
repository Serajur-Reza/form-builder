
import { useDroppable } from '@dnd-kit/core';
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {removeElement} from "../../store/Form/formSlice.ts";


const Fields = () => {
  const elements = useAppSelector(state => state.form.forms);

  const dispatch = useAppDispatch()
  const { setNodeRef } = useDroppable({
    id: 'canvas',
  });

console.log(elements)
  return <div className={'bg-white border-1 rounded-md p-4  m-2 overflow-auto'}>
    <div>
      <div>
        <h1 className={'text-2xl  m-2 font-bold'} >Fields</h1>
      </div>
      <div >
        {elements?.map((el, i) => (
            <div className={'grid grid-cols-12 gap-4 flex items-center justify-center'} key={i}>
              <div className={'col-span-11 border-1 border-dashed rounded-md p-4 my-4' }>
                {el.type}
              </div>
              <button className={'col-span-1 border-1 h-[50px] rounded-md  my-4 cursor-pointer' } onClick={()=> dispatch(removeElement(i)) }>
                -
              </button>
            </div>
        ))}
      </div>
    </div>
  </div>;
};

export default Fields;
