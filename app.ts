const bonus: number = 500;
const salary : number = 1000;
const res : number = salary + bonus;
console.log(res);

function getFullName(firstname : string, surname : string) : string{
    return `${firstname}, ${surname}`
}

const getFullNameArrow = (firstname : string, surname : string) : string => {
    return `${firstname}, ${surname}`
}

console.log(getFullNameArrow('niyaz', 'gazizov'))


function getFullNameObj(userEntity: { firstname: string, surname: string }): object {
    return userEntity;
  }
  
  const user = {
    firstname: 'Антон',
    surname: 'Ларичев',
    city: 'Moscow',
    age: 33,
    skills: { dev: true, devops: true }
  }
  
  console.log(getFullNameObj(user));
  