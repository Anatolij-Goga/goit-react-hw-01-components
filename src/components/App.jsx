import { Profile } from './Profile';
import user from '../configs/user';

import { Statistics } from './Statistics';
import data from '../configs/data';

import { FriendList } from './FriendList';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList />
    </>
  );
};
