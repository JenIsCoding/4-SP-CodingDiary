function DiaryEntry(props) {

  return (
      <div className="diary-section">
        <h3 className="date">{props.day}/{props.month[0]}/{props.year}</h3>
        <h3 className="progLang">{props.programmingLanguage}</h3>
        {props.linkResource !== " " ? <a href={props.linkResource}>{props.titleResource}</a> : props.titleResource}
        <p className="topic">{props.topic}</p>
      </div>
  )
}

export default DiaryEntry