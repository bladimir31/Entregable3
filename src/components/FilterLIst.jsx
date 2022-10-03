import React from 'react'
import "./FilterList.css"

const FilterLIst = ({ dataList, setSearchId }) => {

    const handleClick = id => setSearchId(id)



    return (
            <ul id='list' className='list_item' >
                {
                    dataList?.map(location => (
                        <li 
                            onClick={() =>{ handleClick(location.id);
                            
                            }}
                             key={location.id}>{location.name}</li>
                    ))
                }
            </ul>
    )
}

export default FilterLIst