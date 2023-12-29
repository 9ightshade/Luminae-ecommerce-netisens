import { Topnav } from "../components/shared/topnavbar";
import { SignIn } from "../components/signin/signIn";
import { Footer } from "../components/footer/footer";


export const SignInPage = () => {
  return (
    <div>
      <Topnav />
      <SignIn />
      <Footer />
    </div>
  );
};
