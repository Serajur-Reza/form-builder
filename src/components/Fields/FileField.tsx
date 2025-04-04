export const FileField = () => {
  return (
    <div className="w-full cursor-pointer">
      <div className="flex justify-between items-center mb-1">
        <label className="block  text-[#233564] text-sm" htmlFor="label">
          File Upload
        </label>
      </div>
      <input
        className="w-full border-1 border-slate-300 p-3 rounded-lg placeholder:text-sm placeholder:text-[#8C8C8C] cursor-pointer"
        type="file"
        readOnly
        disabled={true}
        accept="*.*"
      />
    </div>
  );
};

export const FileInputString = () => {
  return `            <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <label className="block  text-[#233564] text-sm" htmlFor="label">
          File Upload
        </label>
      </div>
      <input
        className="w-full border-1 border-slate-300 p-3 rounded-lg placeholder:text-sm placeholder:text-[#8C8C8C]"
        type='file'
        accept='*.*'
      />
    </div>`;
};
