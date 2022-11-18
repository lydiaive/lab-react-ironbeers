import './BeerDetailPage.css';
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom';

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/"

function BeerDetailPage() {

    const { beersId } = useParams()
    const [beer, setBeer] = useState({})
 
    useEffect(() =>{
       const apiCall = async () => {
        try {
            const res = await axios.get((apiEndpoint + beersId))
            console.log(res.data)
            setBeer(res.data)
        } catch (error) {
            console.log(error)
        }
       }
 
       apiCall()
    }, [beersId])

    return (
        <main>
            <Navbar/>
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
        </main>
    );
}

export default BeerDetailPage;