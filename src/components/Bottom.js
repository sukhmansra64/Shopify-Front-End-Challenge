import React, {useEffect, useState} from 'react';

const Bottom = ({date, description, title}) => {
    const [isLiked,setIsLiked] = useState(false)

    useEffect(()=>{
        console.log(localStorage)
        if(title === localStorage.getItem('title')&&true.toString()===localStorage.getItem('like')){
            setIsLiked(true);
        }
    },[title])

    const onClick = (e) =>{
        localStorage.setItem('title',title);
        localStorage.setItem('like',(!isLiked).toString());
        isLiked ? setIsLiked(false) : setIsLiked(true);
    }
    return (
        <div className='bg-white'style={{width: '95%', marginLeft: '2.5%'}}>
            <span><h5>{title}</h5>-<p>{date}</p></span>
            <p>{description}</p>
            <button className='btn btn-light' style={{marginLeft : 5, marginBottom: 5}} onClick={(e)=>onClick(e)}>{isLiked ? 'Liked': 'Like'}</button>
        </div>
    );
};

export default Bottom;
