import { useDroppable } from "@dnd-kit/core";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import { clearForm, removeElement } from "../../store/Form/formSlice.ts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Code from "@/components/Code";

const Fields = () => {
  const elements = useAppSelector((state) => state.form.forms);

  const dispatch = useAppDispatch();
  const { setNodeRef } = useDroppable({
    id: "canvas",
  });

  console.log(elements);
  return (
    <div className={"bg-white border-1 rounded-md p-4  m-2 overflow-auto"}>
      <div className={"m-2"}>
        {/*<div>*/}
        {/*  <h1 className={'text-2xl  m-2 font-bold'} >Fields</h1>*/}
        {/*</div>*/}

        <div>
          <Tabs defaultValue="preview" className="">
            <TabsList className="grid w-full grid-cols-2 w-[200px]">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>

            <TabsContent value="preview">
              <div className={"w-full"}>
                {elements?.length
                  ? elements?.map((el, i) => (
                      <div
                        className={
                          "grid grid-cols-12 gap-4 flex items-center justify-center"
                        }
                        key={i}
                      >
                        <div
                          className={
                            "col-span-11 border-1 border-dashed rounded-md p-4 my-4"
                          }
                        >
                          {el.type}
                        </div>
                        <button
                          className={
                            "col-span-1 border-1 h-[50px] rounded-md  my-4 cursor-pointer"
                          }
                          onClick={() => dispatch(removeElement(i))}
                        >
                          -
                        </button>
                      </div>
                    ))
                  : null}
              </div>
            </TabsContent>

            <TabsContent value="code">
              {elements?.length ? <Code /> : null}
            </TabsContent>
          </Tabs>
        </div>

        {elements?.length ? (
          <div className={"flex justify-end"}>
            <button
              type={"button"}
              className={"bg-black text-white text-md rounded-md p-3 mt-4"}
              onClick={() => dispatch(clearForm())}
            >
              Clear Form
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Fields;
