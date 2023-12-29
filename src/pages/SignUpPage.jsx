import { Topnav } from "../components/shared/topnavbar";
import { SignUp } from "../components/signup/signUp";
import { Footer } from "../components/footer/footer";


export const SignUpPage = () => {
  return (
    <div>
      <Topnav />
     <SignUp />
      <Footer />
    </div>
  );
};
