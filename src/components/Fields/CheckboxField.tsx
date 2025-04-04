export const CheckBoxField = () => {
  return (
    <div className="w-full h-[70px] flex justify-center flex-col">
      <div className="flex justify-between items-center mb-1">
        <label className="block  text-[#233564] text-sm">Checkbox</label>
      </div>

      {[1, 2, 3]?.map((option, index) => (
        <div>
          <label
            className="flex space-x-2 text-sm text-slate-600 items-center"
            htmlFor={`Option ${option}`}
          >
            <input className="rounded-md" type="checkbox" readOnly disabled />

            <span className="block">{`Option ${option}`}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export const CheckBoxFieldString = () => {
  return `                     <div className="w-full h-[70px] flex justify-center flex-col">
        <div className="flex justify-between items-center mb-1">
            <label className="block text-[#233564] text-sm">Checkbox</label>
        </div>

        <div>
            <label
                className="flex space-x-2 text-sm text-slate-600 items-center"
                htmlFor='Option 1'
            >
                <input className="rounded-md" type="checkbox" />
                <span className="block">Option 1</span>
            </label>
        </div>

        <div>
            <label
                className="flex space-x-2 text-sm text-slate-600 items-center"
                htmlFor='Option 2'
            >
                <input className="rounded-md" type="checkbox" />
                <span className="block">Option 2</span>
            </label>
        </div>

        <div>
            <label
                className="flex space-x-2 text-sm text-slate-600 items-center"
                htmlFor='Option 3'
            >
                <input className="rounded-md" type="checkbox" />
                <span className="block">Option 3</span>
            </label>
        </div>
    </div>`;
};
