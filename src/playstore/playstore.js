import React from 'react';
import moment from 'moment';


export default function PlayStore(props) {
    return(
        <div className='app'>
            <h2>{props.App}</h2>
            <div className='app_type'>
                Type: {props.Type}
            </div>
            <div className='app_price'>
               Price: {props.Price}
            </div>
            <div className='app_rating'>
                Rating: {props.Rating}
            </div>
            <div className='app_reviews'>
               Reviews: {props.Reviews}
            </div>
            <div className='app_content-rating'>
                Content Rating: {props.Content_Rating} {/*won't populate */}
            </div>
            <div className='app_genres'>
                Genre: {props.Genres}
            </div>
            <div className='app_category'>
                Category: {props.Category}
            </div>
            <div className='app_installs'>
                Installs: {props.Installs}
            </div>
            <div className='app_size'>
                Size: {props.Size}
            </div>
            <div className='app_current-version'>
                Current Version: {props.current_ver} {/*won't populate */}
            </div>
            <div className='app_android-version'>
                Android Version: {props.Android_Ver} {/*won't populate */}
            </div>
            <div className='app_update'>
                Last updated on: {moment(props.last_update).format('DD MM YYYY')}
            </div>
        </div>
    )
}

