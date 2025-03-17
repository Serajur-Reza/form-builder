import "./App.css";
import Code from "./components/Code";
import Elements from "./components/Elements";
import Fields from "./components/Fields";

function App() {
  return (
    <>
      <div className="font-bold  mt-4">
        <h1 className="text-3xl text-center">Form Builder</h1>


        <div className="grid grid-cols-2 gap-4 m-4">
          <Elements />
          <Fields />
          {/*<Code />*/}
        </div>
      </div>
    </>
  );
}

export default App;
