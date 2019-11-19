import React from 'react';
import Proppes from 'prop-types';
import abc from './friendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className={abc.friends}>
    {friends.map(el => (
      <FriendListItem
        key={el.id}
        isOnline={el.isOnline}
        avatar={el.avatar}
        name={el.name}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: Proppes.arrayOf(
    Proppes.shape({
      id: Proppes.number.isRequired,
      isOnline: Proppes.bool.isRequired,
      avatar: Proppes.string.isRequired,
      name: Proppes.string.isRequired,
    }),
  ).isRequired,
};
export default FriendList;
