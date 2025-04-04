export const SubmitButtonField = () => {
  return (
    <div className="w-full flex justify-between cursor-pointer">
      <button
        type="submit"
        className=" py-3 px-4 rounded-md text-white bg-blue-200 cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
};

export const SubmitButtonString = () => {
  return `                <div className='w-full flex justify-between '>
      <button
        type='submit'
        className=' py-3 px-4 rounded-md text-white bg-blue-200 cursor-pointer'
      >
        Submit
      </button>
      
    </div>`;
};
