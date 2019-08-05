// //business logic//
// function order(size,crust,quantity,delivery){
//        this.pizzasize=size;
//        this.pizzacrust=crust;
//        this.pizzaquantity=quantity;
// }
// order.prototype.allfunction(){
// return this.pizzasize + ";" +this.pizzacrust + ";"+ this.pizzaquantity + ";" ;
// }
// //user interface//
// $(document).ready(function){
//      var 

// }
$(document). ready(function(){
        var deliveryprice=0;
        $("#order").click(function(){
            var valueadd =$("input[name=yes]:checked").val();
            if(valueadd==="yes"){
                deliveryprice= 500;
                var getLocation = prompt("Tell your Location:");
                alert("Will be delivered at" + getLocation);
            }

        });
});