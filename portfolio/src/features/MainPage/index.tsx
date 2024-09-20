import { useEffect, useState } from "react";
import { MainPageStyledComponent } from "./styled";

const MainPage = () => {
  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [showThirdDiv, setShowThirdDiv] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowSecondDiv(true);
    }, 1500); // 1.5초 후 두 번째 div가 나타납니다

    const timer2 = setTimeout(() => {
      setShowThirdDiv(true);
    }, 3000); // 3초 후 세번째 div가 나타납니다

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <MainPageStyledComponent>
      {showFirstDiv && <div className="fade-in">안녕하세요</div>}
      {showSecondDiv && <div className="fade-in">프론트엔드 개발자</div>}
      {showThirdDiv && <div className="fade-in">채지희입니다.</div>}
    </MainPageStyledComponent>
  );
};
export default MainPage;
