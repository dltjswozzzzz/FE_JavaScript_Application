// 4번 문제.

let user = {
  Name: "지환",
  years: 23,
};

let { Name: Name, years: age, isAdmin } = user;

isAdmin = isAdmin ? isAdmin : false;

// 아래에 코드를 작성해주세요 ~

alert(Name); // "지환"
alert(age); // 23
alert(isAdmin); // false

//
// 구조 분해 할당을 사용해 아래 미션을 수행해 보세요.

// - `name` 프로퍼티의 값을 변수 `name`에 할당하세요.
// - `years` 프로퍼티의 값을 변수 `age`에 할당하세요.
// - `isAdmin` 프로퍼티의 값을 변수 `isAdmin`에 할당하세요. `isAdmin`이라는 프로퍼티가 없으면 false를 할당하세요.
