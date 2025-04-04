import { useAppSelector } from "@/store/hooks.ts";
import { useEffect, useState } from "react";
import { FaClipboardCheck } from "react-icons/fa";

const Code = () => {
  const elements = useAppSelector((state) => state.form.forms);
  const [htmlCode, setHtmlCode] = useState("");

  const generateHTML = () => {
    if (elements.length > 0) {
      const html = elements
        .map((element) => {
          console.log(element.code);
          return element.code;
        })
        .join("\n");

      setHtmlCode(`<form className="space-y-4">\n ${html} \n \t </form>`);
    }

    // setHtmlCode(formatHtml(html));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(htmlCode).then(() => {
      alert("HTML copied to clipboard!");
    });
  };

  console.log(elements);

  useEffect(() => {
    generateHTML();
  }, [elements]);
  return (
    <div>
      <div className={"flex justify-end"}>
        {" "}
        <button
          onClick={copyToClipboard}
          className={"bg-black text-white text-md rounded-md p-3 mt-4"}
        >
          <FaClipboardCheck />
        </button>
      </div>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
          background: "#f4f2f4",
          marginTop: 15,
          borderRadius: 5,
          padding: "15px",
        }}
      >
        <code className={"text-sm m-4 font-normal"}>
          {" "}
          {htmlCode
            .split("\n")
            .map((line) => `  ${line}`) // Add indentation
            .join("\n")}
        </code>
      </pre>
    </div>

    // <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
    //             {htmlCode}
    //           </pre>
  );
};

export default Code;
