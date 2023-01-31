import React, { useState, useContext, useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup({ onClose, isOpen, onUpdateAvatar }) {

  const currentUser = useContext(CurrentUserContext);

  const avatarRef = useRef();

  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(avatarRef.current.value);

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      name="useravatar"
      onSubmit={handleSubmit}
      title="Обновить аватар"
      submitTitle="Сохранить"
    >
      <input
        ref={avatarRef}
        id="avatar"
        name="useravatar-avatar"
        type="url"
        required
        placeholder="Ссылка на аватар"
        minLength="5"
        className="popup__form-field popup__form-field_data_avatar"
      />
      <span className="popup__form-warning popup__form-warning_field_avatar">Вы пропустили это поле.</span>
    </PopupWithForm>
  );

}

export default EditAvatarPopup;