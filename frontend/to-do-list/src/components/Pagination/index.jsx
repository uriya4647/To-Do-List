import styles from "./style.module.css";
import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import PropTypes from "prop-types";

const withinTheRange = (currentPage, numOfPages) => {
  return currentPage < 0
    ? 0
    : currentPage >= numOfPages
    ? numOfPages
    : currentPage;
};

const PaginationItem = ({ index, setCurrent, current, theme = {}, limit }) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    current === index ? setActive(styles.active) : setActive("");
  }, [current]);

  const handleChangeCurrent = (index) => {
    setCurrent(index);
  };

  return (
    <>
      <Link
        className={
          index - current > 2 || current - index > 2
            ? styles.none
            : active
            ? active
            : styles.a
        }
        style={theme.link}
        to={`?currentPage=${index}&limit=${limit}`}
        onClick={() => handleChangeCurrent(index)}
      >
        {index}
      </Link>
    </>
  );
};

const PaginationList = ({
  pagesCount,
  theme = {},
  setCurrentPage,
  limit,
}) => {
  const [current, setCurrent] = useState(1);
  const [ searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ currentPage: 1, limit: limit });
  }, []);

  useEffect(() => {
    if (pagesCount) {
      setCurrent(1);
    }
  }, [pagesCount]);

  useEffect(() => {
    if (setCurrentPage) setCurrentPage(current);
  }, [current]);

  const handelChangePage = (currentPage) => {
    let inRange = withinTheRange(currentPage, pagesCount);
    setCurrent(inRange);
  };

  return (
    <>
      <div className={styles.pagination}>
        <Link
          to={`?currentPage=${current}&limit=${limit}`}
          onClick={() => handelChangePage(current - 1)}
          style={theme.link}
          className={current < 1 ? styles.noAction : ""}
        >
          {current > 1 && <span>&laquo;</span>}
        </Link>

        {Array(pagesCount)
          .fill()
          .map((x, index) => {
            return (
              <PaginationItem
                index={index + 1}
                key={index.toString()}
                current={current}
                setCurrent={setCurrent}
                limit={limit}
              />
            );
          })}

        <Link
          to={`?currentPage=${current}&limit=${limit}`}
          onClick={() => handelChangePage(current + 1)}
          style={theme.link}
          className={current === pagesCount ? styles.noAction : ""}
        >
          {current < pagesCount && <span> &raquo; </span>}
        </Link>
      </div>
    </>
  );
};

export default PaginationList;

PaginationList.propTypes = {
  pagesCount: PropTypes.number,
  setCurrentPage: PropTypes.func,
  theme: PropTypes.object,
  limit: PropTypes.number,
};

PaginationItem.propTypes = {
  index: PropTypes.number,
  current: PropTypes.number,
  setCurrent: PropTypes.func,
  theme: PropTypes.object,
  limit: PropTypes.number,
};
