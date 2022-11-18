import './BeerDetailPage.css';
import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/random"

function RandomBeersPage() {

    const [beer, setBeer] = useState({})
 
    useEffect(() =>{
       const apiCall = async () => {
        try {
            const res = await axios.get(apiEndpoint)
            console.log(res.data)
            setBeer(res.data)
        } catch (error) {
            console.log(error)
        }
       }
 
       apiCall()
    }, [])

    return (
        <main>
            <Navbar/>
            {beer && 
            <section id="beer-detail">
                <img className="detail-img" src={beer.image_url} alt="Beer"/>
                <div className="detail-content" >
                    <div className="flex-between">
                        <h1>{beer.name}</h1>
                        <p className="font-grey bold">{beer.attenuation_level}</p>
                    </div>
                    <div className="flex-between">
                        <p className="tagline" >{beer.tagline}</p>
                        <p className="sm-bold">{beer.first_brewed}</p>
                    </div>
                    <p className="detail-description">{beer.description}</p>
                    <p className="font-grey sm-bold">{beer.contributed_by}</p>
                </div>
            </section>
            }
            {!beer && <div>Sorry this Page does not exist</div>}
        </main>
    );
}

export default RandomBeersPage;