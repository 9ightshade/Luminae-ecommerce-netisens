import { Topnav } from "../components/shared/topnavbar"
import { SignIn } from "../components/signin/signIn"
import { SignUp } from "../components/signup/signUp"

export const LoginPage = ()=>{

    return (
    
        <div>
            <Topnav />
            {/* <SignIn/> */}
            <SignUp/>
</div>



)

}