-- Must Features
MERGE INTO features (title, description, is_must) KEY(title) VALUES ('구조동물 카드 피드 & 다중 조건 필터링', '사용자가 원하는 조건으로 유기동물을 쉽게 탐색', true);
MERGE INTO features (title, description, is_must) KEY(title) VALUES ('카드 스와이프 UI', '직관적이고 흥미로운 탐색 경험 제공', true);
MERGE INTO features (title, description, is_must) KEY(title) VALUES ('동물 상세 정보 & 관심 저장', '상세 정보 확인 및 마음에 드는 동물 저장, 전화 연결', true);
MERGE INTO features (title, description, is_must) KEY(title) VALUES ('맞춤형 매칭 설문', '5가지 문항을 통해 사용자에게 딱 맞는 동물 추천', true);
MERGE INTO features (title, description, is_must) KEY(title) VALUES ('카카오맵 보호소 지도', '내 주변 보호소 위치 및 상세 정보 시각화 제공', true);
MERGE INTO features (title, description, is_must) KEY(title) VALUES ('랜딩 통계 시각화', 'CountUp과 요약 차트를 통한 서비스 신뢰도 상승', true);

-- Should Features
MERGE INTO features (title, description, is_must) KEY(title) VALUES ('구조동물 통계 상세 차트', 'Chart.js를 활용한 심도 있는 데이터 시각화', false);
MERGE INTO features (title, description, is_must) KEY(title) VALUES ('분실동물 탭', '잃어버린 반려동물을 찾기 위한 전용 탐색 공간', false);
MERGE INTO features (title, description, is_must) KEY(title) VALUES ('Gemini AI 동물 소개글', 'AI가 작성하는 1인칭 시점의 매력적인 동물 소개글', false);
MERGE INTO features (title, description, is_must) KEY(title) VALUES ('관심 동물 목록 및 커뮤니티', '찜한 동물 관리 및 입양 후기/분실 목격 게시판', false);
MERGE INTO features (title, description, is_must) KEY(title) VALUES ('비슷한 아이들 추천 & 설문 기록 관리', '매칭 설문 기록 조회 및 유사 동물 추천 시스템', false);

-- Members
MERGE INTO members (name, role) KEY(name) VALUES ('정성오', 'Full-Stack (팀장)');
MERGE INTO members (name, role) KEY(name) VALUES ('김은솔', 'Front-End');
MERGE INTO members (name, role) KEY(name) VALUES ('곽선아', 'Front-End');