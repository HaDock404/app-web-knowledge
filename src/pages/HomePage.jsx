import BodyHomePage from "../components/BodyHomePage"
import Header from "../components/Header"
import Footer from "../components/Footer"
import '../styles/homepage.css'

function HomePage() {
    return (
        <section className="homepage">
            <Header />
            <BodyHomePage />
            <Footer />
        </section>
    )
}

export default HomePage