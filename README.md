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
