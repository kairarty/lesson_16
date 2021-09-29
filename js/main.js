console.log('Sample JavaScript #2 HW #16');

var userObj = {
    firstName: 'asd',
    lastName: 'Фаasda',
    age: 11,
    fullName() {
        return `${userObj.firstName} ${userObj.lastName}`;
    }
};

function defUpperStr(text) {
    return (text || 'DEFAULT TEXT').toUpperCase();
}

function evenFn(n) {
    var array = [];
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) array.push(i);
    }
    return array;
}

function weekFn(n) {
    let day;
    switch (n) {
        case 1:
            day = 'Понедельник';
            break;
        case 2:
            day = 'Вторник';
            break;
        case 3:
            day = 'Среда';
            break;
        case 4:
            day = 'Четверг';
            break;
        case 5:
            day = 'Пятница';
            break;
        case 6:
            day = 'Суббота';
            break;
        case 7:
            day = 'Воскресенье';
            break;
        default:
            day = null;
    }
    return day;
}


function ageClassification(n) {
    return n > 0
        ? n > 24
            ? n > 44
                ? n > 65
                    ? n > 75
                        ? n > 90
                            ? n > 122
                                ? null
                                : 'долгожители'
                            : 'старческий возраст'
                        : 'пожилой возраст'
                    : 'средний возраст'
                : 'молодой возраст'
            : 'детский возраст'
        : null;
}

function oddFn(n) {
    var array = [];
    var i = 0;

    while (i++ < n) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }
    return array;
}

function mainFunc(a, b, func) {
    if (func && typeof func === 'function') {
        return func(a, b);
    }
    return false;
}

function cbRandom(a, b) {
    return Math.floor(Math.random() * (a - b + 1)) + b;
}

function cbPow(a, b) {
    return Math.pow(a, b);
}

function cbAdd(a, b) {
    return a + b;
}

/*
 * mainFunc(2, 5, cbRandom) → случайно от 2 до 5 включительно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */
