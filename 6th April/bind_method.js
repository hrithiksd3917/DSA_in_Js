// Q1)
/*
var person = {
    name : "Jack",
    prop : {
        name : "Daniel",
        getName : function() {
            return this.name;
        }
    }
}

var name = person.prop.getName.bind(person);
console.log(name());

var name = person.prop.getName();
console.log(name);
*/



// Q2)
var geeks1 = {
    name : "ABC",
    article: "C++"
    }
    
      var geeks2 = {
    name : "CDE",
    article: "JAVA"
    }
        
     
      var geeks3 = {
    name : "IJK",
    article: "C#"
    }
      
    function printVal(){
       document.write(this.name+" contributes about "+this.article+"<br>");
       }
            
      var printFunc2= printVal.bind(geeks1);
    
      printFunc2();
        
      var printFunc3= printVal.bind(geeks2);
      printFunc3();
        
      var printFunc4= printVal.bind(geeks3);
      printFunc4();
      