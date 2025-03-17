
type Props = { formElement: any, name: string}

const SidebarButtonElement = (props:Props ) => {
    const {formElement, name} = props
    return (
        <div className={'bg-gray-100 border-1 rounded-md p-4 m-2 cursor-pointer'}>
            {name}
        </div>
    );
};

export default SidebarButtonElement;