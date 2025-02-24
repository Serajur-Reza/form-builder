import "./App.css";
import Code from "./components/Code";
import Elements from "./components/Elements";
import Fields from "./components/Fields";

function App() {
  return (
    <>
      <div className="font-bold text-center mt-4">
        <h1 className="text-3xl">React Form Builder</h1>
        <h3 className="text-xl mt-4">
          Build forms without coding for your react application. Just drag and
          drop a field to create a form for your react application.
        </h3>

        <div className="grid grid-cols-3 gap-4">
          <Elements />
          <Fields />
          <Code />
        </div>
      </div>
    </>
  );
}

export default App;
