import React, { useState } from 'react'
import './Search.css'
import { useNavigate } from 'react-router-dom'
import { actionTypes } from './reducer';
import { useStateValue } from '../components/StateProvider';


function Search({hideButton}) {
  const[{},dispatch]=useStateValue();
  
    const [input,setInput]=useState('')
    const navigate=useNavigate();
    const search = (e) =>{
        e.preventDefault(); 
        console.log(input)
  
        dispatch({
        type:actionTypes.SET_SEARCH_TERM,
        term:input 
       })
       
        navigate('/search')
      };
      
  return (
    <form className='search'>
        <div className="search__input">
        <i className=" ma fa-solid fa-magnifying-glass"></i>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
        <i className="fa-solid fa-microphone"></i>

        </div>
        {!hideButton ? (
            <div className="search__button">
            <button  type='submit' onClick={search}>Google Search</button>
            <button >I'm Feeling Lucky</button>
        </div>
        ):(
          <div className="search__button">
          <button className='searchButton_hidden' type='submit' onClick={search}>Google Search</button>
          <button className='searchButton_hidden'>I'm Feeling Lucky</button>
      </div>
        )}
       
      
    </form>
  )
}

export default Search
