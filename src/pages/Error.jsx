import { NavLink } from "react-router-dom"
import { Defaultlist } from "../components/Searchfail/Searchfail"
import { Footer } from "../components/footer/footer"
import { Navbar } from "../components/shared/navbar"

export const Error = ()=>{

return(
<div>
<Navbar/>
<PageNotFound/>
<Defaultlist/>
<Footer/>
</div>

)

}


export const PageNotFound = ()=>{

return(
<div className=" py-[2em] w-[80%] mx-auto text-center flex flex-col gap-[2em] " >
    <h1 className="text-[2.5rem]" >
        Page not found
    </h1>
    <p className="color-[grey] text-[1.5rem]" >
        We can't seem to find the page you're looking for. Try going back to the previous page or see our <NavLink to= "/help&support"><span>Help Center</span></NavLink> for more information.

    </p>

<NavLink to="/" ><button className="text-[dodgerblue] max-w-[500px] mx-auto px-[1em] py-[.7em] bg-black rounded-[4px]">Return Home</button></NavLink>


</div>

)


}