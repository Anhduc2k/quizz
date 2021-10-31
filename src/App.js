import "./bootstrap5.0.2/bootstrap.scss";
import "./bootstrap5.0.2/bootstrap-grid.scss";
import "./bootstrap5.0.2/bootstrap-reboot.scss";
import "./bootstrap5.0.2/bootstrap-utilities.scss";
import "./fontawesome/css/all.min.css";

import "./App.css";

import data from "./database.json";
import { useState, useRef } from "react";
import BoxQuestionMini from "./components/BoxQuestion/BoxQuestion";
import BoxAnswer from "./components/BoxAnswer/BoxAnswer";

function App() {
  const [_question, setQuestion] = useState(data[0]);
  const [limit, setLimit] = useState(2);
  const refInputReset = useRef();

  const initAnswer = {
    a: "",
    b: "",
    c: "",
    d: "",
  };
  const [answerList, setAnswerList] = useState(initAnswer);

  const checkAnwer = (answer) => {
    if (answer === _question.correct) {
      let temp = { ...initAnswer };
      temp[answer] = "correct";
      setAnswerList(temp);
    } else {
      let temp = { ...initAnswer };
      temp[answer] = "incorrect";
      setAnswerList(temp);
    }
  };

  return (
    <div className="App">
      <header style={{ height: 70, boxShadow: "0 0 10px 1px #3333" }}>
        <div className="row h-100">
          <div className="col-3 d-flex align-items-center justify-content-center">
            <button className="btn btn-primary">
              {" "}
              <i className="fas fa-chevron-left"></i> Quay lại
            </button>
            <span style={{ marginLeft: 10 }} />
            <button className="btn btn-success">
              {" "}
              <i className="far fa-save"></i> Lưu
            </button>
          </div>
          <div
            className="col-9 d-flex align-items-center"
            style={{ paddingLeft: 100 }}
          >
            <span className="btn btn-info">Lớp 3</span>{" "}
            <span style={{ marginLeft: 10 }} />
            <span className="btn btn-secondary">Toán học</span>{" "}
            <span style={{ marginLeft: 10 }} />
            <h5 className="m-0">Câu hỏi khó</h5>
          </div>
        </div>
      </header>

      <main>
        <div className="row">
          <div
            className="col-3"
            style={{ backgroundColor: "#6dc5d333", minHeight: "100vh" }}
          >
            {data.slice(0, limit).map((value, index) => (
              <BoxQuestionMini
                key={index}
                index={index + 1}
                active={value.question === _question.question ? true : false}
                onClick={() => {
                  setQuestion(value);
                  setAnswerList(initAnswer);
                  refInputReset.current.click();
                }}
              />
            ))}

            <div
              onClick={() => {
                if (limit <= data.length) setLimit(limit + 1);
              }}
              className="d-flex justify-content-between align-items-center"
              style={{ marginTop: 10, cursor: "pointer" }}
            >
              <h5 style={{ marginLeft: 20 }}>{limit + 1}</h5>
              <div
                className="bg-white d-flex align-items-center justify-content-center"
                style={{ width: 200, height: 120, paddingBottom: 10 }}
              >
                <i className="fas fa-plus"></i>
              </div>
            </div>
          </div>
          <div className="col-9" style={{ backgroundColor: "#0a0a0a0d" }}>
            <div className="box p-4">
              <div className="title" style={{ textAlign: "left" }}>
                <b> Câu hỏi: </b>

                <div style={{ marginTop: 30 }} />
                <div
                  className="title-box bg-white"
                  style={{
                    border: "3px solid #0dcaf0",
                    height: 150,
                    borderRadius: 5,
                    padding: 20,
                  }}
                >
                  <div
                    className="title-content w-100 h-100 p-2"
                    style={{ backgroundColor: "#0000000a", borderRadius: 5 }}
                  >
                    {_question.question}
                  </div>
                </div>
              </div>

              <form
                className="answer"
                style={{ textAlign: "left", marginTop: 50 }}
              >
                <b>Các lựa chọn:</b>
                <div style={{ marginTop: 30 }} />
                <div className="d-flex justify-content-between align-items-center">
                  <BoxAnswer
                    content={_question.answer.a}
                    status={answerList.a}
                    onClick={() => checkAnwer("a")}
                  />
                  <BoxAnswer
                    content={_question.answer.b}
                    status={answerList.b}
                    onClick={() => checkAnwer("b")}
                  />
                </div>
                <div style={{ marginTop: 30 }} />
                <div className="d-flex justify-content-between align-items-center">
                  <BoxAnswer
                    content={_question.answer.c}
                    status={answerList.c}
                    onClick={() => checkAnwer("c")}
                  />
                  <BoxAnswer
                    content={_question.answer.d}
                    status={answerList.d}
                    onClick={() => checkAnwer("d")}
                  />
                </div>

                <input ref={refInputReset} type="reset" className="d-none" />
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
