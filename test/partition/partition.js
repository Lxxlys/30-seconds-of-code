module.exports = (arr, fn) =>
arr.reduce(
(acc, val, i, arr) => {
acc[fn(val, i, arr) ? 0 : 1].push(val);
return acc;
},
[[], []]
);