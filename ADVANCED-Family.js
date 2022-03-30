//Advance 
  //MY API average per child challenge 
const famMember = [{fatherName:"alex",motherName:"Pam",childrenNumber:3}, {fatherName:"Nino",motherName:"Bolla",childrenNumber:4},
                   {fatherName:"Ricky",motherName:"Ellen",childrenNumber:-2}, {fatherName:"Manu",motherName:"Diane",childrenNumber:4}]

 setApiforChildAvg = (newFam) => { 
    return new Promise(function (resolve, reject) {
   setTimeout( () => {
            let result = 0;
            let child = newFam.filter( member => member.childrenNumber > 0);
              for (let i = 0; i < child.length; i++) {
              result += child[i].childrenNumber;
              }
              let avg = result / child.length;
            newFam.map(fam=>{
                if(fam['fatherName'].toLowerCase() == "yves"){
                reject("Yves is not an allowed dad in 2022");
                }
                fam.average = Math.round(avg);
            });

         resolve(newFam);
        },
        1000);
    });
 }
setApiforChildAvg(famMember).then(famM =>{ console.log(famM)}).catch(error =>console.log(error));