export const RadioField = () => {
  return (
    <div className="w-full">
      <div className="mb-1 flex items-center justify-between">
        <label className="block text-sm text-slate-600 " htmlFor="label">
          Radio
        </label>
      </div>

      {[1, 2, 3]?.map((option, index) => (
        <div className="flex items-center gap-2" key={option}>
          <input
            type="radio"
            name={`Option ${option}`}
            value={option}
            readOnly
            disabled
          />
          <label htmlFor={`Option ${option}`}>{`Option ${option}`}</label>
        </div>
      ))}
    </div>
  );
};

export const RadioFieldString = () => {
  return `                 <div className="w-full">
        <div className="mb-1 flex items-center justify-between">
            <label className="block text-sm text-slate-600 " htmlFor="label">
            Radio
            </label>
        </div>
        <div className="flex items-center gap-2" >
            <input
                type="radio"
                name='option 1'
                value='option 1'
            />
            <label htmlFor='Option 1'>Option 1</label>
        </div>
        <div className="flex items-center gap-2" >
            <input
                type="radio"
                name='option 2'
                value='option 2'
            />
            <label htmlFor='Option 2'>Option 2</label>
        </div>
        <div className="flex items-center gap-2" >
            <input
                type="radio"
                name='option 3'
                value='option 3'
            />
            <label htmlFor='Option 3'>Option 3</label>
        </div>
        </div>`;
};
