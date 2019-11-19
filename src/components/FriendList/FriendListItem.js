import React from 'react';
import Proppes from 'prop-types';
import abc from './friendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={abc.item}>
    <span className={isOnline ? abc.status : abc.offLine} />
    <img className={abc.avatar} src={avatar} alt="" width="48" />
    <p className={abc.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  isOnline: Proppes.bool.isRequired,
  avatar: Proppes.string.isRequired,
  name: Proppes.string.isRequired,
};

export default FriendListItem;
