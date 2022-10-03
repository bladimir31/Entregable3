import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/ResidentInfo'
import Location from './components/Location'
import getRandomNumber from './utils/getRandomNumber'
import FilterLIst from './components/FilterLIst'
import ErrorScreen from './components/ErrorScreen'
import reset from "./utils/removeList"


function App() {

  const [location, setLocation] = useState()
  const [searchId, setSearchId] = useState("")
  const [dataList, setDataList] = useState()
  const [hasError, setHasError] = useState()


  useEffect(() => {

    let id = getRandomNumber()

    if (searchId) {
      id = searchId
    }

    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)

      .then(res => {
        setHasError(false);
        setLocation(res.data)
      })

      .catch(err => setHasError(true))
  }, [searchId])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchId(e.target.idLocation.value)
  }


  const handleChange = e => {

    
    if (e.target.value === "") {
     
      return setDataList()
    }

    const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`

    axios.get(URL)
      .then(res => setDataList(res.data.results))
      .catch(err => console.log(err))

      if (e.target.value.length === 0) {
     
        return null
      }

  }

  console.log(location);

  return (

    <div className="App">

      <nav></nav>

      <form id='form' className='Search_card' onSubmit={handleSubmit}>
        <input
          onClick={reset}
          id='idLocation'
          autoComplete='off'
          placeholder='Enter another location'
          type="text"
          onChange={handleChange}
        />
        <button
          onClick={reset}
          id='Btn_search'
          className='btn'>Search</button>
      </form>

      <section onClick={reset} id='Filter_list' className='Filter_list'>
        {
          <FilterLIst
            dataList={dataList}
            setSearchId={setSearchId}
          />
        }
      </section>
      {
        hasError ?
          <ErrorScreen />
          :
          <>
            <Location location={location} />
            <h2>Residents</h2>
            <div className='Box_residents'>
              {
                location?.residents.map(url => (
                  <CardResident
                    key={url}
                    url={url}
                  />
                ))
              }

            </div>
          </>
      }

    </div>
  )
}

export default App
