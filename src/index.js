import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom";
import axios from 'axios';


const App=()=>{
  const [movies,setMovies]= useState([]);
  const [search,searchMovie]=useState("harry");
  const [submit,setsubmit]=useState("harry");
  const [liked_id,setlike]=useState(['id','status:false']);
  const getMovies=async(input)=>{
    const moviesrequest= await axios.get(`http://www.omdbapi.com/?s=${input}&apikey=86c14a9b`);
    console.log(moviesrequest.data.Search);
    setMovies(moviesrequest.data.Search);
    // return moviesrequest.data.search;
  }
  useEffect(()=>{
    getMovies(submit);
  },[submit]);
   
  function like(id){
    console.log(id);
    setlike(prev=>[...prev,{id,status:'liked'}]);
  }
console.log(movies);
  return (
      <div>
        <input value={search} onChange={(e)=>searchMovie(e.target.value)} type="text" placeholder="Search Movie here"/>
        <button type="submit" onClick={()=>{setsubmit(search===""?"Harry":search)}}>Search</button>
        <ol>
          {
             movies.length>0? movies.map((movie)=>{
             return (
              <li>
                <p>{movie.Title}</p>
                  <button type="submit" onClick={()=>{like(movie.imdbID)}}> Like</button>
              </li>
             )
             }):''
         }
        </ol>
         
      </div>
  )
}
  ReactDOM.render(<App/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
