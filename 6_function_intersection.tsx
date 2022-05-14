import React, { FC } from "react";

type Checkbox = {
  checked: boolean;
};

type Dropdown = {
  options: Array<any>;
  selectedOption: number;
};

// make intersection, in other words - overload react component
const Component: FC<Checkbox | Dropdown> = (props) => <p>text</p>;

const MixComponent = <Component checked options={[]} selectedOption={0} />; // expected error
