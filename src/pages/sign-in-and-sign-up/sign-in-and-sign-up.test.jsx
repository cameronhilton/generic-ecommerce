import { shallow } from "enzyme";
import SignInAndSignUpPage from "./sign-in-and-sign-up.component";

it("renders SignInAndSignUpPage component", () => {
  expect(shallow(<SignInAndSignUpPage />)).toMatchSnapshot();
});
