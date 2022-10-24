function sum(numbers) {
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

function avg(numbers) {
    return sum(numbers) / numbers.length;
}

function max(numbers) {
    return numbers.reduce((max, curr) => (max > curr ? max : curr), numbers[0])
}

function med(numbers) {
    let len = numbers.length
    numbers.sort(function(a, b){ return a - b; })
    return (len % 2 == 0 ? (numbers[len / 2 - 1] + numbers[len / 2]) / 2 : numbers[len / 2 - 0.5])
}

function s1(numbers) {
    let len = numbers.length
    return (len % 2 == 0 ? numbers.slice(0, len / 2) : numbers.slice(0, len / 2 - 0.5))
}

function s2(numbers) {
    let len = numbers.length
    return (len % 2 == 0 ? numbers.slice(len / 2, len) : numbers.slice(len / 2 + 0.5, len))
}

function iqr(numbers) {
    numbers.sort(function(a, b){ return a - b; })
    return Math.abs(med(s1(numbers)) - med(s2(numbers)))
}

function outlier(numbers) {
    var cal_numbers = numbers.slice()
    var ret = []

    let len = cal_numbers.length
    let IQR = iqr(cal_numbers)
    let Q1 = med(s1(cal_numbers))
    let Q2 = med(s2(cal_numbers))

    var step;
    for (step = 0; step < len; step++) {
        if (numbers[step] < Q1 - 1.5 * IQR || numbers[step] > Q2 + 1.5 * IQR)
            ret.push(numbers[step])
    }

    return ret
}

module.exports = {
    sum,
    avg,
    max,
    med,
    iqr,
    outlier,
};