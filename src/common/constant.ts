const CONSTANT = {
  COLOR: {
    LIGHT_BLUE: "#22BAD9"
  },
  API: {
    // GRAPHQL_SERVER: "https://bon.chabot.kr:8021/api",
    GRAPHQL_SERVER: "https://localhost:8000/api",
    // GRAPHQL_SERVER: "https://bon.chabot.kr:8000/api",
    REST_SERVER: "https://bon.chabot.kr:3000",
    // REST_SERVER: "http://localhost:3000",
    CAR_DATA_SERVER: "http://bon.chabot.kr:8466/new_car",
    IMAGE_PATH: "https://s3.ap-northeast-2.amazonaws.com/s3.chabot.co.kr/",
    IMAGE_CAR_PATH: "carDBMaker/"
  },
  HEAD_TITLE: {
    BACKGROUND: "학력 사항",
    LICENSE: "자격증 / 어학",
    STACK: "기술 / 툴",
    INTERNATIONAL_ACTIVITY: "대외활동",
    CAREER: "경력 사항"
  },
  TITLE: {
    BACKGROUND: [
      { id: "period", label: "재학기간" },
      { id: "category", label: "구분" },
      { id: "name", label: "학교명" },
      { id: "major", label: "전공" },
      { id: "credit", label: "학점" }
    ],
    LICENSE: [
      { id: "registerDate", label: "취득일" },
      { id: "category", label: "구분" },
      { id: "name", label: "자격/어학" },
      { id: "organization", label: "발행처/기관/언어" },
      { id: "score", label: "합격/점수" }
    ],
    STACK: [
      { id: "name", label: "이름" },
      { id: "content", label: "내용" }
    ],
    INTERNATIONAL_ACTIVITY: [
      { id: "period", label: "기술명" },
      { id: "category", label: "구분" },
      { id: "organization", label: "기관/장소" },
      { id: "content", label: "내용" }
    ],
    CAREER: [
      { id: "name", label: "사명" },
      { id: "period", label: "재직기간" },
      { id: "reason", label: "퇴사사유" },
      { id: "position", label: "직급/직책" },
      { id: "job_type", label: "직종" },
      { id: "area", label: "근무지역" },
      { id: "department", label: "근무부서" },
      { id: "salary", label: "연봉" },
      { id: "assigned_task", label: "담당업무" }
    ]
  },
  BODY: {
    CAREER: [
      [
        "코드브로스",
        "2017. 03 ~ 2018. 10",
        "-",
        "팀원 / 개발자",
        "소프트웨어 개발",
        "부산 / 남구",
        "개발팀",
        "비공개",
        "SI외주 / 사내프로젝트"
      ],
      [
        "본컨설팅네트웍스",
        "2019. 06 ~ ",
        "재직중",
        "팀원 / 개발자",
        "소프트웨어 개발",
        "서울 / 성동구",
        "개발팀",
        "비공개",
        "사내 프로젝트"
      ]
    ],
    BACKGROUND: [
      ["2012.02 ~ 2019.02", "졸업", "경성대학교", "컴퓨터공학과", "3.6 / 4.5"],
      ["2008.02 ~ 2011.02", "졸업", "울산고등학교", "이과계열", "-"]
    ],
    LICENSE: [
      [
        "2012. 02",
        "면허증",
        "1종보통운전면허",
        "경찰청(운전면허시험관리단)",
        "최종합격"
      ]
    ],
    STACK: [
      ["C", "학부생 기초지식 수준"],
      ["C#", "윈도우 계산기 만들기(학부생 개인 프로젝트)"],
      ["Java", "도서관리 응용프로그램 개발(웹, 윈도우프로그램)"],
      ["PHP", "기초지식 수준"],
      ["Laravel", "외주 2건(재무관리 플랫폼, 인력매칭 플랫폼 )"],
      ["Android", "외주 1건(재무관리 플랫폼)"],
      ["Java Script", "기초지식 수준"],
      ["React", "사내프로젝트로 사용 (ADMIN 개발)"],
      [
        "React Native",
        "사내프로젝트로 사용 ,크로스 플랫폼 앱 개발(Chabot, 비즈 프라임)"
      ],
      ["NodeJS, Express, ApolloServer", "메인 GraphQL서버"],
      ["NestJS", "인증 서버"],
      ["GraphQL", "DataModel 설계, Schema설계, Resolver작성"],
      ["Prisma", "Migration, ORM 사용"],
      ["Docker", "MySQL Image, Prisma Server Image 사용경험"],
      ["AWS", "EC2, CloudFront, RDS, S3, IAM 사용경험"],
      ["CI / CD", "MicroSoft AppCenter, Bitrise, GitLab-ci"],
      [
        "형상관리",
        "사내프로젝트: GitLab, 개인프로젝트: GitHub( https://github.com/seungmin3577 )"
      ],
      [
        "협업툴",
        "사내프로젝트 Jandi, Jira, Confluence, Zeplin 경험, 개인프로젝트 Trello 경험"
      ]
    ],
    INTERNATIONAL_ACTIVITY: [
      [
        "2016.03 ~ 2018.01",
        "창업동아리",
        "경성대학교 창업지원단",
        "창업동아리원으로 개발파트에서 간단한 프로토타입(앱 or 웹) 개발"
      ],
      [
        "2016.03 ~ 2016.11",
        "학과연구실",
        "경성대학교 언어처리실험실",
        "LibSVM,CRF++머신러닝 툴과 파이썬을 활용한 인용문 기반 논문 요약 연구\n 형태소 분석등"
      ]
    ]
  }
};

export default CONSTANT;
