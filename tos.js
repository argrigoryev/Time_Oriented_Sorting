const arr_1 = [1, 213, 234567, 35, 5676543, 346546, 5463, 43534231, 45653421, 46534, 45653, 6787543, 565432];

for (let i = 0; i < arr_1.length; i++) {
    setTimeout(() => {
        console.log(arr_1[i]);
    }, arr_1[i].toString().length);
}

function getDegree(int) {
    return int.toString().length;
}