// B. Object and Array first/second name/ages
    // Challenge number four

 function moveToObj(persInfo){
     let ourObj = {};
     for(let i = 0; i < persInfo.length; i++){
         ourObj[persInfo[i].split(' ')[0]] = {"second-name": persInfo[i].split(' ')[1], "age": persInfo[i].split(' ')[2]};
     }
     return ourObj;
 }
 let personInformation = ["Patrick wyne, 30","lil wyne, 32","Eric mimi, 21","Dodos deck, 21","Alian Dwine, 22",
 "Patrick wyne, 33","Patrick wyne, 100","Patrick wyne, 40"];
 console.log("Move to object : "+JSON.stringify(moveToObj(personInformation)));

