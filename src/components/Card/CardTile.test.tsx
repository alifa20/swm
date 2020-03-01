import React from "react";
import { shallow } from "enzyme";
import CardTile from "./CardTile";

describe("Card", () => {
  it("should render", () => {
    const wrapper = shallow(<CardTile src="text" />);
    expect(wrapper).toMatchSnapshot();
  });
});
