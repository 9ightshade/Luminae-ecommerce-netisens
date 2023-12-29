import { Topnav } from "../components/shared/topnavbar";
import { SignIn } from "../components/signin/signIn";
import { Footer } from "../components/footer/footer";
// import { Changepassword } from "../components/signup/forgotten"
import { Changepassword } from "../components/signup/forgotten";

export const LoginPage = () => {
  return (
    <div>
      <Topnav />
      <SignIn />
      <Footer />
    </div>
  );
};
