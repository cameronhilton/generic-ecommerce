import { shallow } from "enzyme";
import CustomButton from "./custom-button.component";

it("renders CustomButton component", () => {
  expect(shallow(<CustomButton />)).toMatchSnapshot();
});

it("renders children when passed in", () => {
  const wrapper = shallow(
    <CustomButton>
      <div className="unique" />
    </CustomButton>
  );
  expect(wrapper.contains(<div className="unique" />)).toBe(true);
});
