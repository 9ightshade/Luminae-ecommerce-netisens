import { Concerns } from "../components/aboutUs/concernsForm"
import { Intro } from "../components/aboutUs/intro"
import { Services } from "../components/aboutUs/services"
import { Footer } from "../components/footer/footer"
import { Topnav } from "../components/shared/topnavbar"

export const About = () => {
    
    return (
      <div>
        <Topnav />
        <div >
          <Intro />
                <Services />
                <Concerns/>
        </div>

        <Footer />
      </div>
    );


}