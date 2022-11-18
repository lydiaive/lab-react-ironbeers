import BeerTeaser from "../components/BeerTeaser"
import beersImg from "../assets/beers.png"
import newBeersImg from "../assets/new-beer.png"
import randomBeersImg from "../assets/random-beer.png"


function HomePage() {

    return (
        <section className="teaser-container">
            <BeerTeaser 
                img={beersImg}
                title="All Beers"
            />
            <BeerTeaser
                img={newBeersImg}
                title="Random Beer"
            />
            <BeerTeaser
                img={randomBeersImg}
                title="New Beer"
            />
        </section>
    )
}

export default HomePage