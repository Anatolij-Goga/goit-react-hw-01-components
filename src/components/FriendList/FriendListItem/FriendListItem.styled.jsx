import styled from '@emotion/styled';

const Friend = styled.li`
  display: flex;
  width: 250px;
  align-items: center;
  margin: 0px auto;
  padding: 10px;

  background-color: rgb(248, 240, 240);

  border-radius: 5px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-radius: 50%;

  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

const Avatar = styled.img`
  display: block;
  width: 60px;
  height: 60px;
  padding: 7px;
  margin-right: 20px;

  background-color: rgb(236, 219, 219);

  border-radius: 8px;
  box-shadow: 1px 2px 1px rgb(0 0 0 / 12%), 1px 2px 2px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 20%);
`;

const Name = styled.p`
  font-size: 20px;
  margin: 0;
  text-align: center;
`;

export { Friend, Status, Avatar, Name };
