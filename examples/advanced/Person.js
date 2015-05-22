//write your model class
qx.Class.define("advanced.Person",{
  extend : qx.core.Object,

  construct : function(firstName,lastName) {
	  this.base(arguments);
	  this.setFirstName(firstName);
	  this.setLastName(lastName);
  },
  
  properties : {
	firstName: { init: "John", check: "String" },
	lastName: { init: "Doe", check: "String" }
  },
  
  members :
  {
	  getFullName : function(){
		  return this.getFirstName()+" "+this.getLastName();
	  }
  }
});