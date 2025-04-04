export const TextAreaField = () => {
  return (
    <div className="w-full cursor-pointer">
      <div className="flex justify-between items-center mb-1">
        <label className="block text-sm text-slate-600" htmlFor="label">
          TextArea
        </label>
      </div>

      <textarea
        className="w-full border-1 border-slate-300 rounded-md p-3 resize-none cursor-pointer"
        placeholder={"placeholder"}
        readOnly
        disabled
      />
    </div>
  );
};

export const TextAreaString = () => {
  return `                <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <label className="block text-sm text-slate-600" htmlFor="label">
          TextArea
        </label>
      </div>

      <textarea
        type="text"
        className="w-full border-1 border-slate-300 p-3 rounded-md"
        placeholder={"placeholder"}
      />
    </div>`;
};
