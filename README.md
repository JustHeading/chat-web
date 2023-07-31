ChatWeb Project

## 파일 구조

### 1. Css

1. index.css는 특정 공통된 색이나 태그만을 포함
2. App.css는 app을 위한 가변 px만을 포함
3. keyframe.css는 animation만을 포함

## Git Commit Rule

### 1. The Anatomy of a Commit Message

```
git commit -m <message>
```

```
git commit -m <title> -m <description>
```

### 2. Steps to Write Better Commit Messages

1. **대소문자 및 구두점**: title은 모두 소문자로 작성하며, description은 첫 단어를 대문자로 작성한다. 두 곳 모두 끝에 구두점을 사용하지 않는다.
2. **분위기**: title에 명령형 분위기를 사용한다.
3. **commit 유형**: commit 유형(ex. Conventional Commit)을 지정한다.
4. **길이**: title은 이상적으로는 50자를 넘지 않아야 하며, description은 72자로 제한되어야 한다.
5. **내용**: 문장에서 필러 단어와 구(ex. 그래도, 아마도, 제 생각에는, 일종의)를 직접적으로 제거한다.

### 3. Conventional Commits

```
<type>: <message>

[optional description]
```

> Here are some types

- `feat`: 변경 사항과 함께 새로운 기능(feature) 도입
- `fix`: 버그 수정(fix)
- `chore`: fix 또는 feature와 관련이 없고, src나 test 파일을 수정하지 않는 변경 (ex. 종속성 업데이트)
- `refactor`: 버그를 fix하거나 feature를 추가하지 않는, 코드 리팩토링(refactoring)
- `docs`: README 또는 기타 markdown 파일과 같은 문서(documents) 업데이트
- `style`: 공백, 세미콜론 누락 등과 같은 코드 스타일(style)과 관련되어, 코드의 의미에 영향을 미치지 않는 변경
- `test`: 새 테스트(test) 또는 이전 테스트 수정
- `perf`: 성능(performance) 향상
- `ci`: CI(Continuous Integration)과 관련된 것
- `build`: 빌드(build) 시스템 또는 외부 종속성에 영향을 미치는 변경 사항
- `revert`: 이전 commit 되돌리기(revert)

### 4. Examples

- `feat: improve performance with lazy load implementation for images`
- `chore: update npm dependency to latest version`
- `Fix bug preventing users from submitting the subscribe form`
- `Update incorrect cline phone number within footer body per client request`

### 5. References

[Website: conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#specification)

[Forum: How to Write Better Git Commit Messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
