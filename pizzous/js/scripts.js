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
        var deliveryPrice=0;
        $("#order").click(function(){
            var valueadd =$("input[name=yes]:checked").val();
            if(valueadd==="yes"){
                deliveryPrice= 500;
                var getLocation = prompt("Tell your Location:");
                alert("Will be delivered at" + getLocation);
            }

        });

    $("form#pizzaform").submit(function(event){
    var sizechoice=parsefloat(document.getElementById('pizzasize').value);
    var crustchoice=parsefloat(document.getElementById('pizzacrust').value);
    // var toppingschoice=parsefloat(document.getElementById('pizzatoppings').value);

    var total= sizechoice + crustchoice + deliveryPrice;
    document.getElementById("totalamount").innerHTML =total;
    event.preventDefault();
    })

});