import styled from '@emotion/styled';

const UserProfile = styled.div`
  background-color: white;
  width: 300px;
  margin: 0px auto;
  margin-bottom: 100px;

  border-radius: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  padding: 5px;

  border-radius: 50%;
  border: 1px solid black;
`;

const UserName = styled.p`
  margin: 0;
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 700;
`;

const UserTag = styled.p`
  margin: 0;
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 500;
  color: grey;
`;

const UserLocation = styled.p`
  margin: 0;
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 500;
  color: grey;
`;

const UserStats = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 70px;
  margin: 0;
  padding: 0;

  background-color: #b5bdc9;

  border-top: 1px solid rgb(146, 146, 146);

  & li {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #ccc;
  }

  & li:last-child {
    border-right: none;
  }
`;

const StatsLabel = styled.span`
  color: white;
  margin-bottom: 5px;
`;

const StatsQuantity = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: black;
`;

export {
  UserProfile,
  UserInfo,
  UserImage,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  StatsLabel,
  StatsQuantity,
};
