import React  from 'react';

function Card({card, onCardClick}) {

  const handleCardClick = () => {
    onCardClick(card);
  };

  return (
    <div id={card._id}>
      <li className="gallery__item">
        <div className="gallery__square-photo-wrapper">
          <img
            src={card.link}
            alt={card.name}
            className="gallery__photo"
            onClick={handleCardClick}
          />
          <button className="gallery__remove-button" type="button"></button>
        </div>
        <h2 className="gallery__title">{card.name}</h2>
        <div className="gallery__like">
          <button className="gallery__like-button" type="button"></button>
          <p className="gallery__like-count">{card.likes.length}</p>
        </div>
      </li>
    </div>
  );
}

export default Card;