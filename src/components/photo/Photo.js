import ImagePhoto from '../../assets/images/image.png';

import './Photo.sass';

export const Photo = () => {
    return(
        <img className="image_photo" src={ImagePhoto}/>
    )
}