import { useRef } from "react";

export default function BoxAnswer({ content, status, onClick, ...props }) {
  const ref = useRef(null);

  return (
    <div
      {...props}
      onClick={() => {
        onClick();
        ref.current.click();
      }}
      className={"anwser-box bg-white p-3 " + status}
      style={{
        cursor: "pointer",
        width: "48%",
        height: 120,
        borderRadius: 5,
        transition: "all .3s",
      }}
    >
      <input
        ref={ref}
        type="radio"
        name="anwser"
        style={{ verticalAlign: "middle" }}
      />{" "}
      {content}
    </div>
  );
}
