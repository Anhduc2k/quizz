import { useState, useEffect } from "react";

export default function BoxQuestionMini({ index, active, ...props }) {
  const [classActive, setClassActive] = useState("");
  useEffect(() => {
    if (!!active) setClassActive("active");
    else setClassActive("");
  }, [active]);

  return (
    <div
      {...props}
      className={
        "d-flex justify-content-between align-items-center box-question-mini " +
        classActive
      }
      style={{ marginTop: 10, cursor: "pointer" }}
    >
      <h5 style={{ marginLeft: 20 }}>{index}</h5>
      <div
        className="bg-white d-flex align-items-end justify-content-center"
        style={{ width: 200, height: 120, paddingBottom: 10 }}
      >
        <div>
          <div className="d-flex justify-content-center align-items-center">
            <div style={{ border: "1px solid #3333", width: 70, height: 20 }} />
            <div style={{ marginLeft: 5 }} />
            <div style={{ border: "1px solid #3333", width: 70, height: 20 }} />
          </div>
          <div style={{ marginTop: 5 }} />
          <div className="d-flex justify-content-center align-items-center">
            <div style={{ border: "1px solid #3333", width: 70, height: 20 }} />
            <div style={{ marginLeft: 5 }} />
            <div style={{ border: "1px solid #3333", width: 70, height: 20 }} />
          </div>
        </div>
      </div>
    </div>
  );
}
