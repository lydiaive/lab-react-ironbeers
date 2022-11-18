import './BeerTeaser.css'

function BeerTeaser(props) {

    const  {img, title} = props

    return (
        <div>
            <img src={img} alt="beer teaser"/>
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula urna, viverra vel placerat in, vulputate at nulla. In convallis maximus aliquet. Ut bibendum erat id erat lacinia, at porta mauris auctor. Curabitur aliquet pulvinar eleifend. Vestibulum convallis turpis nec rutrum semper. Maecenas sollicitudin elementum quam id mattis. Mauris porta nisl a arcu finibus lobortis. In lobortis libero vel lectus rutrum, vitae finibus nunc ultricies. Sed egestas enim at urna pulvinar faucibus. Donec dictum leo sit amet ligula congue consectetur. Nunc sit amet diam vulputate, aliquam nulla eget, placerat ligula. Morbi eget nunc odio.</p>
        </div>
    )
}

export default BeerTeaser