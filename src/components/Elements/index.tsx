import { formElementSidebar } from "./Elements.tsx";
import SidebarButtonElement from "./SidebarButtonElement.tsx";

const Elements = () => {
  return (
    <div className={"bg-white border-1 rounded-md p-4 m-2"}>
      <div>
        <h1 className={"text-2xl  m-2 font-bold"}>Elements</h1>
      </div>

      {/*{Object?.values(fields)?.map((item) => (*/}
      {/*  <div className="bg-gray-300 p-4 m-2">{item}</div>*/}
      {/*))}*/}

      <div>
        {formElementSidebar.map((formElement, index) => (
          <SidebarButtonElement
            formElement={formElement.element}
            name={formElement.name}
            id={formElement.id}
            code={formElement?.code}
          />
        ))}
      </div>
    </div>
  );
};

export default Elements;
