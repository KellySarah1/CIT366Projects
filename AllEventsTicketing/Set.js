function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = [];  //create a resultList array

	   if (listA ===null || listB ===null) { //check for invalid inputs
	       return null; //exit and return null to indicate an error
       }

       for (var i =0; i < listA.length; i++) { //for every element in listA
           var nextValue = listA[i]; // get next value in the list


           //for every element inlistB
           for (var j = 0; j < listB.length; j++) {
               if (listB[j] === nextValue) { //this listB element equals nextValue
                   resultList.push(listB[j]); //add listB element to end of resultList
                   break; //break out of (exit) the listB inner loop

               } //end listB inner loop
           } //end listA outer loop
       }

       
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here --------------------
       Get results of Intersection
       Get results of symetricDifference
       Add and that should be the union

	   -----------------*/
        if (listA ===null || listB ===null) { //check for invalid inputs
            return null;
        }


        resultList = this.relativeCompliment(listA, listB);
        var intersection = this.intersection(listA, listB);
        var bList = this.relativeCompliment(listB, listA);


        for (var i = 0; i<intersection.length; i++) {
            resultList.push(intersection[i]);
        }

        for (var i = 0; i<bList.length; i++) {
            resultList.push(bList[i]);
        }


        return resultList;
    }




	this.relativeCompliment = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------
	   * *Elements that are not in the other set
	*   if the list a is null or b is needs to return null
	   * Get listA cycle in a loop
	   * Get listB cycle in a loop
	   * if listItem A != list ItemB = print result under list A
	   *if listItem B != item A = print results under list B
	   *
	   * */
        if (listA ===null || listB ===null) { //check for invalid inputs
            return null;
        }


            for (var i =0; i < listA.length; i++) {

            var itemNotFound = true;

                for (var j=0; j<listB.length; j++) if (listA[i] === listB[j]){
                    itemNotFound = false;

                    }
                if (itemNotFound) {
                    resultList.push(listA[i]);
                }

            }
            return resultList;
	}



	this.symetricDifference = function(listA, listB) {


	   var resultList = [];
        if (listA ===null || listB ===null) { //check for invalid inputs
            return null;
        }
       
	   /*
	   * Call list A from
	   *
	   *Create relativeCompl for list B.
	   *
	   * listA + listB
	   *
	   * */

	  resultList = this.relativeCompliment(listA, listB);

	  var bList = this.relativeCompliment(listB, listA);

	  for (var i = 0; i<bList.length; i++) {
          resultList.push(bList[i]);
      }

	   return resultList;
	}
}
