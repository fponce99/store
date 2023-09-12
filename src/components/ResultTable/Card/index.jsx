
import { Detail } from './Detail'
import './Card.css'

function Card ({ image, title, price } ) {
    return (
        <div className='CardContainer'>
            <div className='ProductImageContainer'>
                <img src={image}/>
            </div>
            <Detail 
                image = {image}
                title = {title}
                price = {price}
            />
        </div>
    )
}

export { Card }