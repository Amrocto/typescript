"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCES"] = 1] = "SUCCES";
    StatusCode[StatusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Платеж успешен',
    statusCode: StatusCode.SUCCES
};
if (res.statusCode === StatusCode.SUCCES) {
}
function action(status) {
}
action(StatusCode.SUCCES);
action(1);
function compute() {
    return 3;
}
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["USER"] = 2] = "USER";
    Roles[Roles["GUEST"] = compute()] = "GUEST";
})(Roles || (Roles = {}));
function test(x) {
}
test(Roles);
//# sourceMappingURL=enums.js.map