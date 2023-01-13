import React from 'react';
import Api from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState('./images/userpic.jpg');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([
      Api.getUserInfo(),
      Api.getInitialCards()
    ]).then(([user, apiCards]) => {
      setUserAvatar(user.avatar);
      setUserName(user.name);
      setUserDescription(user.about);
      setCards([...apiCards]);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <main className="main">

      <section className="profile">
        <div className="profile__avatar">
          <button className="profile__editpic" onClick={props.onEditAvatar}></button>
          <img className="profile__userpic" src={userAvatar} alt="Аватарка" />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__status">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section className="cards">
        <ul className="gallery">
          {cards.map((card, index) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>

    </main>
  );
}

export default Main;