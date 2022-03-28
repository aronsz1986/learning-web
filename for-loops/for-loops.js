function printSomething(){

	

for( let i= 0; i<5; i++){ 
console.log(i); 
}

}
function printFromArray () {
  let array = ["tom", "john", "anna"];
  for(let i = 0; i<3; i++){ 
  	console.log(array[i]);
  }	

}


let salaries = [];


function getUserSalary(){

let userSalary = document.getElementById("user-salary").value

salaries.push(userSalary);

alert(salaries)

}



