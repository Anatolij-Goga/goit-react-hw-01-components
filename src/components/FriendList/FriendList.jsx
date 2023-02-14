import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';

export const FriendsList = friends => {
  return (
    <ul class="friend-list">
      <FriendListItem />
    </ul>
  );
};
