import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const Pagination = styled(ReactPaginate)`
  display: flex;
  list-style: none;

  & > .active {
    background-color: ${(props) => props.theme.colors.blue};
  }

  & > .page-item {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;

    & > a {
      color: #fff;
    }
  }
`;
