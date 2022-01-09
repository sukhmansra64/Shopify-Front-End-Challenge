import React, {useEffect, useState} from 'react';
import {Spinner} from "react-bootstrap";
import Top from "./Top";
import Bottom from "./Bottom";
import axios from "axios";

const SpacestagramMain = () => {
    const[info, setInfo] = useState({
       title:'',
       src: '',
       date: '',
       description: ''
    });
    const[isLoaded,setIsloaded] = useState(false);
    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=IpjjXLJ0EuNdiU8BeGXfaQFcQwzvNkfVzV0vG15z').then((data)=>{
            setInfo({
                title: data.data.title,
                src: data.data.url,
                date: data.data.date,
                description: data.data.explanation
            });
            setIsloaded(true);
        })
    },[])
    return (
        <div className="spacestagramSection bg-light">
            {!isLoaded? <Spinner animation='border' style={{marginLeft:'246.5px', marginTop:'450px'}}/> : <div className='spacestagramContent '>
                <Top/>
                <img src={info.src} style={{width: '95%', borderRadius: '15px', marginLeft: '2.5%'}}/>
                <Bottom title={info.title} date={info.date} description={info.description}/>
            </div>}
        </div>
    );
};

export default SpacestagramMain;
