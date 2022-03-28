function ageCalculator() {
	let yearsofexperience = document.getElementById("yearsofexperience").value;

    let category = " ";
    

	if ( yearsofexperience < 0  ){

		category = "ERROR";

	} 

	else if ( yearsofexperience >= 0 && yearsofexperience < 3 ){

		category = "beginner";

	}

    else if ( yearsofexperience >= 3 && yearsofexperience < 5 ){

    	category = "junior";
    }
    
    else if ( yearsofexperience >= 5 &&  yearsofexperience < 8 ) {

    	category = "senior" ;
    } 

    else {

     category = "expert";
    	
    }

    document.getElementById("result").innerHTML = category;


}