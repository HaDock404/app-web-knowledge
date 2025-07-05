import { Link } from "react-router-dom"

function QuizCardTest({title, img_path, to, data}) {
    return (
        <Link to={to} className="quiz_card_article" state={{ quizData: data }}>
            <div className="quiz_card_title">
                {title}
            </div>
            <div className="quiz_card_img">
                <img src={img_path} alt="" />
            </div>
        </Link>
    )
}

export default QuizCardTest