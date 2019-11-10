# <img src="https://docs.nestjs.com/assets/logo-small.svg" alt="drawing" width="50"/> NestJS Boilerplate

[NestJS](https://nestjs.com/) 프로젝트를 시작할 때 사용할 수 있는 보일러플레이트

## 주요 기술스택

| 이름           | 설명                                                                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| npm            | 종속성 관리 및 스크립팅                                                                                                                            |
| typescript 3.x | 자바스크립트를 보완하는 타입스크립트의 최신 버전                                                                                                   |
| MySQL 5.7      | 기본 데이터베이스로 MySQL 5.7버전을 사용합니다. 프로젝트 요구사항에 맞게 수정하여 쓰도록합니다.                                                    |
| NestJS         | 타입스크립트의 decorator 기능을 활용하여 구조적이고 효율적인 개발을 도와주는 서버 개발 프레임워크. express를 기반으로 개발할 수 있도록 지원해준다. |

## 시작하기

```shell
# 프로젝트 생성
git clone git@github.com:mung9/nestjs-boilerplate.git first_project

# 프로젝트 디렉토리로 이동
cd first_project

# 도커 컨테이너 활성화
docker-compose -f docker-compose.dev.yml up -d
```

### 사전 요구사항

도커가 설치되어있어야합니다.

```
> docker -v
Docker version xx.xx.x, build xxxxxxx
```

## npm 스크립트

기본적인 명령이 제공됩니다

```npm
# src/**/*.ts에 해당하는 파일을 저장할 경우 애플리케이션을 자동으로 재시작합니다.
"start": "nodemon --watch 'src/**/*.ts' --ignore 'src/**/*.spec.ts' --exec 'node_modules/.bin/ts-node' src/main.ts"
```

```npm
# 타입스크립트 린트
"lint": "tsc --noEmit && eslint \"**/*.{js,ts}\" --quiet --fix"
```

```npm
# tests/ 하위의 테스트 파일로 테스트를 시작합니다.
"test": "mocha -r ts-node/register tests/**/*.spec.ts"
```

## 요청 테스트

도커를 통해 컨테이너를 띄우면 서버에 요청을 보내 응답을 받을 수 있습니다.

### 1. 유저 등록

#### 1.1 endpoint

`POST /api/v1/users`

#### 1.2 headers

| 이름         | 값               |
| ------------ | ---------------- |
| Content-Type | application/json |

#### 1.3 body

| 이름 | 설명 | 타입    |
| ---- | ---- | ------- |
| name | 이름 | string  |
| age  | 나이 | integer |

#### 1.4 example

```shell
# 요청
curl -POST localhost:3000/api/v1/users \
-H 'Content-Type: application/json' \
-d '{"name":"eman", "age":17}'

# 응답
{"id":2,"name":"eman","age":17,"updatedAt":"2019-11-10T09:53:14.776Z","createdAt":"2019-11-10T09:53:14.776Z"}
```

### 2. 유저 조회

#### 2.1 endpoint

`GET /api/v1/users/{id}`

#### 2.2 example

```shell
# 요청
curl -GET localhost:3000/api/v1/users/2

# 응답
{"id":2,"name":"eman","age":17,"createdAt":"2019-11-10T09:53:14.000Z","updatedAt":"2019-11-10T09:53:14.000Z"}
```
