import { Link } from 'react-router-dom'
import './BeerTeaser.css'

function BeerTeaser(props) {

    const  {img, title, path} = props

    return (
        <Link to={path} className="teaser">
            <div className="teaser-img-container">
                <img src={img} alt="beer teaser"className="teaser-img"/>
            </div>
            <div className="teaser-content">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula urna, viverra vel placerat in, vulputate at nulla. In convallis maximus aliquet.</p>
            </div>
        </Link>
    )
}

export default BeerTeaser