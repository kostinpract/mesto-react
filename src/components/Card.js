function Card(props) {

  const handleCardClick = () => {
    props.onCardClick(props.card);
  };

  return (
    <div id={props.card._id}>
      <li className="gallery__item">
        <div className="gallery__square-photo-wrapper">
          <img
            src={props.card.link}
            alt={props.card.name}
            className="gallery__photo"
            onClick={handleCardClick}
          />
          <button className="gallery__remove-button" type="button"></button>
        </div>
        <h2 className="gallery__title">{props.card.name}</h2>
        <div className="gallery__like">
          <button className="gallery__like-button" type="button"></button>
          <p className="gallery__like-count">{props.card.likes.length}</p>
        </div>
      </li>
    </div>
  );
}

export default Card;