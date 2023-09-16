var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let maxLen = 0;
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    if (map.has(s[end])) {
      // start = map.get(s[end]) + 1
      start = Math.max(map.get(s[end]) + 1, start);
    }
    map.set(s[end], end);
    maxLen = Math.max(end - start + 1, maxLen);
  }
  return maxLen;
};

var search01 = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

var searchRange = function(nums, target) {
  let ans = [-1, -1];
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;
  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
      ans = [leftIdx, rightIdx];
  } 
  return ans;
};

const binarySearch = (nums, target, lower) => {
  let left = 0, right = nums.length - 1, ans = nums.length;
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > target || (lower && nums[mid] >= target)) {
          right = mid - 1;
          ans = mid;
      } else {
          left = mid + 1;
      }
  }
  return ans;
}

var mySqrt = function(x) {
    let left = 0
    let right = x
    let res = -1
    while(left <= right){
      let mid = left + ((right - left >> 1))
      if(mid * mid <= x){
        res = mid
        left = mid + 1
      }else{
        right = mid - 1
      }
    }
    return res
}
console.log(mySqrt(0));
