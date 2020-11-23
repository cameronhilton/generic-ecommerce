import { shallow } from "enzyme";
import Spinner from "./spinner.component";

it("renders Spinner component", () => {
  expect(shallow(<Spinner />)).toMatchSnapshot();
});
