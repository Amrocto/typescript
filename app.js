"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bonus = 500;
const salary = 1000;
const res = salary + bonus;
console.log(res);
function getFullName(firstname, surname) {
    return `${firstname}, ${surname}`;
}
const getFullNameArrow = (firstname, surname) => {
    return `${firstname}, ${surname}`;
};
console.log(getFullNameArrow('niyaz', 'gazizov'));
function getFullNameObj(userEntity) {
    return userEntity;
}
const user = {
    firstname: 'Антон',
    surname: 'Ларичев',
    city: 'Moscow',
    age: 33,
    skills: { dev: true, devops: true }
};
console.log(getFullNameObj(user));
//# sourceMappingURL=app.js.map


