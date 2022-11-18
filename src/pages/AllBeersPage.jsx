import './AllBeersPage.css';
import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom';

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers"

function AllBeersPage() {

    const [beers, setBeers] = useState([])
 
    useEffect(() =>{
       const apiCall = async () => {
        try {
            const res = await axios.get(apiEndpoint)
            setBeers(res.data)
        } catch (error) {
            console.log(error)
        }
       }
 
       apiCall()
    }, [])

    return (
        <main>
            <Navbar/>
            <section className="beers-list">
                {beers && beers.map((beer) => {
                    return (
                        <Link to={`/beers/${beer._id}`} className="list-item" key={beer._id}>
                            <div className="list-img-container" >
                                <img src={beer.image_url} className="list-img"  alt="Beer"/>
                            </div>
                            <div className="list-img-content" >
                                <h2>{beer.name}</h2>
                                <p className="tagline">{beer.tagline}</p>
                                <p className="subline">Created by: <span>{beer.name}</span></p>
                            </div>
                        </Link>
                    )
                })
                }
            </section>
        </main>
    );
}

export default AllBeersPage;