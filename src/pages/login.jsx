import { Topnav } from "../components/shared/topnavbar";
import { SignIn } from "../components/signin/signIn";
import { Footer } from "../components/footer/footer";
// import { Changepassword } from "../components/signup/forgotten"
import { SignUp } from "../components/signup/signUp"
import { Changepassword } from "../components/signup/forgotten";

export const LoginPage = () => {
  return (
    <div>
      <Topnav />
      <Changepassword/>
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      <Footer />
    </div>
  );
};
