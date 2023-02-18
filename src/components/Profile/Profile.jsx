import PropTypes from 'prop-types';
import {
  UserProfile,
  UserInfo,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <UserProfile>
      <UserInfo>
        <UserImage src={avatar} alt={username} />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserInfo>

      <UserStats>
        <li>
          <StatsLabel>Followers </StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </li>
        <li>
          <StatsLabel>Views </StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </li>
        <li>
          <StatsLabel>Likes </StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </li>
      </UserStats>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
