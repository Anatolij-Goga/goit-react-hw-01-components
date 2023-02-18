import styled from '@emotion/styled';
import getRandomColor from './utilts/getRandomHexColor';

const StatisticsSection = styled.section`
  width: 300px;
  margin: 0px auto;
  margin-bottom: 100px;

  color: white;
  background-color: white;

  border-radius: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

const StatisticsTitle = styled.h2`
  font-size: 22px;
  padding-top: 20px;
  padding-bottom: 20px;

  text-transform: uppercase;
  text-align: center;

  color: black;
`;

const StatisticsList = styled.ul`
  display: flex;
  padding: 0;
`;

const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc(100% / 5);
  padding: 10px;

  background-color: ${getRandomColor};
`;

const ItemLabel = styled.span`
  font-size: 15px;
  font-weight: 500;
`;

const ItemPercentage = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export {
  StatisticsSection,
  StatisticsList,
  StatisticsTitle,
  StatisticsItem,
  ItemLabel,
  ItemPercentage,
};
