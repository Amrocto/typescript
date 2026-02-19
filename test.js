"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus["PUBLISHED"] = "published";
    QuestionStatus["DRAFT"] = "draft";
    QuestionStatus["DELETED"] = "deleted";
})(QuestionStatus || (QuestionStatus = {}));
async function getFags(req) {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = arr.filter((el) => el % 2 === 0);
console.log(evens);
//# sourceMappingURL=test.js.map