import React, { ChangeEventHandler, FC } from "react";

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBarInput: FC<Props> = ({ onChange }) => {
  return (
    <input
      onChange={onChange}
      placeholder="Search"
      className="bg-cream200 focus:outline-none text-xl w-11/12"
    ></input>
  );
};
