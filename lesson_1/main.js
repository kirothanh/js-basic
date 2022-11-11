function getNextYear(year) {
    year = new Date();
    return year.getFullYear() + 1;
}

console.log(getNextYear(`2022`));