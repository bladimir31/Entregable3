import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./ResidentInfo.css"

const ResidentInfo = ({ url }) => {

  const [resident, setResident] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setResident(res.data))

      .catch(err => console.log(err))
  }, [])



  return (
    <article className='Resident_card'>
      <section className='header'>
        <img src={resident?.image} alt="" />
        <div className='status'>
          <span id='circle' className={resident?.status}>0..0</span>
          <h3>{resident?.status}</h3>
        </div>
      </section>
      <section className='items'>
        <h2 className='items_name'>{resident?.name}</h2>
        <ul className='items_features'>
          <li><span>Specie: <br /></span>{resident?.species}</li>
          <li><span>Origin: <br /></span>{resident?.origin.name}</li>
          <li><span>Episodes where appear: <br /></span>{resident?.episode.length}</li>
        </ul>
      </section>
    </article>
  )
}


export default ResidentInfo