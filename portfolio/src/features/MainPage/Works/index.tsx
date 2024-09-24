import { WorksStyledComponent } from "./styled";
import { works } from "@/utill/data";

const Works = () => {
  const allData = [...works];
  // Works내용이 나타나는 효과
  // Intersection Observer 생성
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 화면에 들어옴
          entry.target.classList.add("fade-in");
        } else {
          // 화면에서 나감
          entry.target.classList.remove("fade-in");
        }
      });
    },
    // 화면에서 해당 요소가 10% 이상 보일 경우 화면에 들어온 것으로 판단함
    { threshold: 0.1 }
  );
  // 관찰 대상 설정
  const targetElements = document.querySelectorAll(".wrapBox");
  targetElements.forEach((element) => {
    observer.observe(element);
  });

  return (
    <WorksStyledComponent>
      <div className="title">Works</div>
      {allData.map((x, i) => {
        return (
          <div className="wrapBox" key={i}>
            <img src={x.src.src} />
            <div className="nameBox">
              {x.id}.&nbsp;
              {x.name}
            </div>
            <div className="contentBox">
              <div style={{ whiteSpace: "pre-line" }}>{x.contents}</div>
              <p style={{ whiteSpace: "pre-line" }}>작업내용 : {x.myWork}</p>
              {x.hash.map((x, i) => {
                return (
                  <span key={i} className="hashBox">
                    #{x.tag}&nbsp;
                  </span>
                );
              })}
              <div>
                <a className="underbar">View Project</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a className="underbar">Information</a>
              </div>
            </div>
          </div>
        );
      })}
    </WorksStyledComponent>
  );
};
export default Works;
