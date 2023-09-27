const DiaryItems = ({title, myScore, content, date}) => {
    return(
        <div className="DiaryItems">
            <div>제목 : {title} | <span>{myScore}</span></div>
            <div>{new Date(date).toLocaleString()}</div>
            <div>내용 : {content}</div>
        </div>
    )
}

export default DiaryItems;