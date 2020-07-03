// 오늘 날짜 : 2020/07/03

// 문제 : 완주하지 못한 선수 (프로그래머스)
// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를
// 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의
// 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을
// return 하도록 solution 함수를 작성해주세요.

// 제한사항
// - 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// - completion의 길이는 participant의 길이보다 1 작습니다.
// - 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// - 참가자 중에는 동명이인이 있을 수 있습니다.

// 입출력 예
// participant	completion	return
// [leo, kiki, eden]	[eden, kiki]	leo
// [marina, josipa, nikola, vinko, filipa]	[josipa, filipa, marina, nikola]	vinko
// [mislav, stanko, mislav, ana]	[stanko, ana, mislav]	mislav

// 풀이
function solution(participant, completion) {
  // 참여한 선수를 반복
  let p = participant.sort();
  let c = completion.sort();

  for (let i of p) {
    // 완주한 선수를 반복해서
    if (p[i] !== c[i]) {
      return p[i];
    }
  }
}

// 처음 풀이
function solution(participant, completion) {
  for (let i = 0; i < completion.length; i++) {
    for (let j = 0; j < participant.length; j++) {
      if (completion[i] === participant[j]) {
        participant.splice(j, 1);
        break;
      }
    }
  }
  return participant[0];
}

// 새로 알게 된 사실
// 시간이 오래걸린다 >> 한번만 반복한다 >> sort로 한번씩 비교할 수 있다
// + 반복되는 문자를 모듈화
