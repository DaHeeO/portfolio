export type ProjectDetailBullet = {
    text: string;
    children?: string[];
};

export type ProjectDetailImage = {
    src: string;
    title?: string;
    alt?: string;
    caption?: string;
};

export type ProjectDetailLink = {
    label: string;
    href: string;
    description?: string;
};

export type ProjectDetailSection = {
    title: string;
    bullets: ProjectDetailBullet[];
    image?: string;
    imageAlt?: string;
    imageCaption?: string;
    images?: ProjectDetailImage[];
    links?: ProjectDetailLink[];
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
    tags: string[];
    detailSections: ProjectDetailSection[];
};

export const projects: Project[] = [
    {
        slug: 'moveon',
        title: 'MoveOn',
        subtitle: 'PWA 기반 라이프 로그 캘린더 앱',
        period: '2026.01.01 - 2026.02.18',
        team: '1인',
        role: 'Personal Project · Frontend',
        description:
            '식단, 운동, 체중, 감정 기록을 월별 캘린더에서 관리하는 라이프 로그 앱입니다. 외부 캘린더 라이브러리에 의존하지 않고 React와 CSS Grid로 캘린더 엔진을 구현하고, useMemo 기반 파생 상태와 Toast 알림 시스템으로 카테고리별 기록 피드백을 처리했습니다.',
        heroImage: '/dingdong/inout.png',
        tags: ['TypeScript', 'React', 'PWA', 'Context API', 'Custom Hooks', 'CSS Grid', 'CSS Media Query', 'Figma'],
        detailSections: [
            {
                title: 'MoveOn 모바일 결과물',
                bullets: [
                    {
                        text: '식단, 운동, 체중, 감정 기록을 날짜별 상태와 연결해 관리하는 화면을 구현했습니다.',
                    },
                    {
                        text: '기록 작성, 캘린더 조회, 카테고리별 상태 표시 화면을 중심으로 모바일 흐름을 구성했습니다.',
                        children: [
                            '날짜별 기록 여부를 캘린더에서 바로 확인할 수 있게 했습니다.',
                            '카테고리별 스티커와 색상으로 기록 상태를 구분했습니다.',
                        ],
                    },
                    {
                        text: '오늘, 선택 날짜, 기록이 있는 날짜를 각각 다른 상태로 표시했습니다.',
                    },
                ],
                image: '/dingdong/inoutScreen.png',
                imageAlt: 'MoveOn 모바일 화면',
                imageCaption: '기록 작성, 월별 캘린더, 카테고리별 상태 표시 화면',
            },
            {
                title: '캘린더 직접 구현',
                bullets: [
                    {
                        text: '외부 캘린더 라이브러리의 고정된 렌더링 구조에 맞추기보다, 서비스 요구사항에 맞는 Calendar Grid를 직접 구현했습니다.',
                    },
                    {
                        text: '월 시작 요일과 말일을 계산한 뒤, 시작 요일 이전의 빈 칸을 placeholder로 채우고 실제 날짜를 이어 붙였습니다.',
                        children: [
                            'placeholder와 실제 날짜를 하나의 배열로 관리했습니다.',
                            'CSS Grid의 repeat(7, 1fr) 구조로 요일과 날짜가 같은 열에 정렬되도록 렌더링했습니다.',
                        ],
                    },
                    {
                        text: 'CalendarItem에서 빈 칸, 일반 날짜, 오늘, 선택 날짜, 기록이 있는 날짜를 분기 렌더링했습니다.',
                    },
                ],
            },
            {
                title: '날짜 데이터와 화면 상태 분리',
                bullets: [
                    {
                        text: '날짜는 yyyy-MM, yyyy-MM-dd 문자열 key로 정규화해 월별 기록 필터링과 선택 날짜 상세 조회를 분리했습니다.',
                    },
                    {
                        text: '공유 상태는 일기 데이터와 선택 날짜로 제한하고, 입력 폼과 모달 상태는 각 컴포넌트 내부에 남겼습니다.',
                        children: [
                            '전역으로 필요한 데이터와 화면 내부 상태를 분리했습니다.',
                            '월별 로그 데이터와 선택된 기록처럼 파생되는 값은 useMemo로 관리했습니다.',
                        ],
                    },
                    {
                        text: '수정 완료 후 캘린더 화면으로 이동할 때 pivotDate와 category를 전달해 사용자가 수정한 기록 위치를 이어서 확인할 수 있게 했습니다.',
                    },
                ],
            },
            {
                title: 'Toast 알림 구조 구현',
                bullets: [
                    {
                        text: '기록 작성, 수정, 삭제처럼 여러 화면에서 공통으로 필요한 사용자 피드백을 Toast 구조로 분리했습니다.',
                    },
                    {
                        text: '컴포넌트 밖에서도 호출할 수 있는 toast 함수를 만들고, 내부에서는 eventManager.emit(message)만 실행하도록 구성했습니다.',
                        children: [
                            'ToastContainer는 useToastContainer 훅에서 eventManager를 구독합니다.',
                            '메시지가 들어오면 toasts 배열에 새 항목을 추가합니다.',
                            '3초 뒤 해당 id만 제거해 자동으로 사라지게 했습니다.',
                        ],
                    },
                    {
                        text: '사용하는 화면에서는 비즈니스 로직이 끝난 뒤 toast("일기가 수정되었습니다") 한 줄만 호출하면 됩니다.',
                        children: [
                            '페이지 컴포넌트는 기록 수정과 라우팅 이동에 집중합니다.',
                            '알림 표시 위치와 상태 관리는 ToastContainer가 담당합니다.',
                        ],
                    },
                ],
            },
            {
                title: 'PWA 적용과 배운 점',
                bullets: [
                    {
                        text: '웹 접근성과 앱과 유사한 사용 경험을 함께 제공하기 위해 PWA 기반 설정을 적용했습니다.',
                    },
                    {
                        text: 'manifest, theme-color, apple-touch-icon, viewport 설정과 Service Worker 등록을 통해 홈 화면 추가가 가능한 기반을 구성했습니다.',
                    },
                    {
                        text: '외부 캘린더 라이브러리 없이 날짜 계산, Grid 배치, 날짜 셀 상태 분기 렌더링을 직접 제어하면서 UI 요구사항을 코드 구조로 풀어내는 경험을 했습니다.',
                    },
                ],
            },
        ],
    },
    {
        slug: 'mesc',
        title: 'MESC',
        subtitle: '제조 공정 긴급 대응 및 Admin 시스템',
        period: '2023.10.10 - 2023.11.17',
        team: '6인 (BE 3, FE 3)',
        role: 'Frontend',
        description:
            '삼성 SDI 기업 연계 프로젝트 : 공장의 멈춤 없는 가동을 위해, MES 에러 상황을 실시간으로 해결하는 현장 맞춤형 챗봇',
        heroImage: '/dingdong/mesc.png',
        tags: ['React', 'React-Native', 'TypeScript', 'Vercel', 'Styled-components', 'Recoil', 'Axios'],
        detailSections: [
            {
                title: '웹 Admin 결과물 구현',
                bullets: [
                    {
                        text: 'React 기반 Admin에서 챗봇 카드, 시나리오 연결, 공정 조회 쿼리를 관리하는 화면을 구현했습니다.',
                    },
                    {
                        text: '운영자가 Admin UI에서 장애 대응 시나리오를 직접 수정할 수 있도록 카드 관리 흐름을 구성했습니다.',
                        children: [
                            '데이터 조회 리스트 관리 화면을 구현했습니다.',
                            '블록 연결 모달을 통해 버튼별 이동 경로를 선택할 수 있게 했습니다.',
                            '블록 수정 및 카드 관리 화면에서 시나리오 구조를 확인하고 편집할 수 있게 했습니다.',
                        ],
                    },
                    {
                        text: '카카오톡 채널 관리 방식을 참고해 운영자가 챗봇 카드 흐름을 시각적으로 이해할 수 있는 Backoffice UI를 만들었습니다.',
                    },
                ],
            },
            {
                title: 'Next ID 참조 구조로 시나리오 편집',
                bullets: [
                    {
                        text: 'Linked List의 next pointer 개념을 응용해 버튼의 link 값이 다음 블록 id를 참조하도록 설계했습니다.',
                    },
                    {
                        text: '운영자는 LinkModal에서 버튼별 이동 경로를 직접 선택하고, 중간 블록 삽입이나 흐름 변경 시 해당 link 값만 수정하면 됩니다.',
                        children: [
                            '버튼형 카드(CH1, CH2)의 각 버튼에 다음 이동 대상 블록 id를 저장했습니다.',
                            'btnIndex로 수정 대상 버튼을 식별했습니다.',
                            'card.sequence로 수정 대상 카드를 찾아 componentList를 불변 업데이트했습니다.',
                        ],
                    },
                    {
                        text: '전체 시나리오를 재구성하지 않고도 버튼 연결만 바꿔 장애 대응 흐름을 수정할 수 있게 했습니다.',
                    },
                ],
                images: [
                    {
                        src: '/dingdong/admincard.gif',
                        title: 'Admin 카드 관리',
                        alt: 'MESC Admin 카드 관리 GIF',
                        caption: '챗봇 카드 목록을 확인하고 카드 타입별 내용을 관리하는 화면',
                    },
                ],
            },
            {
                title: '카드 타입별 동적 Form 렌더링',
                bullets: [
                    {
                        text: '카드 타입(TX, CH1, CH2, TA)에 따라 입력 필드와 수정 방식이 달라지는 문제를 ComponentIdSwitch로 분리했습니다.',
                    },
                    {
                        text: '상위 컴포넌트는 카드 배열 순회만 담당하고, 실제 입력 UI는 타입별 Form 컴포넌트로 렌더링했습니다.',
                        children: [
                            'TXForm, CH1Form, CH2Form, TAForm으로 카드 타입별 입력 UI를 분리했습니다.',
                            '카드 타입이 추가되거나 수정되어도 상위 화면 구조가 크게 흔들리지 않게 했습니다.',
                            '여러 카드와 버튼이 동시에 수정되는 상황에서도 편집 상태를 일관되게 유지했습니다.',
                        ],
                    },
                    {
                        text: '카드 목록, 선택 카드, 미리보기처럼 여러 화면에서 공유되는 상태는 Recoil atom 단위로 분리했습니다.',
                    },
                ],
            },
            {
                title: '조회 쿼리와 요청 데이터 관리',
                bullets: [
                    {
                        text: '공정 로그 조회, 공정 테이블 조회처럼 자주 바뀌는 조회 쿼리를 Admin에서 관리할 수 있도록 구현했습니다.',
                    },
                    {
                        text: 'Recoil 상태 구조를 서버 API 요청 형태인 blockInfo, cardReqList에 맞춰 설계했습니다.',
                        children: [
                            '블록 정보, 카드 순서, 카드 타입, 콘텐츠, 버튼 정보를 하나의 요청 body로 조합했습니다.',
                            'Admin에서 수정한 카드와 조회 쿼리 결과가 모바일 챗봇 화면에 반영되도록 데이터 흐름을 맞췄습니다.',
                        ],
                    },
                    {
                        text: '카드 추가 때마다 필요했던 프론트엔드 코드 수정, 백엔드 로직 수정, DB 반영, 재배포 흐름을 운영자 UI 수정으로 줄였습니다.',
                    },
                ],
                images: [
                    {
                        src: '/dingdong/adminaction.gif',
                        title: '블록 연결 액션',
                        alt: 'MESC Admin 블록 연결 액션 GIF',
                        caption: '버튼별 다음 블록을 선택해 시나리오 이동 경로를 수정하는 흐름',
                    },
                ],
            },
            {
                title: '모바일 챗봇 연동과 결과',
                bullets: [
                    {
                        text: 'Admin에서 관리한 시나리오와 조회 데이터가 React Native 모바일 챗봇 화면에 반영되는 구조로 연결했습니다.',
                    },
                    {
                        text: '모바일 챗봇에서는 개발자가 장애 대응 과정에서 필요한 정보를 이어서 확인할 수 있도록 화면을 구성했습니다.',
                        children: [
                            '공정 선택 화면을 구현했습니다.',
                            '에러 로그 및 상세 데이터 조회 화면을 구현했습니다.',
                            '필요한 내용을 메일로 전달하는 흐름을 구현했습니다.',
                        ],
                    },
                    {
                        text: '기업 연계 프로젝트 우수상을 수상했고, 운영자가 장애 대응 시나리오를 직접 수정할 수 있는 시스템으로 정리했습니다.',
                    },
                ],
            },
            {
                title: '주 1회 회의 기반 프로토타입 협업',
                bullets: [
                    {
                        text: '주 1회 기업 담당자와 회의하며 프로토타입을 먼저 공유하고 바로 피드백을 받는 방식으로 작업했습니다.',
                    },
                    {
                        text: '회의에서 받은 피드백을 Admin 화면 구조와 챗봇 시나리오 흐름에 빠르게 반영했습니다.',
                        children: [
                            '초기 목업으로 화면 방향을 먼저 맞췄습니다.',
                            '운영자가 실제로 수정해야 하는 카드, 연결, 조회 쿼리 흐름을 우선순위로 정리했습니다.',
                            '기획 변경 사항을 화면 단위로 바로 확인하며 개발 속도를 높였습니다.',
                        ],
                    },
                    {
                        text: '프로토타입을 기준으로 팀과 기업 담당자의 이해를 맞춘 덕분에 구현 과정에서 재작업을 줄일 수 있었습니다.',
                    },
                ],
                images: [
                    {
                        src: '/dingdong/mockup.png',
                        title: '프로토타입 변화 과정',
                        alt: 'MESC 프로토타입 목업 이미지',
                        caption:
                            '주 1회 회의를 통해 목업을 공유하고 피드백을 받아 Admin 화면과 챗봇 흐름을 개선한 과정',
                    },
                ],
            },
        ],
    },
    {
        slug: 'squarev2',
        title: 'SquareV2',
        subtitle: '지역 상생을 위한 소상공인 네트워크 형성 및 픽업 서비스',
        period: '2024.02 - 2024.04',
        team: '4인 (BE 2 FE 2)',
        role: 'Frontend',
        description:
            '지역 상점의 픽업 주문과 커뮤니티 기능을 결합한 모바일 서비스입니다. React Native CLI 환경에서 앱 진입, 위치 권한, Kakao Map WebView, 딥링크 라우팅까지 사용자가 상점 상세로 자연스럽게 이동하는 프론트엔드 흐름을 구현했습니다.',
        heroImage: '/dingdong/squarev2.png',
        tags: [
            'React Native CLI',
            'React Native',
            'TypeScript',
            'Styled-components',
            'Reanimated',
            'Kakao Map API',
            'WebView',
            'Deep Link',
        ],

        detailSections: [
            {
                title: '앱 진입 및 위치 권한 플로우',
                bullets: [
                    {
                        text: 'Expo가 아닌 React Native CLI 환경에서 위치 권한, WebView, 딥링크처럼 네이티브 설정과 맞닿는 기능을 구현했습니다.',
                    },
                    {
                        text: '앱 최초 실행 여부와 토큰 유무에 따라 권한 안내, Main, Login 화면으로 분기했습니다.',
                        children: [
                            '위치 정보 활용 이유를 먼저 안내했습니다.',
                            'OS 권한 요청과 권한 거부 시 설정 이동 플로우를 연결했습니다.',
                            '권한 상태, 토큰 상태, 첫 실행 여부를 기준으로 초기 진입 화면을 정리했습니다.',
                        ],
                    },
                    {
                        text: '사용자가 앱에 들어와 가까운 상점을 탐색하기까지의 진입 경로를 화면 상태 중심으로 구성했습니다.',
                    },
                ],
                image: '/dingdong/onboarding.png',
                imageAlt: 'SquareV2 온보딩 및 위치 권한 화면',
                imageCaption: '앱 최초 진입, 위치 권한 안내, 권한 상태에 따른 화면 분기 흐름',
            },
            {
                title: 'Kakao Map WebView 연동',
                bullets: [
                    {
                        text: 'Kakao Map API 기반 웹 지도 페이지를 React Native WebView에 임베드했습니다.',
                    },
                    {
                        text: '네이티브 앱의 위치 정보와 웹 지도 인스턴스가 서로 다른 실행 환경에 있다는 점을 고려해 데이터 전달 경계를 분리했습니다.',
                        children: [
                            'injectedJavaScript로 지도 초기 데이터 전달 흐름을 구성했습니다.',
                            'postMessage로 상점 좌표, 상점명, 사용자 현재 위치를 WebView 지도 화면에 전달했습니다.',
                            '지도, 권한, 상점 상세 화면이 이어지는 사용자 흐름을 기준으로 상태를 정리했습니다.',
                        ],
                    },
                    {
                        text: '사용자가 현재 위치 주변 상점을 탐색하고 상점 상세로 이동할 수 있는 지도 기반 경험을 구현했습니다.',
                    },
                ],
                image: '/dingdong/location.png',
                imageAlt: 'SquareV2 위치 기반 지도 화면',
                imageCaption: 'Kakao Map WebView와 네이티브 위치 정보를 연결해 주변 상점을 탐색하는 화면',
            },
            {
                title: '딥링크 공유 및 상점 상세 라우팅',
                bullets: [
                    {
                        text: '카카오톡 공유 메시지에서 상점 상세 링크와 미리보기가 노출되도록 딥링크 흐름을 구성했습니다.',
                    },
                    {
                        text: 'React Navigation linking 설정에서 https 공유 링크와 square:// 커스텀 스킴을 함께 처리했습니다.',
                        children: [
                            '공유된 상점 id를 StoreDetail/:id 경로와 연결했습니다.',
                            '앱 종료 상태의 초기 URL은 getInitialURL로 처리했습니다.',
                            '앱 실행 중 수신된 URL은 subscribe 이벤트로 분리해 처리했습니다.',
                        ],
                    },
                    {
                        text: '앱 설치 여부와 실행 상태에 따라 웹 소개 페이지 또는 앱의 상점 상세 화면으로 이동하는 유입 흐름을 구현했습니다.',
                    },
                ],
                image: '/dingdong/deeplink.png',
                imageAlt: 'SquareV2 딥링크 공유 화면',
                imageCaption: '공유 링크와 StoreDetail/:id 라우팅을 연결해 특정 상점 상세로 진입하는 흐름',
            },
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
        tags: ['Python', 'FASTAPI', 'GIT', 'MARIADB', 'REDIS', 'NGINX', 'JENKINS', 'DOCKER', 'DOCKERCOMPOSE'],
        detailSections: [
            {
                title: '포팅 매뉴얼 작성 및 웹 게시',
                bullets: [
                    {
                        text: 'SSAK3 프로젝트의 실행 환경과 배포 과정을 Notion 포팅 매뉴얼로 정리해 웹에 게시했습니다.',
                    },
                    {
                        text: '팀원이 같은 환경을 재현할 수 있도록 서버 접속부터 초기 설정, 개발 도구, 배포 흐름을 문서화했습니다.',
                        children: [
                            'SSAFY EC2 접속과 WSL 기반 SSH 연결 방법을 정리했습니다.',
                            'Ubuntu 20.04.6 LTS 기준 초기 패키지 업데이트와 시간대 설정을 기록했습니다.',
                            'GitLab, Jira, MatterMost, Discord, Figma, Postman, Terminus 등 협업/개발 도구를 함께 정리했습니다.',
                        ],
                    },
                    {
                        text: '하단 링크를 통해 문서로 정리한 포팅메뉴얼을 확인하실 수 있습니다. ',
                    },
                ],
                links: [
                    {
                        label: 'SSAK3 Porting Manual 보기',
                        href: 'https://laser-trust-96e.notion.site/Porting-Manual-43dbfacb3ab1499babfe1c9e4a3d17a5',
                        description: 'EC2 접속, 서버 초기 설정, 개발환경, 배포 과정을 정리한 Notion 문서',
                    },
                ],
            },
            {
                title: 'Backend · Infra 담당 역할',
                bullets: [
                    {
                        text: '빨래 수거 로봇 서비스에서 FastAPI 기반 스케줄 설정 기능과 인프라 문서화를 담당했습니다.',
                    },
                    {
                        text: '사용자가 원하는 수거 일정을 설정할 수 있도록 백엔드 API 흐름을 정리했습니다.',
                        children: [
                            'FastAPI로 스케줄 설정 관련 요청을 처리했습니다.',
                            'MariaDB와 Redis를 활용하는 서비스 데이터 흐름을 함께 확인했습니다.',
                            '배포 환경은 Nginx, Docker, Docker Compose, Jenkins 기준으로 문서화했습니다.',
                        ],
                    },
                    {
                        text: '포팅 매뉴얼을 통해 실행과 배포 과정을 재현 가능하게 남긴 점을 프로젝트 산출물로 정리했습니다.',
                    },
                ],
            },
            {
                title: '모빌리티 · 스마트홈 학습 정리',
                bullets: [
                    {
                        text: 'SSAK3 프로젝트와 연관된 모빌리티/스마트홈 기초 개념을 Notion에 별도로 정리했습니다.',
                    },
                    {
                        text: 'ROS, Navigation, 제어, 센싱, 충돌 회피처럼 로봇 서비스 흐름을 이해하는 데 필요한 내용을 5개 문서로 나누어 게시했습니다.',
                    },
                    {
                        text: '상세 내용은 해당 링크를 통해 확인하실 수 있습니다.',
                    },
                ],
                links: [
                    {
                        label: 'mobility-smartHome01 - ROS',
                        href: 'https://laser-trust-96e.notion.site/mobility-smartHome01-a2e149881f924dfbb298b7daeaaa748c',
                        description: 'ROS 개념, 노드/메시지 예제, 기본 명령어 정리',
                    },
                    {
                        label: 'mobility-smartHome02 - Navigation',
                        href: 'https://laser-trust-96e.notion.site/mobility-smartHome02-0d7e6ec6cc274bde8e56b7ed534db509',
                        description: 'Navigation, Mapping, Localization 흐름 정리',
                    },
                    {
                        label: 'mobility-smartHome03 - Controller',
                        href: 'https://laser-trust-96e.notion.site/mobility-smartHome03-05ed1411a0764593b1a2973523b0977e',
                        description: 'Longitudinal/Transverse Controller와 제어 개념 정리',
                    },
                    {
                        label: 'mobility-smartHome04 - Sensing',
                        href: 'https://laser-trust-96e.notion.site/mobility-smartHome04-e79a1cf4e8164de1b4bf524ee9821439',
                        description: 'LiDAR, 카메라, 센서 융합과 Collision Check 정리',
                    },
                    {
                        label: 'mobility-smartHome05 - Collision Avoidance',
                        href: 'https://laser-trust-96e.notion.site/mobility-smartHome05-4808f9aadda04fb48fe2f2914aba1bfc',
                        description: '충돌 회피, Dijkstra, Occupancy Grid Map, Cost Map 정리',
                    },
                ],
            },
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
            '지역 상생 픽업 서비스의 1차 버전으로, Spring Boot와 Spring Data JPA 기반 판매자 API를 구현하며 화면, API, DB가 연결되는 흐름을 경험했습니다.',
        heroImage: '/dingdong/squarev1.png',
        tags: ['Java', 'SpringBoot', 'SpringDataJPA', 'Spring Security', 'OAuth', 'MySQL', 'RestAPI'],
        detailSections: [
            {
                title: 'Spring Boot/JPA 기반 판매자 API 구현',
                bullets: [
                    {
                        text: 'SquareV1에서는 판매자 기능에 필요한 백엔드 API를 Spring Boot와 Spring Data JPA 기반으로 구현했습니다.',
                    },
                    {
                        text: '상점, 사용자, 주문, 커뮤니티 데이터 관계를 ERD로 확인하고 API 응답에 필요한 필드를 화면 기준으로 정리했습니다.',
                        children: [
                            'JPA Entity와 Repository를 기준으로 DB 조회 흐름을 구성했습니다.',
                            '판매자 화면에서 필요한 데이터와 DB 테이블의 관계를 맞췄습니다.',
                            '프론트엔드에서 바로 사용할 수 있는 응답 구조를 고려했습니다.',
                        ],
                    },
                    {
                        text: '단순 CRUD 구현을 넘어서 화면에서 어떤 데이터가 필요한지 기준으로 API와 DB 연결 흐름을 이해했습니다.',
                    },
                ],
                image: '/dingdong/Square.png',
                imageAlt: 'SquareV1 기능 정리 이미지',
                imageCaption: '판매자 API와 화면 요구사항을 기준으로 정리한 SquareV1 기능 흐름',
            },
            {
                title: 'Response DTO 중심의 응답 구조 설계',
                bullets: [
                    {
                        text: '프론트엔드가 필요한 데이터를 한 번에 사용할 수 있도록 Entity를 그대로 반환하지 않고 Response DTO로 응답을 정리했습니다.',
                    },
                    {
                        text: 'API 응답에는 화면에 필요한 값만 담고, 내부 DB 구조나 불필요한 연관 데이터를 노출하지 않도록 분리했습니다.',
                        children: [
                            '조회 결과를 Response 객체로 변환해 반환했습니다.',
                            '상점 상세, 주문, 판매자 관리 화면에서 필요한 필드를 기준으로 응답 형태를 맞췄습니다.',
                            'Entity와 API 응답 모델을 분리해 유지보수성을 높였습니다.',
                        ],
                    },
                    {
                        text: 'Response 구조를 기준으로 화면, API, DB가 어떤 순서로 연결되는지 이해하며 구현했습니다.',
                    },
                ],
            },
            {
                title: '인증과 데이터 흐름 경험',
                bullets: [
                    {
                        text: 'Spring Security와 OAuth 기반 인증 흐름을 프로젝트 구조 안에서 경험했습니다.',
                    },
                    {
                        text: '판매자 기능에서 인증된 사용자 기준으로 필요한 데이터를 조회하고 응답하는 흐름을 정리했습니다.',
                        children: [
                            '요청 주체에 따라 필요한 데이터를 조회하는 구조를 이해했습니다.',
                            'API 응답이 프론트엔드 화면 상태와 맞물리도록 필드 구성을 확인했습니다.',
                        ],
                    },
                    {
                        text: '이 경험을 통해 프론트엔드 화면 요구사항을 백엔드 Response 설계로 연결하는 감각을 익혔습니다.',
                    },
                ],
                image: '/dingdong/squarev1.png',
                imageAlt: 'SquareV1 시스템 아키텍처',
                imageCaption: '프론트엔드, API 서버, DB가 연결되는 SquareV1 시스템 구조',
            },
        ],
    },

    // {
    //     slug: 'FinalPJ',
    //     title: 'SSAFY FINAL PROJECT',
    //     subtitle: '빌드부터 배포까지 반복 작업을 자동화한 CI/CD 파이프라인',
    //     period: '2023.05(2주)',
    //     team: '2인',
    //     role: 'Frontend',
    //     description:
    //         'Docker 기반 실행 환경과 Jenkins 배포 흐름을 구성해 팀 프로젝트의 배포 반복 작업을 줄인 인프라 경험입니다.',
    //     heroImage: '/dingdong/enjoytrip.png',
    //     tags: ['Vue.js', 'KAKAOMAPAPI', 'BootStrap', 'MyBatis', 'MySQL'],

    //     detailSections: [
    //         {
    //             title: 'MoveOn 모바일 결과물',
    //             bullets: [
    //                 {
    //                     text: '식단, 운동, 체중, 감정 기록을 날짜별 상태와 연결해 관리하는 화면을 구현했습니다.',
    //                 },
    //                 {
    //                     text: '기록 작성, 캘린더 조회, 카테고리별 상태 표시 화면을 중심으로 모바일 흐름을 구성했습니다.',
    //                     children: [
    //                         '날짜별 기록 여부를 캘린더에서 바로 확인할 수 있게 했습니다.',
    //                         '카테고리별 스티커와 색상으로 기록 상태를 구분했습니다.',
    //                     ],
    //                 },
    //                 {
    //                     text: '오늘, 선택 날짜, 기록이 있는 날짜를 각각 다른 상태로 표시했습니다.',
    //                 },
    //             ],
    //             image: '/dingdong/inoutScreen.png',
    //             imageAlt: 'MoveOn 모바일 화면',
    //             imageCaption: '기록 작성, 월별 캘린더, 카테고리별 상태 표시 화면',
    //         },
    //         {
    //             title: '캘린더 직접 구현',
    //             bullets: [
    //                 {
    //                     text: '외부 캘린더 라이브러리의 고정된 렌더링 구조에 맞추기보다, 서비스 요구사항에 맞는 Calendar Grid를 직접 구현했습니다.',
    //                 },
    //                 {
    //                     text: '월 시작 요일과 말일을 계산한 뒤, 시작 요일 이전의 빈 칸을 placeholder로 채우고 실제 날짜를 이어 붙였습니다.',
    //                     children: [
    //                         'placeholder와 실제 날짜를 하나의 배열로 관리했습니다.',
    //                         'CSS Grid의 repeat(7, 1fr) 구조로 요일과 날짜가 같은 열에 정렬되도록 렌더링했습니다.',
    //                     ],
    //                 },
    //                 {
    //                     text: 'CalendarItem에서 빈 칸, 일반 날짜, 오늘, 선택 날짜, 기록이 있는 날짜를 분기 렌더링했습니다.',
    //                 },
    //             ],
    //         },
    //         {
    //             title: '날짜 데이터와 화면 상태 분리',
    //             bullets: [
    //                 {
    //                     text: '날짜는 yyyy-MM, yyyy-MM-dd 문자열 key로 정규화해 월별 기록 필터링과 선택 날짜 상세 조회를 분리했습니다.',
    //                 },
    //                 {
    //                     text: '공유 상태는 일기 데이터와 선택 날짜로 제한하고, 입력 폼과 모달 상태는 각 컴포넌트 내부에 남겼습니다.',
    //                     children: [
    //                         '전역으로 필요한 데이터와 화면 내부 상태를 분리했습니다.',
    //                         '월별 로그 데이터와 선택된 기록처럼 파생되는 값은 useMemo로 관리했습니다.',
    //                     ],
    //                 },
    //                 {
    //                     text: '수정 완료 후 캘린더 화면으로 이동할 때 pivotDate와 category를 전달해 사용자가 수정한 기록 위치를 이어서 확인할 수 있게 했습니다.',
    //                 },
    //             ],
    //         },
    //         {
    //             title: 'Toast 알림 구조 구현',
    //             bullets: [
    //                 {
    //                     text: '기록 작성, 수정, 삭제처럼 여러 화면에서 공통으로 필요한 사용자 피드백을 Toast 구조로 분리했습니다.',
    //                 },
    //                 {
    //                     text: '컴포넌트 밖에서도 호출할 수 있는 toast 함수를 만들고, 내부에서는 eventManager.emit(message)만 실행하도록 구성했습니다.',
    //                     children: [
    //                         'ToastContainer는 useToastContainer 훅에서 eventManager를 구독합니다.',
    //                         '메시지가 들어오면 toasts 배열에 새 항목을 추가합니다.',
    //                         '3초 뒤 해당 id만 제거해 자동으로 사라지게 했습니다.',
    //                     ],
    //                 },
    //                 {
    //                     text: '사용하는 화면에서는 비즈니스 로직이 끝난 뒤 toast("일기가 수정되었습니다") 한 줄만 호출하면 됩니다.',
    //                     children: [
    //                         '페이지 컴포넌트는 기록 수정과 라우팅 이동에 집중합니다.',
    //                         '알림 표시 위치와 상태 관리는 ToastContainer가 담당합니다.',
    //                     ],
    //                 },
    //             ],
    //         },
    //         {
    //             title: 'PWA 적용과 배운 점',
    //             bullets: [
    //                 {
    //                     text: '웹 접근성과 앱과 유사한 사용 경험을 함께 제공하기 위해 PWA 기반 설정을 적용했습니다.',
    //                 },
    //                 {
    //                     text: 'manifest, theme-color, apple-touch-icon, viewport 설정과 Service Worker 등록을 통해 홈 화면 추가가 가능한 기반을 구성했습니다.',
    //                 },
    //                 {
    //                     text: '외부 캘린더 라이브러리 없이 날짜 계산, Grid 배치, 날짜 셀 상태 분기 렌더링을 직접 제어하면서 UI 요구사항을 코드 구조로 풀어내는 경험을 했습니다.',
    //                 },
    //             ],
    //         },
    //     ],
    // },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
