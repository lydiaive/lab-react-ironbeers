import './NewBeerPage.css';
import axios from "axios"
import { useState } from "react"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";

const apiEndpoint ="https://ih-beers-api2.herokuapp.com/beers/new"

function NewBeerPage() {

  const navigate = useNavigate()

  const [input, setInput] = useState({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
      submit: "",
      })

    
    /* const handleChange = (event) => { 
      setInput (prev => {
        return {
          ...prev,
          [event.target.name]: event.target.value
        }
      })

    }
    const handleSubmit = async (event) => {
      event.preventDefault()
    try {
      const res = await axios.post(apiEndpoint, input)
      console.log(res)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  } */
  

  const submitHandler = (event) => {
    event.preventDefault()

    const newBeer =  {
      name: input.name,
      tagline: input.tagline,
      description: input.description,
      first_brewed: input.first_brewed,
      brewers_tips: input.brewers_tips,
      attenuation_level: input.attenuation_level,
      contributed_by: input.contributed_by,
      submit: input.submit,
    }

    const postApi = async () => {
        try {
          await axios.post(apiEndpoint, newBeer)
          navigate("/")
        } catch (error) {
          console.log(error)
        }
    }

    postApi()

    setInput({name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: null,
    contributed_by: "",
    submit: "",})
    
  }


  return (
    <main>
        <Navbar/>
        <h1>Upload a new Beer</h1>
          <form id="new-beer-form" onSubmit={submitHandler}>
            <label>Name</label>
            <input name="name" type="text" value={input.name} onChange={(event) => setInput({...input, name: event.target.value})}/> 

            <label>Tagline</label>
            <input name="tagline" type="text" value={input.tagline} onChange={(event) => setInput({...input, tagline: event.target.value})}/>

            <label>Description</label>
            <textarea name="description" rows="4" cols="50" value={input.description} onChange={(event) => setInput({...input, description: event.target.value})}></textarea>

            <label>First brewed</label>
            <input name="first_brewed" type="text" value={input.first_brewed} onChange={(event) => setInput({...input, first_brewed: event.target.value})}/>

            <label>Brewers Tips</label>
            <input name="brewers_tips" type="text" value={input.brewers_tips} onChange={(event) => setInput({...input, brewers_tips: event.target.value})}/>

            <label>Attenuation Level</label>
            <input name="attenuation_level" type="number" value={input.attenuation_level} onChange={(event) => setInput({...input, attenuation_level: event.target.value})}/>

            <label>Contributed by</label>
            <input name="contributed_by" type="text" value={input.contributed_by} onChange={(event) => setInput({...input, contributed_by: event.target.value})}/>

            <button type="submit">Create</button>
          </form>

      </main>
  );
}

export default NewBeerPage;