export const SelectField = () => {
  return (
    <div className="w-full">
      <div className="mb-1 flex items-center justify-between">
        <label className="block text-sm text-slate-600 " htmlFor="label">
          Select
        </label>
      </div>

      <select
        className="w-full border rounded-lg border-slate-300 p-3"
        disabled
      >
        <option value={"option 1"}>Option 1</option>
        <option value={"option 2"}>Option 2</option>
        <option value={"option 2"}>Option 2</option>
      </select>
    </div>
  );
};

export const SelectFieldString = () => {
  return `             <div className="w-full">
      <div className="mb-1 flex items-center justify-between">
        <label className="block text-sm text-slate-600" htmlFor="label">
          Select
        </label>
      </div>

      <select className="w-full border rounded-lg border-slate-300">
        <option value={"option 1"}>Option 1</option>
        <option value={"option 2"}>Option 2</option>
        <option value={"option 2"}>Option 2</option>
      </select>
    </div>`;
};
