// import { Logo } from "./components/shared/logo";
import { Concerns } from "./components/aboutUs/concernsForm";
import { Intro, TeamPhoto } from "./components/aboutUs/intro";
import { Services } from "./components/aboutUs/services";
function App() {
  return (
    <div>
      <Intro />
      <TeamPhoto />
      <Services />
      <Concerns />
    </div>
  );
}

export default App;
