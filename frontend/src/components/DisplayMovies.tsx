import { useEffect, useState } from "react";
import Movie from "../types/Movie";

export default function DisplayMovies()
{
    const [data, setData] = useState<Movie[]>();

    useEffect(() => {
        async function getData()
        {
            const url = 'https://localhost:4000/';
            const data = await fetch(`${url}api/Movie`);
            const movies = await data.json();
            setData(movies.movies);
            
        }
        getData();
    },[])

    console.log(data);
    
    return(
        <div>
            {
                data ?
                <table className="table table-striped">
                <thead>
                    {
                        Object.keys(data[0]).map(h => {
                            return(<th>{h}</th>)
                        })
                    }
                </thead>
                <tbody>
                {
                    data.map((movie: Movie) => {
                        return (
                            <tr key={movie.movieId}>
                                <td>{movie.movieId}</td>
                                <td>{movie.category}</td>
                                <td>{movie.title}</td>
                                <td>{movie.year}</td>
                                <td>{movie.director}</td>
                                <td>{movie.rating}</td>
                                <td>{movie.edited}</td>
                                <td>{movie.lentTo}</td>
                                <td>{movie.notes}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
                
            </table> 
            : <h1>Loading</h1>
                
            }
            
        </div>
        
    )
}