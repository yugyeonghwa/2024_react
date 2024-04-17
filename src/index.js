import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Library from "./step01_jsx/Library";
import Clock from "./step02_element/Clock";
import Welcome from "./step03_component/Welcome";
import Comment from "./step03_component/Comment";
import CommentList from "./step03_component/CommentList";
import NotificationList from "./step04_state/NotificationList";
import Count from "./step04_state/Count";
import Customer from "./step05_prop/Customer";
import BookList from "./step05_prop/BookList";
import Books from "./static-data/Books";
import Counter from "./step06_hook/Counter";
import Counter2 from "./step06_hook/Counter2";
import Counter3 from "./step06_hook/Counter3";
import Counter4 from "./step06_hook/Counter4";
import Customer01 from "./step06_hook/Customer01";
import SmartHome from "./step06_hook/SmartHome";
import SmartHome2 from "./step06_hook/SmartHome2";
import TextInput from "./step06_hook/TextInput";
import VideoExam from "./step06_hook/VideoExam";

const root = ReactDOM.createRoot(document.getElementById("root"));
// UI를 업데이트하는 유일한 방법은 새로운 엘리먼트를 생성하고 이를 root.render()로 전달하는 것
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

root.render(
  <React.StrictMode>
    {/* <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" /> */}
    
    {/* <CommentList /> */}
    
    {/* <NotificationList /> */}

    {/* <Count /> */}

    {/* <Customer id="yu@naver.com" name="yu" orders={['A001', 'B002', 'C003']} /> */}

    {/* <BookList books={Books} /> */}

    {/* <Counter /> */}

    {/* <Counter2 /> */}

    {/* <Counter3 /> */}

    {/* <Counter4 /> */}

    {/* <Customer01 /> */}

    {/* <SmartHome /> */}

    {/* <SmartHome2 /> */}

    {/* <TextInput /> */}

    <VideoExam />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
