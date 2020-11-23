import { shallow } from "enzyme";
import HomePage from "./homepage.component";

it("renders HomePage component", () => {
  expect(shallow(<HomePage />)).toMatchSnapshot();
});
