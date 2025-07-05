import '../styles/homepage.css'
import QuizCard from './QuizCard'

import articleData1 from '../data/Article1.json';
import articleData2 from '../data/Article2.json';

function BodyHomePage() {
    return (
        <section className="body_homepage_section">
            <article className='body_homepage_article_header'>
                <span className='body_homepage_article_header_title'>Dashboard</span>
            </article>
            <QuizCard
                to="/article/articlepage1"
                data={articleData1}
                title="Pourquoi jouer à Fortnite ?"
                img_path="https://storage.googleapis.com/fortnite-erwin/image1.jpg"
            />
            <QuizCard
                to="/article/articlepage2"
                data={articleData2}
                title="Installation sur PC"
                img_path="https://storage.googleapis.com/fortnite-erwin/image2.jpg"
            />
        </section>
    )
}

export default BodyHomePage