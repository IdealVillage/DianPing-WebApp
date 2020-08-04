import css from "styled-jsx/css";

export const container = css`
  .container {
    background: white;
    margin-top: 10px;
  }
`;
export const price = css`
  .price span:first-child {
    color: #f63;
    font-size: 17px;
  }
  .price span:last-child {
    color: #999;
    font-size: 14px;
    text-decoration: line-through;
  }
`;
