export type ProjectProcess = {
    label: string;
    title: string;
    body: string;
};

export type ProjectFeature = {
    title: string;
    description: string;
    image: string;
};

export type Project = {
    slug: string;
    title: string;
    subtitle: string;
    period: string;
    team: string;
    role: string;
    description: string;
    heroImage: string;
    conceptImage: string;
    detailImage: string;
    tags: string[];
    process: ProjectProcess[];
    features: ProjectFeature[];
    implementationNotes: string[];
};

export const projects: Project[] = [
    {
        slug: 'inout',
        title: 'INOUT',
        subtitle: '스티커로 모아보는 \n나만의 감정 캘린더',
        period: '2026.01.01 - 2026.02.18',
        team: '1인',
        role: 'Frontend',
        description:
            '감정 스티커 관리부터 몸무게, 칼로리, 수분 섭취 기록까지 한곳에 모아보는 개인 맞춤형 헬스케어 다이어리입니다. 실제 서비스 중인 앱(inout)을 벤치마킹하여 직접 구현해 보았습니다.',
        heroImage: '/dingdong/inout.png',
        conceptImage: '/dingdong/inoutScreen.png',
        detailImage: '/dingdong/dingdong16.webp',
        tags: ['React', 'TypeScript', 'Vite', 'Context API', 'PWA'],
        process: [
            {
                label: 'Problem',
                title: '짧고 형식적인 자기소개가 관계 형성으로 이어지지 않았어요',
                body: '동아리 첫 만남에서 서로를 더 쉽게 이해할 수 있도록 TMI 키워드와 주민증 구조를 설계했어요.',
            },
            {
                label: 'Role',
                title: 'Frontend 구조 설계와 주요 화면 구현을 담당했어요',
                body: '온보딩, 행성 생성, 주민증 작성, 홈 피드, 딩동 인터랙션까지 사용 흐름이 끊기지 않도록 구현했어요.',
            },
            {
                label: 'Impact',
                title: '낯선 사람에게 먼저 다가가는 부담을 낮췄어요',
                body: '키워드 미리보기, 가벼운 메시지 선택, 댓글 흐름을 통해 사용자가 자연스럽게 대화할 수 있게 했어요.',
            },
        ],
        features: [
            {
                title: '온보딩',
                description: '서비스 컨셉을 빠르게 이해시키는 첫 진입 흐름',
                image: '/dingdong/inoutScreen.png',
            },
            {
                title: '행성 생성',
                description: '조직 단위 공간을 만들고 초대까지 이어지는 플로우',
                image: '/dingdong/dingdong14.webp',
            },
            {
                title: '주민증 작성',
                description: 'TMI 키워드로 나를 소개하는 입력 경험',
                image: '/dingdong/dingdong17.webp',
            },
            {
                title: '딩동 보내기',
                description: '부담 없는 메시지로 마음을 전달하는 인터랙션',
                image: '/dingdong/dingdong21.webp',
            },
        ],
        implementationNotes: [
            'React 기반 컴포넌트 구조 설계',
            '온보딩부터 홈까지 라우팅 플로우 구현',
            '키워드 입력, 칩 선택, 폼 검증 UI 구현',
            '반응형 레이아웃과 이미지 최적화',
            '서버 API 연동 상태에 따른 화면 분기',
            '사용자 테스트 이후 화면 밀도와 흐름 개선',
        ],
    },
    {
        slug: 'mesc',
        title: 'MESC',
        subtitle: '제조 공정 긴급 대응 및 Admin 시스템',
        period: '2023.10.10 - 2023.11.17',
        team: '6인',
        role: 'Frontend',
        description:
            '삼성 SDI 기업 연계 프로젝트 : 공장의 멈춤 없는 가동을 위해, MES 에러 상황을 실시간으로 해결하는 현장 맞춤형 챗봇',
        heroImage: '/dingdong/mesc.png',
        conceptImage: '/dingdong/dingdong10.webp',
        detailImage: '/dingdong/dingdong11.webp',
        tags: ['React', 'React-Native', 'TypeScript', 'Vercel', 'Styled-components', 'Recoil', 'Axios'],
        process: [
            {
                label: 'Problem',
                title: '프로젝트 경험을 단순 나열이 아니라 탐색 흐름으로 보여주고 싶었어요',
                body: '메인에서는 빠르게 훑고 상세에서는 역할, 과정, 구현 포인트를 읽을 수 있도록 정보 구조를 나눴어요.',
            },
            {
                label: 'Role',
                title: 'React 기반 화면 구조와 라우팅을 설계했어요',
                body: '카드 목록, 상세 페이지, 기술 탭, 교육 이력까지 재사용 가능한 컴포넌트로 분리해 유지보수하기 쉽게 만들었어요.',
            },
            {
                label: 'Impact',
                title: '프로젝트별 강점을 더 빠르게 비교할 수 있게 했어요',
                body: '카테고리 필터와 태그를 통해 Frontend, Backend, Infra 경험을 사용자가 바로 구분할 수 있도록 구성했어요.',
            },
        ],
        features: [
            {
                title: '프로젝트 필터',
                description: '관심 있는 역할별로 프로젝트 카드를 빠르게 탐색하는 기능',
                image: '/dingdong/dingdong18.webp',
            },
            {
                title: '상세 페이지',
                description: '프로젝트별 문제, 역할, 결과를 단계적으로 읽는 구조',
                image: '/dingdong/dingdong19.webp',
            },
            {
                title: '반응형 레이아웃',
                description: '모바일과 데스크톱에서 카드와 섹션이 안정적으로 보이는 화면',
                image: '/dingdong/dingdong20.webp',
            },
            {
                title: '배포 환경',
                description: 'Vite 빌드 결과물을 정적 호스팅에 맞게 배포하는 흐름',
                image: '/dingdong/dingdong22.webp',
            },
        ],
        implementationNotes: [
            'React Router 기반 상세 페이지 라우팅',
            '프로젝트 데이터 기반 카드 렌더링',
            '역할과 태그 기준 프로젝트 필터링',
            'TailwindCSS 기반 반응형 UI 구성',
            'Vite 빌드 및 정적 배포 흐름 정리',
            '컴포넌트 단위로 섹션 구조 분리',
        ],
    },
    {
        slug: 'squarev2',
        title: 'SquareV2',
        subtitle: '지역 상생을 위한 소상공인 네트워크 형성 및 픽업 서비스',
        period: '2024.02 - 2024.04',
        team: '4인',
        role: 'Frontend',
        description:
            '스터디 일정, 과제 제출 현황, 참여자별 진행률을 한 화면에서 확인할 수 있도록 구성한 관리형 웹 대시보드입니다.',
        heroImage: '/dingdong/squarev2.png',
        conceptImage: '/dingdong/dingdong15.webp',
        detailImage: '/dingdong/dingdong23.webp',
        tags: [
            'React',
            'ReactNative',
            'TypeScript',
            'Styled-components',
            'Reanimnated',
            'KakaoMapAPI',
            'WebView',
            'DeepLink',
        ],
        process: [
            {
                label: 'Problem',
                title: '스터디 운영 정보가 흩어져 있어 현황 파악이 어려웠어요',
                body: '일정, 과제, 참여자 상태를 한 화면에서 비교할 수 있게 대시보드 중심의 구조로 정리했어요.',
            },
            {
                label: 'Role',
                title: '목록, 필터, 상세 패널 UI를 구현했어요',
                body: '운영자가 반복적으로 확인하는 정보를 빠르게 스캔할 수 있도록 테이블과 상태 배지를 중심으로 화면을 만들었어요.',
            },
            {
                label: 'Impact',
                title: '운영자가 누락된 과제와 진행률을 빠르게 확인할 수 있게 했어요',
                body: '상태별 필터와 요약 지표를 통해 전체 흐름을 먼저 보고 필요한 항목만 좁혀볼 수 있게 개선했어요.',
            },
        ],
        features: [
            {
                title: '진행률 요약',
                description: '스터디별 완료율과 미제출 수를 한눈에 보는 영역',
                image: '/dingdong/dingdong3.webp',
            },
            {
                title: '상태 필터',
                description: '완료, 진행 중, 미제출 상태를 기준으로 목록을 좁히는 기능',
                image: '/dingdong/dingdong4.webp',
            },
            {
                title: '참여자 상세',
                description: '참여자별 과제 제출 내역과 코멘트를 확인하는 패널',
                image: '/dingdong/dingdong5.webp',
            },
            {
                title: '운영 기록',
                description: '회차별 공지와 변경 사항을 남기는 관리 흐름',
                image: '/dingdong/dingdong6.webp',
            },
        ],
        implementationNotes: [
            'Vue 기반 대시보드 화면 구현',
            '상태별 필터링과 정렬 UI 구현',
            '반복 확인에 맞춘 테이블 밀도 조정',
            '컴포넌트별 데이터 표시 책임 분리',
            '모바일 화면에서 요약 카드 우선 배치',
            '운영자 사용 흐름 기준으로 문구 정리',
        ],
    },
    {
        slug: 'ssak3',
        title: '싹쓰리',
        subtitle: '알아서 빨래를 수거해 주는 로봇 SSAK3',
        period: '2023.09 - 2023.10',
        team: '6인',
        role: 'Backend · Infra',
        description: '원하는 세탁물, 스케줄 설정을 통해 빨래를 수거해보세요!',
        heroImage: '/dingdong/ssak3.png',
        conceptImage: '/dingdong/dingdong9.webp',
        detailImage: '/dingdong/dingdong16.webp',
        tags: [
            'Python',
            'ROS2',
            'OpenCV',
            'FASTAPI',
            'GIT',
            'MARIADB',
            'REDIS',
            'NGINX',
            'JENKINS',
            'DOCKER',
            'DOCKERCOMPOSE',
        ],
        process: [
            {
                label: 'Problem',
                title: '예약 시간 중복과 상태 변경 규칙을 명확하게 관리해야 했어요',
                body: '예약 가능 시간, 취소 가능 조건, 관리자 승인 상태를 API 레벨에서 일관되게 검증하도록 정리했어요.',
            },
            {
                label: 'Role',
                title: '도메인 모델과 예약 API 흐름을 구현했어요',
                body: '예약 생성, 상세 조회, 상태 변경, 조건별 목록 조회를 분리해 클라이언트가 필요한 데이터를 안정적으로 받을 수 있게 했어요.',
            },
            {
                label: 'Impact',
                title: '프론트엔드가 상태별 화면을 예측 가능하게 구현할 수 있었어요',
                body: '응답 구조와 예외 메시지를 정리해 성공, 실패, 빈 상태를 화면에서 명확하게 처리할 수 있도록 도왔어요.',
            },
        ],
        features: [
            {
                title: '예약 생성',
                description: '시간 중복과 필수 조건을 검증한 뒤 예약을 저장하는 API',
                image: '/dingdong/dingdong12.webp',
            },
            {
                title: '상태 변경',
                description: '대기, 승인, 취소 상태 전환 규칙을 관리하는 기능',
                image: '/dingdong/dingdong14.webp',
            },
            {
                title: '조건 조회',
                description: '기간, 상태, 사용자 조건에 따라 예약 목록을 조회하는 API',
                image: '/dingdong/dingdong17.webp',
            },
            {
                title: '예외 처리',
                description: '검증 실패와 권한 오류를 일관된 응답으로 전달하는 구조',
                image: '/dingdong/dingdong21.webp',
            },
        ],
        implementationNotes: [
            'Spring 기반 REST API 설계',
            '예약 도메인 엔티티와 상태 값 정의',
            'MySQL 조회 조건 최적화',
            '중복 예약 검증 로직 구현',
            '공통 예외 응답 구조 정리',
            '프론트엔드 연동을 위한 API 명세 관리',
        ],
    },
    {
        slug: 'squarev1',
        title: 'SquareV1',
        subtitle: '지역 상생을 위한 소상공인 네트워크 형성 및 픽업 서비스',
        period: '2023.07 - 2023.08',
        team: '6인',
        role: 'Backend',
        description:
            '스터디 일정, 과제 제출 현황, 참여자별 진행률을 한 화면에서 확인할 수 있도록 구성한 관리형 웹 대시보드입니다.',
        heroImage: '/dingdong/squarev1.png',
        conceptImage: '/dingdong/dingdong15.webp',
        detailImage: '/dingdong/dingdong23.webp',
        tags: ['Java', 'SpringBoot', 'SpringDataJPA', 'Spring Security', 'OAuth', 'MySQL', 'RestAPI'],

        process: [
            {
                label: 'Problem',
                title: '스터디 운영 정보가 흩어져 있어 현황 파악이 어려웠어요',
                body: '일정, 과제, 참여자 상태를 한 화면에서 비교할 수 있게 대시보드 중심의 구조로 정리했어요.',
            },
            {
                label: 'Role',
                title: '목록, 필터, 상세 패널 UI를 구현했어요',
                body: '운영자가 반복적으로 확인하는 정보를 빠르게 스캔할 수 있도록 테이블과 상태 배지를 중심으로 화면을 만들었어요.',
            },
            {
                label: 'Impact',
                title: '운영자가 누락된 과제와 진행률을 빠르게 확인할 수 있게 했어요',
                body: '상태별 필터와 요약 지표를 통해 전체 흐름을 먼저 보고 필요한 항목만 좁혀볼 수 있게 개선했어요.',
            },
        ],
        features: [
            {
                title: '진행률 요약',
                description: '스터디별 완료율과 미제출 수를 한눈에 보는 영역',
                image: '/dingdong/dingdong3.webp',
            },
            {
                title: '상태 필터',
                description: '완료, 진행 중, 미제출 상태를 기준으로 목록을 좁히는 기능',
                image: '/dingdong/dingdong4.webp',
            },
            {
                title: '참여자 상세',
                description: '참여자별 과제 제출 내역과 코멘트를 확인하는 패널',
                image: '/dingdong/dingdong5.webp',
            },
            {
                title: '운영 기록',
                description: '회차별 공지와 변경 사항을 남기는 관리 흐름',
                image: '/dingdong/dingdong6.webp',
            },
        ],
        implementationNotes: [
            'Vue 기반 대시보드 화면 구현',
            '상태별 필터링과 정렬 UI 구현',
            '반복 확인에 맞춘 테이블 밀도 조정',
            '컴포넌트별 데이터 표시 책임 분리',
            '모바일 화면에서 요약 카드 우선 배치',
            '운영자 사용 흐름 기준으로 문구 정리',
        ],
    },

    {
        slug: 'FinalPJ',
        title: 'SSAFY FINAL PROJECT',
        subtitle: '빌드부터 배포까지 반복 작업을 자동화한 CI/CD 파이프라인',
        period: '2023.05(2주)',
        team: '2인',
        role: 'Frontend',
        description:
            'Docker 기반 실행 환경과 Jenkins 배포 흐름을 구성해 팀 프로젝트의 배포 반복 작업을 줄인 인프라 경험입니다.',
        heroImage: '/dingdong/enjoytrip.png',
        conceptImage: '/dingdong/dingdong20.webp',
        detailImage: '/dingdong/dingdong22.webp',
        tags: ['Vue.js', 'KAKAOMAPAPI', 'BootStrap', 'MyBatis', 'MySQL'],
        process: [
            {
                label: 'Problem',
                title: '수동 배포 과정에서 환경 차이와 반복 실수가 발생했어요',
                body: '빌드 산출물, 서버 실행 환경, 프록시 설정을 정리해 배포 과정의 변수를 줄이는 방향으로 접근했어요.',
            },
            {
                label: 'Role',
                title: '배포 서버와 자동화 흐름을 구성했어요',
                body: 'EC2 환경에서 Docker 컨테이너 실행 흐름을 잡고 Jenkins를 통해 빌드와 배포가 이어지도록 구성했어요.',
            },
            {
                label: 'Impact',
                title: '팀원이 같은 방식으로 배포 결과를 재현할 수 있게 했어요',
                body: '배포 순서를 자동화하고 문서화해 기능 수정 후 확인까지 걸리는 시간을 줄였어요.',
            },
        ],
        features: [
            {
                title: 'Docker 실행 환경',
                description: '애플리케이션 실행 환경을 컨테이너로 분리한 구성',
                image: '/dingdong/dingdong8.webp',
            },
            {
                title: 'Jenkins 자동화',
                description: '빌드와 배포 명령을 파이프라인으로 연결한 흐름',
                image: '/dingdong/dingdong10.webp',
            },
            {
                title: 'Nginx 프록시',
                description: '클라이언트와 API 서버 요청을 나누는 프록시 설정',
                image: '/dingdong/dingdong11.webp',
            },
            {
                title: '배포 문서화',
                description: '서버 접속, 빌드, 장애 대응 절차를 정리한 기록',
                image: '/dingdong/dingdong18.webp',
            },
        ],
        implementationNotes: [
            'AWS EC2 기반 서버 환경 구성',
            'Docker 이미지 빌드 및 컨테이너 실행',
            'Jenkins 파이프라인으로 배포 자동화',
            'Nginx 리버스 프록시 설정',
            '환경 변수와 배포 명령 정리',
            '배포 실패 시 확인할 로그 흐름 문서화',
        ],
    },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
