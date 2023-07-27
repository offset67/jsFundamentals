If there is no object before the dot-like in example1, the value of this keyword will be the global object.

Example 4:

var obj1 = {
    address : "Mumbai,India",
    getAddress: function(){
    console.log(this.address); 
  }
}
   
var getAddress = obj1.getAddress;
var obj2 = {name:"akshay"};
obj2.getAddress();    
