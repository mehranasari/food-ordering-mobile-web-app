export const monthsJalaali = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند'
];

export const daysJalaali = [
    'ج',
    'پ',
    'چ',
    'س',
    'د',
    'ی',
    'ش',
];
export const JalaiWeekDayConvertor = (isoDay) => {
    switch (isoDay) {
        case 0:
            return 1
            // break;
        case 1:
            return 2
            // break;
        case 2:
            return 3
            // break;
        case 3:
            return 4
            // break;
        case 4:
            return 5
            // break;
        case 5:
            return 6
            // break;
        case 6:
            return 0
            // break;
        default:
            break;
    }
}

