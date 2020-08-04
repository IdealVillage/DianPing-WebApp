import css from "styled-jsx/css";

const header = css`
  .headerContainer {
    height: 50px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    background: #f63;
  }
  .city {
    color: white;
    text-decoration: none;
    margin-left: 8px;
    position: relative;
    padding-right: 17px;
    max-width: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size:14px;
  }
  .city::after {
    border: 1px solid #fff;
    position: absolute;
    right: 2px;
    top: 50%;
    margin-top: -8px;
    display: block;
    content: "";
    width: 8px;
    height: 8px;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
  }
  .userIcon {
    margin-right: 8px;
    width: 24px;
    height: 24px;
    margin-left: 5px;
  }
`;

export default header