import React from "react";

const DownLoad = ({ history }) => (
  <div className="downloadContainer">
    <div className="downloadTitle">
      <i className="icon" />
      <span className="text">吃喝玩乐,找优惠</span>
    </div>
    <div className="downloadBtn">
      <a className="btn-open" onClick={() => history.push("/download")}>
        打开大众点评
      </a>
      <a className="btn-download">下载App享特价</a>
    </div>
    <style jsx>{`
      .downloadContainer {
        height: 120px;
        background-image: url(//www.dpfile.com/app/app-m-module/static/666419d6641cf0faec444fc12b50383d.jpg);
        background-size: 100%;
        background-position: center;
        display: flex;
        flex-direction: column;
        align-content: center;
      }
      .downloadTitle {
        height: 30px;
        display: flex;
        justify-content: center;
        margin: 24px 0 14px;
      }
      .icon {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAA2FBMVEUAAADtZDjsYzfuZTjrYzjqYzfqZDfrYzfmYzXvZDfgYEDpYzjpYzfrYzfoZTTrZDj////rYjXrYDPrXzHqXS///fz/+vnvZTj//v7sZjvvfVfuelTsaT7zZzr2taDwiGb+9/X+9PD96eP1rpftcEfsa0HudU774djzoYf85Nz0qpLxknP98e373tT608f97un5y7z3var2uaXxj3DxjGzvgV3tc0vsbkT2spz729H60MP4yLj0po396+b618vylXfvg2D85t/5zsD4xbX4wrHzm37znIDyl3lhDYlnAAAAD3RSTlMA4vry3oF7ZiQXBKysWFhhIPgVAAAEcUlEQVRYw62ZaXuiMBDH1R7bY7thEqBcBRW8td5ntdr7+3+jBbclsRAHt/5f+DyR+MtMZjLkGXNfuvzz+7RA/kuF099/LnO7ujjP35If6DZ/fiHyfuXvEB5KvMv/4ryzkzvyY92dnH3irs4KiHkZjSycXf3z90TOA6aqKqMZiSdbry/ycn9ZMFz6zTcLaDav8xehw+dSHlTdWls3tFJ5MTQhE/H8Kncpyxcw611D+VTxoQqZsucydyPl9TVFUGNDsxBvcteSR6ar7GplZSFe504lBrZ05ZseKsAfgwR4mpOcX6emfJfWgs9UomYwXi48RpIq5NJ5dK0rCd2bEY4G449BIxzWU7dAAlR7SlK6FfKmbqf0b+ia2YHAPRakvVEC1fjJq3MA0C6nAA0/BE6fv4a9SnYgtVZpQDcC9v4HCNVUC5shMFjwNMKBXKl7uIZwqc7XsO8cAGSvKcDiJNqM9tfQJ9mAoEL4MUrJw54ZPhjGw/cseQiU2vVtYXlOGuiF35svcVZ6DAGG0x1v9ljWm9Fg0/4OdKMZ1dLXsGwjFprW+0tZN6KpQUR8++b0YxDy6Ew4iLAXSCdP8dzZdu1maecgRwZRqxuHfKYiQaEvfLfWLLLR4/tYXlYiXuU+/qY7pgiQrblFT3ZEZNPhy0rTtOK8aQNERdzXeHWkBEsb8150cGsjmJWqZU0dApELZlMTQ44C6ajIiR2PfvuFGriGUL4JQYEEBgpXaTBl4jMYdhSusg1ZgNWGIqi2DCJQJOKMenyHebXGTgod7uSe1u7VPcu2x2u3sZuUzybgwEjgaskTlzzVNYuSjEBzpuBqcB5eHBzXwHi1jQo4kNvY1BHgS8uaEBWLMidCvawg0uf+KOBIrGIzu68pmLTOoJr5RU/N0RxHKk9+BRAgd9tpPXdRptFpASBAzqSW3+tgEdebDmBAjlTJqxQo1t3MwMqrruDqjGk2IDgPSiY1bJrNQjcRg/ZTrdZY6QmvJ5AlKL6xu/2L5WhcnQRV23t/be8SFxUcGFVvQcX+eAoqo5EYc+zlamc5l2JAOqmJp2KxAYCdPA0GYr1trxkGHBjCdN+E5IyWWN3nFdgLpBvB4ZXHgCTFJo9CvOr7gabwtuoOmWSbRWIjgD1AsEo8HB8gzVRb8Lq+D0h88colFwz5wnNzD9Ap86Sdwj5ik+fpCGRA8WWqtRjZI8rv9kZflQLZwEikg0RqP55am4IMCHPkDsgFm1KcrS0mAYIV+9G1gCBEnjq+KgGyVrxqBwgi2txGpPToe4HMZbUex6RPMSCM9W6n/zHZXvllwLhwGUsgmJy6Z6p83VSgG8fkAwgqTpMC+zs9AVwocHBkIHfZeDsOkN/1Z/RwYLLNwt7i6to7HFhINoKo142vQ87BwNNkqwqCuG6WvINNvE5ppqmLuMjV2YG825uUdh/1owgXuw91q3IoL3+Z0pAEr12+n41CGKCEZEMyrWXqvI9BlcCwlml6Uxfp4iJN3aO2nY/eGD9+6/74fy4c/e+PvwZCqu0yPm2TAAAAAElFTkSuQmCC);
        background-size: 100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      .text {
        font-size: 20px;
        color: black;
        font-weight: bolder;
      }
      .downloadBtn {
        display: flex;
        justify-content: center;
        height: 42px;
      }
      .btn-open {
        border: 1px solid #f63;
        color: #f63;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        margin-right: 15px;
        font-size: 14px;
      }
      .btn-download {
        border: 1px solid #f63;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background-color: #f63;
        font-size: 14px;
      }
    `}</style>
  </div>
);

export default DownLoad;
