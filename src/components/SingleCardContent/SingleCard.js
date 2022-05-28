import { Badge } from '@material-ui/core'
import React from 'react'
import { img_300, unavailable } from '../../config/config'
import './SingleCard.css'

const SingleCard = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,}) => {
  return (
    
    <>
    <div className='media'>
        <Badge badgeContent={vote_average} overlap={"rectangular"}  color={vote_average > 7 ? "primary" : "secondary"}/>
        <img className='poster' src={poster ? `${img_300}/${poster}` : unavailable} alt={title}/>
        <b className='title'>{title}</b>
        <span className='subTitle'>
        <span >
            {media_type === "tv" ? "TV Series" : "Movie"}
        </span>
        <span>
            {date}
        </span>
        </span>
    </div>
    </>
  )
}

export default SingleCard