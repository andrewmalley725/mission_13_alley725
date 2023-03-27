import React from "react";
import data from "../data/MovieData";

export default function DisplayMovies()
{
    let movies = data.MovieData;
    let headers: string[] = ['Title', 'Rating', 'Year', 'Category', 'Director', 'Edited?']
    
    return(
        <div>
            <table className="table table-striped">
                <thead>
                    {
                        headers.map(i => {
                            return(
                                <th>{i}</th>
                            )
                        })
                    }
                </thead>
                <tbody>
                    {
                        movies.map(i => {
                            return(
                                <tr>
                                    <td>{i.Title}</td>
                                    <td>{i.Rating}</td>
                                    <td>{i.Year}</td>
                                    <td>{i.Category}</td>
                                    <td>{i.Director}</td>
                                    <td>{i.Edited}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                
            </table>
        </div>
        
    )
}