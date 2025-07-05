import BodyHomePage from "../components/BodyHomePage"
import Header from "../components/Header"
import '../styles/homepage.css'

function HomePage() {
    return (
        <section className="homepage">
            <Header />
            <BodyHomePage />
        </section>
    )
}

export default HomePage