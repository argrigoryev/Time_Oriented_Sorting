const arr_1 = [1, 213, 234567, 35, 5676543, 346546, 5463, 43534231, 45653421, 46534, 45653, 6787543, 565432];

const sorted = arr_1.sort(function(a, b) {
    return a - b;
});

for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i]);
}