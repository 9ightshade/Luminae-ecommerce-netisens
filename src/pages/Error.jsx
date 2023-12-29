import { Defaultlist, SearchFail } from "../components/Searchfail/Searchfail"
import { Footer } from "../components/footer/footer"
import { Navbar } from "../components/shared/navbar"

export const Error = ()=>{

return(
<div>
<Navbar/>
<SearchFail/>
<Defaultlist/>
<Footer/>
</div>

)

}