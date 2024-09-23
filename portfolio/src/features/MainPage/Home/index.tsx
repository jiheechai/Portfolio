import { HomeStyledComponent } from "./styled";

const Home = () => {
  return (
    <HomeStyledComponent>
      <div className="wrap-box">
        <div className="fade-in">안녕하세요</div>
        <div className="fade-in">프론트엔드 개발자</div>
        <div className="fade-in">채지희입니다.</div>
      </div>
    </HomeStyledComponent>
  );
};

export default Home;
