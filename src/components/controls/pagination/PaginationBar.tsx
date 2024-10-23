"use client";

import React, { FC, useCallback } from "react";
import { PaginationButton } from "./PaginationButton";
import classNames from "classnames";
import { useQueryParam } from "@/hooks/useQueryParam";
import DoubleArrow from "../../../../public/button-double-arrow-left.svg";
import Arrow from "../../../../public/button-arrow-left.svg";

interface Props {
  totalPages: number;
}

export const PaginationBar: FC<Props> = ({ totalPages }) => {
  const pages = Array.from({ length: totalPages }, (value, i) => i + 1);
  const [page, setPage] = useQueryParam("page", 1, pages);
  const rightSingleArrowClick = useCallback(
    () => setPage((x) => x - 1),
    [setPage]
  );
  const leftSingleArrowClick = useCallback(
    () => setPage((x) => x + 1),
    [setPage]
  );
  if (totalPages <= 5) {
    return (
      <div className="flex items-center gap-5">
        <PaginationButton>
          <DoubleArrow />
        </PaginationButton>
        <PaginationButton
          disabled={page == pages[0]}
          onClick={rightSingleArrowClick}
        >
          <Arrow />
        </PaginationButton>
        {pages.map((p) => (
          <PaginationButton
            onClick={() => setPage(p)}
            key={p}
            className={classNames({
              "bg-cream400 text-orange600 font-semibold": p === page,
            })}
          >
            {p}
          </PaginationButton>
        ))}
        <PaginationButton
          direction="right"
          onClick={leftSingleArrowClick}
          disabled={page == pages[pages.length - 1]}
        >
          <Arrow />
        </PaginationButton>
        <PaginationButton direction="right">
          <DoubleArrow />
        </PaginationButton>
      </div>
    );
  }
  return <div></div>;
};
