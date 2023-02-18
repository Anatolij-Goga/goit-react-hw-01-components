import styled from '@emotion/styled';

const TransactionTable = styled.table`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  text-align: center;

  border-collapse: collapse;
  background-color: white;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);

  & thead {
    & tr {
      background-color: #b87536;
      & th {
        padding: 15px;
        font-size: 15px;
        font-weight: 700;

        color: white;

        border-style: solid;
        border-width: 0 1px 1px 0;
        border-color: white;
      }
    }
  }
  & tbody {
    & tr {
      & td {
        padding: 10px;

        text-transform: capitalize;

        color: grey;

        border: 1px solid rgba(0, 0, 0, 0.15);
      }
    }
  }
`;

export { TransactionTable };
