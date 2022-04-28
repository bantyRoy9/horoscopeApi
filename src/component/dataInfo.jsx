import React from 'react'

const DataInfo = (props) => {
  // console.log(data);
  const data = props.infoData;
  const user = props.userData
  return (
    <article className='details'>
      <div className='details-a'>
        <h1>{user.name}</h1>
        <h2>{data.date_range}</h2>
      </div>
      <div className='details-b'>
        <h2>Date: {data.current_date} </h2>
      </div>
      <div className='details-c'>
        <p>{data.description}</p>
      </div>
      <div className='details-d'>
        <span>Compatibility: <div>{data.compatibility}</div></span>
        <span>Mood: <div>{data.mood}</div></span>
        <span>Color: <div>{data.color}</div></span>
        <span>Lucky number: <div>{data.lucky_number}</div></span>
        <span>Lucky time: <div>{data.lucky_time}</div></span>
      </div>
    </article>
  )
}

export default DataInfo


