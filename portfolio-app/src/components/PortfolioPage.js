import React from 'react'
import {Link} from 'react-router-dom' 

const PortfolioPage = (props) => {
    console.log(props)

    const id = props.match.params.id
    return (
        <div>
        <h1>This is my work!</h1>

        <div>
            Check out the links
        </div>
          <Link to="/portfolio/1">Item 1</Link>
          <Link to="/portfolio/2">Item 2 </Link>
          <Link to="/portfolio/3">Item 3</Link>

          {id && <p>Here is amazing item {id}</p> }
        </div>
    )
}

export default PortfolioPage