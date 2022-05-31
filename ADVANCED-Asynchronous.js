//PHASE 2. Advanced
    //Asynchronous js challenge
setStudentAgeApi = (student, age) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if(age < 0)
                reject ("Bad Age")
         else
                resolve(student)
        },
        500);
    });
 }
 let student = {name:"Mable" }

 setStudentAgeApi(student,-20).then(run =>{ console.log(run)}).catch(error =>console.log(error));