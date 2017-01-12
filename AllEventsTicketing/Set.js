function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = [];  //create a resultList array

	   if (listA ===null || listB ===null) { //check for invalid inputs
	       return null; //exit and return null to indicate an error
       }

       for (var i =0; i < listA.length; i++) { //for every element in listA
	       var nextValue = listA[i]; // get next value in the list


       //for every element inlistB
        for (var j=0; j < listB.length; j++) if (listB[j] === nextValue) { //this listB element equals nextValue
            resultList.push(listB[j]); //add listB element to end of resultList
            break; //break out of (exit) the listB inner loop

        } //end listB inner loop
        } //end listA outer loop

       
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = new Array();
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   
	   /*-------------------------------Insert your code here -------------------------------------*/ 
	   
	   return resultList;
	}




	this.relativeCompliment = function(listA, listB) {

	   var resultList = new Array();
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   	   
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}



	this.symetricDifference = function(listA, listB) {

	   var resultList = new Array();
       
	   /*-------------------------------Insert your code here -------------------------------------*/

	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}
}
