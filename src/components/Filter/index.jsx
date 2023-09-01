import { TypeFilter } from './TypeFilter'
import { RatingFilter } from './RatingFilter'
import './Filter.css'

function Filter () {
    return (
        <div className='FilterContainer'>
            <TypeFilter 
                name='Category'
                options={["Electronics", "Jewelry", "Men's Clothing", "Women's Clothing" ]}
            />
            <RatingFilter />
        </div>
    )
}

export { Filter }