import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className={`${css.friend} ${isOnline ? css.is_online : css.not_online}`}>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.friendName}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default FriendListItem;


