import { useState, useRef } from "react"

const DiaryEditor = ({ onCreate }) => {


    const [state, setState] = useState({
        title : "",
        content : "",
        myScore : 1
    })

    const titleInput = useRef();
    const contentInput = useRef();

    const handleChangeInput = (e) => {

        setState({
            ...state,
            [e.target.name] : e.target.value
            
        })
    }

    const handleConfirmBtn = () => {
        if (state.title.length < 1) {
            titleInput.current.focus();
            return
        }
        onCreate(state.title, state.content, state.myScore)
        alert("저장성공")
        setState({
            title : "",
            content : "",
            myScore : 1
        })

    }

    return(
        <div className="DiaryEditor">
            <input type="text" placeholder="제목을 입력하세요"
                name="title"
                value={state.title}
                ref={titleInput}
                onChange={handleChangeInput}
            />
            <textarea
                name="content"
                value={state.content}
                onChange={handleChangeInput}
            />
            <select name="myScore"
                value={state.myScore}
                onChange={handleChangeInput}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>
            <button onClick={handleConfirmBtn}>확인</button>
        </div>
    )
}
 


export default DiaryEditor