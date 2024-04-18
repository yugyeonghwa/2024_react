import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Ex01 from "./step09_list/Ex01";
import Ex02 from "./step09_list/Ex02";
import NameForm from "./step10_form/NameForm";
import SelectForm from "./step10_form/SelectForm";


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

    {/* <VideoExam /> */}

    {/* <Sample01 /> */}

    {/* <Sample02 /> */}
    
    {/* <Sample03 /> */}

    {/* <Sample04 /> */}

    {/* <Sample05 /> */}

    {/* <Ex01 isLoggedin="" />  => false
        <Ex01 isLoggedin="내용" />  => true */}
    {/* <Ex01 isLoggedin={false} /> */}

    {/* <Ex02 /> */}

    {/* <Ex03 /> */}

    {/* <Ex04 msg={[]} /> */}
    {/* <Ex04 msg={[1, 5]} /> */}

    {/* <Ex05 /> */}

    {/* <Ex06 /> */}

    {/* <Ex07 /> */}

    {/* <Ex01 list={[1, 2, 3, 4, 5]} /> */}

    {/* <Ex02 /> */}

    {/* <NameForm /> */}

    <SelectForm />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
