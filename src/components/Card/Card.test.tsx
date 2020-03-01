import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";
import { Title } from "./Card.styled";

describe("Card", () => {
  it("should render", () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("when title prop is provided", () => {
    it("should show title row", () => {
      const wrapper = shallow(<Card title="Some text" />);
      const title = wrapper.find(Title);
      expect(title.exists()).toEqual(true);
    });

    it("should show title row", () => {
      const wrapper = shallow(<Card />);
      const title = wrapper.find(Title);
      expect(title.exists()).toEqual(false);
    });
  });
});
