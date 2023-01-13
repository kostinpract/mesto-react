import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

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

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  return (
    <div className="body">
      <div className="page">

        <Header />

        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={setSelectedCard}
        />

        <Footer />

        <PopupWithForm onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} name="userinfo" title="Редактировать профиль">
          <input id="name" name="userinfo-name" type="text" required placeholder="Имя" minLength="2" maxLength="40" className="popup__form-field popup__form-field_data_name" />
          <span className="popup__form-warning popup__form-warning_field_name">Вы пропустили это поле.</span>
          <input id="status" name="userinfo-status" type="text" required placeholder="О себе" minLength="2" maxLength="200" className="popup__form-field popup__form-field_data_status" />
          <span className="popup__form-warning popup__form-warning_field_status">Вы пропустили это поле.</span>
          <button type="submit" className="popup__form-submit-button popup__form-submit-button_data_userinfo">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} name="addcard" title="Новое место">
          <input id="title" name="addcard-card-title" type="text" required placeholder="Название" minLength="2" maxLength="30" className="popup__form-field popup__form-field_data_card-title" />
          <span className="popup__form-warning popup__form-warning_field_title">Вы пропустили это поле.</span>
          <input id="link" name="addcard-card-image" type="url" required placeholder="Ссылка на картинку" className="popup__form-field popup__form-field_data_card-image" />
          <span className="popup__form-warning popup__form-warning_field_link">Вы пропустили это поле.</span>
          <button type="submit" className="popup__form-submit-button popup__form-submit-button_data_addcard">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} name="useravatar" title="Обновить аватар">
          <input id="avatar" name="useravatar-avatar" type="url" required placeholder="Ссылка на аватар" minLength="5" className="popup__form-field popup__form-field_data_avatar" />
          <span className="popup__form-warning popup__form-warning_field_avatar">Вы пропустили это поле.</span>
          <button type="submit" className="popup__form-submit-button popup__form-submit-button_data_useravatar">Сохранить</button>
        </PopupWithForm>

        <PopupWithForm onClose={closeAllPopups} name="confirmdelete" title="Вы уверены?">
          <input id="deleted" name="confirmdelete-deleted" type="hidden" required className="popup__form-field" />
          <button type="submit" className="popup__form-submit-button popup__form-submit-button_data_confirmdelete">Да</button>
        </PopupWithForm>

        <ImagePopup onClose={closeAllPopups} card={selectedCard} />

      </div>

    </div>
  );
}

export default App;
