//declare your main class name
qx.core.Environment.add("qx.application","advanced.Application");

//write your main class
qx.Class.define("advanced.Application",{
  extend : qx.application.Standalone,

  members :
  {
    main: function()
    {
      this.base(arguments);

      	var president = new advanced.Person("Barack","Obama");
      	
        //create a button
        var btn1 = new qx.ui.form.Button(president.getFullName(), "../img/glyphicons_003_user.png");
       //add a listener on execution
        btn1.addListener("execute",function(e){
            alert("I'm the president of USA");
        });
        //add it to the application root
        this.getRoot().add(btn1, {left:100,top:100});
    }
  }
});