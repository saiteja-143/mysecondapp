import {Movie} from "./Movie_App.js";
import { useState } from 'react';

export function Movielist({Movies}){
 
    return(
    <section className="Movie-list">
      
    {Movies.map(({Movie_name,poster,Rating,Summary})=>(<Movie Movie_name={Movie_name}  poster={poster}   Rating={Rating}   Summary={Summary}/>))}
    </section>
    );
  }
   