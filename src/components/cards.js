import React from 'react'

const cards = ({name,username, email, id,phone,website}) => {
    // constructuring
    // const {name, email, id} = props;
  return (
    <div className='bg-light-green dib pa3 ma2 grow bw2 shadow-5'>
     <img  alt='robots' src={`https://robohash.org/${id}?200x200`}/>
     <div>
        {/* <h2>{props.name}</h2>
        <p> {props.email}</p> */}
        <h1>{name}</h1>
        <strong> {username}</strong>
        <p> {email}</p>
        <p> {phone}</p>
        <p> {website}</p>
       
     </div>
    </div>
  )
}

export default cards