/**
 * 頻率表，初始頻率皆為0
 * @param {*} list
 * @returns
 */
function initfrequency(list) {
  return list.reduce((acc, cur) => {
    acc[cur] = 0;
    return acc;
  }, {});
}

/**
 * 分成兩組
 * @param {*} list
 * @returns
 */
function divideTwoGroups(list) {
  const copy = list.slice();
  const groupOne = [];
  let randomIndex;
  while (groupOne.length < 4) {
    randomIndex = Math.floor(Math.random() * copy.length);
    groupOne.push(copy[randomIndex]);
    copy.splice(randomIndex, 1);
  }

  return {
    groupOne,
    groupTwo: copy,
  };
}

// 只適用12人
export default function createOrder(list, totalRound, numPerRound) {
  let result = [];
  // 休息的人
  let restList = [];
  // 上場打的人
  let pickList = list.slice();
  // 一場休息人數
  const restNum = list.length - numPerRound;
  // 休息頻率表
  let frequency = initfrequency(list);
  let pickIndex;

  for (let i = 0; i < totalRound; i++) {
    while (restList.length < restNum) {
      pickIndex = Math.floor(Math.random() * pickList.length);

      if (frequency[pickList[pickIndex]] < 1) {
        // 為了要搞出至少打二休一
        frequency[pickList[pickIndex]] = 2;
        restList.push(pickList[pickIndex]);
        pickList.splice(pickIndex, 1);
      }
    }

    result.push(divideTwoGroups(pickList));

    // 重置
    pickList.forEach((item) => {
      frequency[item] -= 1;
    });
    restList = [];
    pickList = list.slice();
  }

  return result;
}
