function lcs(i, j, a, b) {
  if (i === -1 || j === -1) {
    return 0;
  }
  if (a[i] === b[j]) {
    return lcs(i - 1, j - 1, a, b) + 1;
  }
  const prevI = lcs(i - 1, j, a, b);
  const prevJ = lcs(i, j - 1, a, b);
  return Math.max(prevI, prevJ);
}

function longestCommonSubSeq(str1, str2) {
  const lastStr1Idx = str1.length - 1;
  const lastStr2Idx = str2.length - 1;
  const isAnyStringEmpty = lastStr1Idx === -1 || lastStr2Idx === -1;
  if (isAnyStringEmpty) {
    return 0;
  }
  const lastElemStr1 = str1[lastStr1Idx];
  const lastElemStr2 = str2[lastStr2Idx];
  if (lastElemStr1 === lastElemStr2) {
    return (1 + longestCommonSubSeq(str1.substring(0, lastStr1Idx), str2.substring(0, lastStr2Idx)));
  }
  const longestRemovingLast1 = longestCommonSubSeq(str1.substring(0, lastStr1Idx), str2)
  const longestRemovingLast2 = longestCommonSubSeq(str1, str2.substring(0, lastStr2Idx))
  return Math.max(longestRemovingLast1, longestRemovingLast2)
}

console.log(lcs(3, 3, "ADFG", "ABCD"));
console.log(longestCommonSubSeq("ADFG", "ABCD"));
