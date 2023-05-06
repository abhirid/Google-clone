import React from 'react'
import { useStateValue } from '../components/StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response'
import { Link } from 'react-router-dom';
import './SearchPage.css'
import Search from './Search';

function SearchPage() {
    const[{term='radha'},dispatch]=useStateValue();
   const{data}=useGoogleSearch(term)  //live api call
    //console.log(data)
    
    //const data=Response;
  return (
    <div className='searchPage'>
        <div className="searchPage__header">
       
        <Link to='/'> <img className='searchPage__logo' src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" /></Link>
        <div className="searchPage__headerBody">
            <Search hideButton/>
            <div className="searchPage__options">
                <div className="searchPage__optionsLeft">
                    <div className="searchPage__options">
        <i className=" ma fa-solid fa-magnifying-glass"></i>
        <Link to='/all'>All</Link>
        </div>
        <div className="searchPage__options">
        <i className="fa-regular fa-image"></i>
        <Link to='/images'>Images</Link>
        </div>
        <div className="searchPage__options">
        <i className="fa-regular fa-newspaper"></i>
        <Link to='/news'>News</Link>
        </div>
        <div className="searchPage__options">
        <i className="fa-solid fa-play"></i>
        <Link to='/video'>Video</Link>
        </div>
        <div className="searchPage__options">
        <i className="fa-solid fa-book-bookmark"></i>
        <Link to='/books'>Books</Link>
        </div>
        <div className="searchPage__options">
        <i class="fa-solid fa-ellipsis-vertical"></i>
        <Link to='/more'>More</Link>
        </div>
        </div>
        <div className="searchPage__optionsRight">
            <div className="searchPage__options">
            <Link to='/tools'>Tools</Link>
            </div>
        </div>
        </div>
        </div>
    </div>
    {true &&(
        <div className="searchPage__results">
            <p className="searchPage__resultcount">
                About {data?.searchInformation.formattedTotalResults} results {data?.searchInformation.formattedSearchTime} seconds for {term}
            </p>
            {data?.items.map(item =>(
                <div className="searchPage__result">
                   <a href={item.link}>{item.pagemap?.cse_image?.length >0 && item.pagemap?.cse_image[0]?.src && (<img
                   className='searchPage__resultImage' src={item.pagemap?.cse_image[0]?.src}alt=""/>)}{item.displayLink}</a>
                   <a className='searchPage__resultTitle' href={item.link}>
                    <h2>{item.title}</h2>
                    </a> 
                    <p className="searchPage__resultSnippet">
                        {item.snippet}
                        
                    </p>
                </div>


            ))}
        </div>
    )}
    </div>
  )
  }

export default SearchPage;
