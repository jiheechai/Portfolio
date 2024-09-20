import { HeaderStyledComponent } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <HeaderStyledComponent>
      <div className="headerWrapbox">
        <div>Chai Jihee</div>
        {/* 목록 바 */}
        <div className="menuBar">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </HeaderStyledComponent>
  );
};
export default Header;
