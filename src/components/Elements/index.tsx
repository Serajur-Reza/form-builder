import { fields } from "../../fields";

const Elements = () => {
  return (
    <div>
      <h1>Elements</h1>
      {Object?.values(fields)?.map((item) => (
        <div className="bg-gray-300 p-4 m-2">{item}</div>
      ))}
    </div>
  );
};

export default Elements;
