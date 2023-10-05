import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function page1() {

    const api_url = 'https://pokeapi.co/api/v2/pokemon/'

    const [data, setData] = useState([]);

    useEffect(() => { 
        const getData = async () => {
            await axios.get(api_url).then((res) => { 
                const responseData = res.data.results;
                setData(responseData);
            })
            .catch((error) => {
                window.alert(error); 
            }); 
        } 
        getData();
    }, []); 

    return (
        <div>
            <>
                {
                    data.filter(x => {
                        return x.url[35] == '/' || x.url[34] == 1 && x.url[35] == 0
                    })
                    .map((d) => {return <p>{d.name}</p>})
                }
            </>
        </div>
    )
}