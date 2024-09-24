import chancecoffeeLogo from "@/assets/image/chancecoffeeLogo.png";
import collaLogo from "@/assets/image/collaLogo.png";
import baekilmongImg from "@/assets/image/baekilmongImg.webp";
import portfolioImg from "@/assets/image/porfolioImg.png";

export const works = [
  {
    id: 1,
    name: "CHANCE COFFEE",
    src: chancecoffeeLogo,
    contents: `커피전문점 웹사이트를 반응형으로 만들었습니다.`,
    myWork: `hover를 활용하여 커서를 상품위에 올렸을 때
    상품의 상세정보를 반투명한 스크린 위에 보이게 하는 작업.
    반응형에서는 hover가 동작하지 않으므로 "mouseover"로 변경`,
    hash: [{ tag: "HTML" }, { tag: "CSS" }, { tag: "Javascript" }],
    viewProject: "",
    information: "https://write3027.tistory.com/2",
  },
  {
    id: 2,
    src: collaLogo,
    name: "Colla",
    contents: "채팅, 게시판기능이 있는 웹사이트를 반응형으로 만들었습니다.",
    myWork: `Socket.io를 이용한 채팅 기능 작업`,
    hash: [
      { tag: "HTML" },
      { tag: "CSS" },
      { tag: "Javascript" },
      { tag: "node.js" },
      { tag: "Socket.io" },
    ],
    viewProject: "http://54.180.246.133/",
    information: "https://write3027.tistory.com/14",
  },
  {
    id: 3,
    src: baekilmongImg,
    name: "백일몽",
    contents:
      "개인 프로젝트로 온라인 숙박공유 웹사이트를 반응형으로 만들었습니다.",
    myWork: `Googlemap openAPI, 
    검색(지역,날짜,인원) 및 filter함수를 이용한 해시태그 기반 검색 등
    웹사이트 전체 작업.`,
    hash: [{ tag: "Javascript" }, { tag: "React" }, { tag: "next.js" }],
    viewProject: "http://43.203.247.141:3000/",
    information: "https://write3027.tistory.com/16",
  },
  {
    id: 4,
    src: portfolioImg,
    name: "Portfolio",
    contents:
      "개인 포트폴리오를 반응형으로 만들었습니다. 현재 보시고 있는 웹사이트입니다.",
    myWork: ``,
    hash: [{ tag: "Javascript" }, { tag: "React" }, { tag: "next.js" }],
    viewProject: "",
    information: "",
  },
];
