import { useState } from "react";
import Movie from "../interfaces/Movie";

function getHeaders(data: any)
{
    let headers = [];

    for (let key of Object.keys(data))
    {
        let obj = data[key];
        for (let head of Object.keys(obj))
        {
            headers.push(head);
        }
        break;
    }

    return headers;
}

export default function DisplayMovies(props: any)
{
    const [data, setData] = useState(props.data)
    let headers: string[] = getHeaders(props.data)

    console.log(data);
    
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
                        data.map((i: Movie) => {
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