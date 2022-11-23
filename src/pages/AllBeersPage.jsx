import './AllBeersPage.css';
import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import { Link } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
import searchIcon from "../assets/search.png"




const orgApiEndpoint = "https://ih-beers-api2.herokuapp.com/beers"

function AllBeersPage() {

    const [searchParam, setSearchParam] = useSearchParams()
    


    const [apiEndpoint, SetApiEndpoint] = useState(orgApiEndpoint)
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
    }, [apiEndpoint])

    const searchHandler = (event) => {
        const {name, value} = event.target;
        setSearchParam({[name]: value})
        SetApiEndpoint(orgApiEndpoint+"/search?q="+value)
        console.log(searchParam)
    }

    return (
        <main>
            <Navbar/>
            <div className="searchbar">
                <input className="search-input" name="q" onChange={searchHandler}/>
                <img className="search-icon" src={searchIcon} alt="search"/>
            </div>
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