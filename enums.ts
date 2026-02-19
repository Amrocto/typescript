enum StatusCode {
    SUCCES = 1,
    IN_PROCESS,
    FAILED = 'f'
}

const res = {
    message : 'Платеж успешен',
    statusCode: StatusCode.SUCCES
}

if (res.statusCode === StatusCode.SUCCES) {

}

function action(status : StatusCode) {

}

action(StatusCode.SUCCES);
action(1);

function compute(){
    return 3;
}

enum Roles { 
    ADMIN = 1,
    USER = ADMIN * 2,
    GUEST = compute()
}

function test(x: {ADMIN:number}){

}

test(Roles);



function convert (a:number):string {
    return 'hello'
};