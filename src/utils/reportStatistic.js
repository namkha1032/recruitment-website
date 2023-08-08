function roundToTwo(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

function getMedian(arr) {
  if (arr.length == 0) {
    return; // 0.
  }
  arr.sort((a, b) => a - b); // 1.
  const midpoint = Math.floor(arr.length / 2); // 2.
  const median =
    arr.length % 2 === 1
      ? arr[midpoint] // 3.1. If odd length, just take midpoint
      : (arr[midpoint - 1] + arr[midpoint]) / 2; // 3.2. If even length, take median of midpoints
  return roundToTwo(median);
}

function getMean(arr) {
  if (arr.length === 0) {
    return;
  }
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return roundToTwo(total / arr.length);
}

function getMode(arr) {
  if (arr.length === 0) {
    return;
  }
  const mode = {};
  let max = 0,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }

  return roundToTwo(max);
}

export function reportStatistic(input) {
  let generalScore = [];
  let techScore = [];
  let langScore = [];
  let softScore = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i].Sts === "Finished") {
      generalScore.push(input[i].Score);
      techScore.push(input[i].TechnologyScore);
      langScore.push(input[i].LanguageScore);
      softScore.push(input[i].SoftSkillScore);
    }
  }
  const generalMean = getMean(generalScore);
  const generalMedian = getMedian(generalScore);
  const generalMode = getMode(generalScore);
  const generalNum = generalScore.length;

  const techMean = getMean(techScore);
  const techMedian = getMedian(techScore);
  const techMode = getMode(techScore);
  const techNum = techScore.length;

  const langMean = getMean(langScore);
  const langMedian = getMedian(langScore);
  const langMode = getMode(langScore);
  const langNum = langScore.length;

  const softMean = getMean(softScore);
  const softMedian = getMedian(softScore);
  const softMode = getMode(softScore);
  const softNum = softScore.length;

  return {
    general: {
      value: generalScore,
      generalMean: generalMean,
      generalMedian: generalMedian,
      generalMode: generalMode,
      generalNum: generalNum,
    },
    technology: {
      value: techScore,
      techMean: techMean,
      techMedian: techMedian,
      techMode: techMode,
      techNum: techNum,
    },
    language: {
      value: langScore,
      langMean: langMean,
      langMedian: langMedian,
      langMode: langMode,
      langNum: langNum,
    },
    softskill: {
      value: softScore,
      softMean: softMean,
      softMedian: softMedian,
      softMode: softMode,
      softNum: softNum,
    },
  };
}
