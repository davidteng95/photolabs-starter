import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = (props) => {
  const {photoId, toggleFavourite, favourites} = props;
  // const [isActive, setIsActive] = useState(false);

  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFavourite(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={favourites.includes(photoId) ? "red" : "#EEEEEE"} />
      </div>
    </div>
  );
};

export default PhotoFavButton;