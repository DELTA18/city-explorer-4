import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import '../../styles/popup.css';
import axios from 'axios';
const localIPAddress = window.location.hostname;

const Detailedhotel = (props) => {
    function handleClose() {
        props.settrigger(false);
    }
    
    function handlePopupClick(event) {
        event.stopPropagation();
    }
    
    const [like, setLike] = useState(false);
    const liked_svg = 'https://img.icons8.com/fluency/48/like.png';
    const notLiked_svg = 'https://img.icons8.com/windows/32/like--v1.png';
    
    const [svg, setSvg] = useState(notLiked_svg);
    
    useEffect(() => {
        like ? setSvg(liked_svg) : setSvg(notLiked_svg);
    }, [like]);
    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let user_id = queryParams.get('user_id');
    
    useEffect(() => {
        // console.log(user_id)
        // Fetch user information including the liked_hotels array
       let a = axios.get(`http://${localIPAddress}:8000/userinfo?user_id=${user_id}`)
       .then(response => {
                //    console.log(response.data)
                const likedHotels = response.data.favourite_hotels;
                if (likedHotels.includes(props.id)) {
                    setLike(true);
                }
            })
            // .catch(error => {
            //     console.error('Error fetching user information:', error);
            // });
    }, [user_id, props.id]);
    
    const handlelike = () => {
        setLike(!like);
        if (!like) {
            axios.post(`http://${localIPAddress}:8000/foodanddine`, { id: props.id, user_id: user_id, liked:true })
                .then(response => {
                    console.log('Liked:', response);
                })
                .catch(error => {
                    console.error('Error liking hotel:', error);
                });
        }
        else{
            axios.post(`http://${localIPAddress}:8000/foodanddine`, { id: props.id, user_id: user_id, liked:false })
                .then(response => {
                    console.log('Liked:', response);
                })
                .catch(error => {
                    console.error('Error liking hotel:', error);
                });
        }
    };

    return props.trigger ? (
        <div className='popup' onClick={handlePopupClick}>
            <div className='popup-inner'>
                <div className='popup-inner-left'>
                    <img src={props.img} className='popup-img' alt='img'/>
                    <label>{props.city}</label>
                </div>

                <div className='popup-inner-right'>
                    <h1 className='popup-name pp'> <b>{props.name} </b></h1>
                    <label className='popup-address pp'> 
                        <span className="material-symbols-outlined">
                            location_on
                        </span>
                        {props.address} 
                    </label>
                    <label className='popup-rating pp'> Ratings:{props.rating} </label>
                    <label className='popup-type pp'> {props.type}, {props.type2} </label>
                    <label className='popup-vej pp'> {props.vejnonvej} </label>
                    <label className='popup-price pp'> price: ₹ {props.price} </label>
                    <img className='like'
                        width="48" 
                        height="48" 
                        src={svg} 
                        onClick={handlelike} 
                        alt="like"
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className='close-button' onClick={handleClose}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </div>
            </div>
        </div>
    ) : null;
};

export default Detailedhotel;
