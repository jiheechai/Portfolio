import Home from "./Home";
import About from "./About";
import Works from "./Works";
import { MainPageStyledComponent } from "./styled";
const MainPage = () => {
  return (
    <MainPageStyledComponent>
      {/* Home */}
      <Home />

      {/* About */}
      <About />

      {/* Works */}
      <Works />
    </MainPageStyledComponent>
  );
};
export default MainPage;
