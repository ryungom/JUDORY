import DiaryItems from "./DiaryItems"

const DiaryList = ({diaryList}) => {
    console.log(diaryList)
    return(
        <div className="DiaryList">
            <h2>총 {diaryList.length}개의 다이어리가 들어왔습니다</h2>
            {diaryList.map((it) => (
                <DiaryItems key={it.id} {...it}/>
            ))}
        </div>
    )
}

export default DiaryList