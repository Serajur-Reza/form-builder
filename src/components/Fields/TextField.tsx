export const TextField = () => {
  return (
    <div className="w-full">
      <input
        className="w-full border-1 border-slate-300 p-3 rounded-lg placeholder:text-sm placeholder:text-[#8C8C8C]"
        type="text"
        placeholder={"placeholder"}
        readOnly
        disabled
      />
    </div>
  );
};

export const TextInputString = () => {
  return `        <div className="w-full">
                <input
                    className='w-full border-1 border-slate-300 p-3 rounded-lg placeholder:text-sm placeholder:text-[#8C8C8C]'
                    type='text'
                    placeholder='placeholder'
                />
        </div>`;
};
