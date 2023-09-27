import './App.css';
import DiaryEditor from './DiaryEditor'
import DiaryList from './DiaryList';
import { useState, useRef } from 'react';

function App() {

// const dumyList = [
//   {
//     id : 1,
//     title : "첫째날 전방낙법",
//     content : "낙법을 배웠다 ㅈㄴ개아프다",
//     date : new Date().getTime(),
//     myScore : 4
//   },
//   {
//     id : 2,
//     title : "둘째날 후방낙법",
//     content : "뒤로 잘 넘어질 수 있을까",
//     date : new Date().getTime(),
//     myScore : 2
//   },
//   {
//     id : 3,
//     title : "셋째날 측방낙법",
//     content : "이게 제일 많이 쓰인다는데",
//     date : new Date().getTime(),
//     myScore : 1
//   },
//   {
//     id : 4,
//     title : "넷째날...안감",
//     content : "온몸이쑤셔서 못감",
//     date : new Date().getTime(),
//     myScore : 5
//   }
// ]

const [data, setData] = useState([])
const idNum = useRef(0)


const onCreate = (title, content, myScore) => {
  const date = new Date().getTime();
  const newItem = {
    title,
    content,
    myScore,
    date,
    id: idNum.current
  }
  idNum.current += 1;
  setData([newItem, ...data])
}


  return (
    <div className="App">
      <h1>하루 유도 기록을 기록하기 위한 재준쓰 프로젝트</h1>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data}/>
    </div>
  );
}

export default App;
