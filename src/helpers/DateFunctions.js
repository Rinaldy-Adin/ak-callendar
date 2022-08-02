const getDaysInMonth = (mo, yr) => new Date(yr, mo, 0).getDate();

const getPrevDay = (date = new Date()) => {
    const yesterday = new Date(date.getTime());
    yesterday.setDate(date.getDate() - 1);

    return yesterday;
};

const getNextDay = (date = new Date()) => {
    const tomorrow = new Date(date.getTime());
    tomorrow.setDate(date.getDate() + 1);

    return tomorrow;
};

const lastElmt = (array) => {
    if (array.length > 0) return array[array.length - 1];
};

const exactSameDate = (date1, date2) => {
    return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
    );
};

const generateArrayOfDates = (mo, yr) => {
    const today = new Date();
    const daysInCurrMo = getDaysInMonth(mo, yr);

    const dates = [];

    for (let i = 0; i < daysInCurrMo; i++) {
        const date = new Date(yr, mo, i + 1);
        dates.push(date);
    }

    const firstDayOfMo = dates[0];
    const lastDayOfMo = dates[daysInCurrMo - 1];

    let i = 1;
    while (i !== firstDayOfMo.getDay()) {
        dates.unshift(getPrevDay(dates[0]));

        i = (i + 1) % 7;
    }

    while (dates.length < 42) {
        dates.push(getNextDay(lastElmt(dates)));
    }

    return dates;
};

const toIsoString = (date) => {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function (num) {
            return (num < 10 ? '0' : '') + num;
        };

    return (
        date.getFullYear() +
        '-' +
        pad(date.getMonth() + 1) +
        '-' +
        pad(date.getDate()) +
        'T' +
        pad(date.getHours()) +
        ':' +
        pad(date.getMinutes()) +
        ':' +
        pad(date.getSeconds()) +
        dif +
        pad(Math.floor(Math.abs(tzo) / 60)) +
        ':' +
        pad(Math.abs(tzo) % 60)
    );
};

export { generateArrayOfDates, exactSameDate, toIsoString };
