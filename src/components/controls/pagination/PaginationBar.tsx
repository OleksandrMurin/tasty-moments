"use client";

import { useQueryParam } from "@/hooks/useQueryParam";
import DoubleArrow from "@public/button-double-arrow-left.svg";
import classNames from "classnames";
import { FC, useCallback, useMemo } from "react";
import Arrow from "../../../../public/button-arrow-left.svg";
import { PaginationButton } from "./PaginationButton";

interface Props {
  totalPages: number;
}

export const PaginationBar: FC<Props> = ({ totalPages }) => {
  const pages = useMemo(() => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }, [totalPages]);
  const [page, setPage] = useQueryParam("page", 1, pages);
  const availablePages = useMemo(
    () =>
      pages
        // .slice(1, -1)
        .slice(
          Math.max(pages[0], page - 3), //< 0 ? 0 : Math.max(pages[0], page - 3),
          Math.min(page + 2, pages[pages.length - 2])
        ),
    [pages, page]
  );

  const rightSingleArrowClick = useCallback(
    () => setPage((x) => x - 1),
    [setPage]
  );
  const leftSingleArrowClick = useCallback(
    () => setPage((x) => x + 1),
    [setPage]
  );
  const rightDoubleArrowClick = useCallback(
    () => setPage(pages[pages.length - 1]),
    [setPage]
  );
  const leftDoubleArrowClick = useCallback(() => setPage(pages[0]), [setPage]);

  return (
    <div className="flex items-center gap-5">
      <PaginationButton onClick={leftDoubleArrowClick}>
        <DoubleArrow />
      </PaginationButton>
      <PaginationButton
        disabled={page == pages[0]}
        onClick={rightSingleArrowClick}
      >
        <Arrow />
      </PaginationButton>
      <PaginationButton
        onClick={() => setPage(pages[0])}
        className={classNames({
          "bg-cream400 text-orange600 font-semibold": pages[0] === page,
        })}
      >
        {pages[0]}
      </PaginationButton>
      {page - pages[0] > 3 && <PaginationButton>...</PaginationButton>}
      {availablePages.map((p) => (
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
      {pages[pages.length - 1] - page > 3 && (
        <PaginationButton>...</PaginationButton>
      )}
      <PaginationButton
        onClick={() => setPage(pages[pages.length - 1])}
        className={classNames({
          "bg-cream400 text-orange600 font-semibold":
            pages[pages.length - 1] === page,
        })}
      >
        {pages[pages.length - 1]}
      </PaginationButton>
      <PaginationButton
        direction="right"
        onClick={leftSingleArrowClick}
        disabled={page == pages[pages.length - 1]}
      >
        <Arrow />
      </PaginationButton>
      <PaginationButton direction="right" onClick={rightDoubleArrowClick}>
        <DoubleArrow />
      </PaginationButton>
    </div>
  );
};
