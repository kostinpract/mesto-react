import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="body">
      <div className="page">

        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={setSelectedCard}
        />

        <Footer />

        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
          name="userinfo"
          title="Редактировать профиль"
          submitTitle="Сохранить"
        >
          <input id="name" name="userinfo-name" type="text" required placeholder="Имя" minLength="2" maxLength="40" className="popup__form-field popup__form-field_data_name" />
          <span className="popup__form-warning popup__form-warning_field_name">Вы пропустили это поле.</span>
          <input id="status" name="userinfo-status" type="text" required placeholder="О себе" minLength="2" maxLength="200" className="popup__form-field popup__form-field_data_status" />
          <span className="popup__form-warning popup__form-warning_field_status">Вы пропустили это поле.</span>
        </PopupWithForm>

        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
          name="useravatar"
          title="Обновить аватар"
          submitTitle="Сохранить"
        >
          <input id="avatar" name="useravatar-avatar" type="url" required placeholder="Ссылка на аватар" minLength="5" className="popup__form-field popup__form-field_data_avatar" />
          <span className="popup__form-warning popup__form-warning_field_avatar">Вы пропустили это поле.</span>
        </PopupWithForm>

        <PopupWithForm
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
          name="addcard"
          title="Новое место"
          submitTitle="Сохранить"
        >
          <input id="title" name="addcard-card-title" type="text" required placeholder="Название" minLength="2" maxLength="30" className="popup__form-field popup__form-field_data_card-title" />
          <span className="popup__form-warning popup__form-warning_field_title">Вы пропустили это поле.</span>
          <input id="link" name="addcard-card-image" type="url" required placeholder="Ссылка на картинку" className="popup__form-field popup__form-field_data_card-image" />
          <span className="popup__form-warning popup__form-warning_field_link">Вы пропустили это поле.</span>
        </PopupWithForm>        

        <PopupWithForm
          onClose={closeAllPopups}
          name="confirmdelete"
          title="Вы уверены?"
          submitTitle="Да"
        >
          <input id="deleted" name="confirmdelete-deleted" type="hidden" required className="popup__form-field" />
        </PopupWithForm>

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />

      </div>
    </div>
  );
}

export default App;
