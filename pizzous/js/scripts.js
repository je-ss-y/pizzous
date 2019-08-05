
// $(document). ready(function(){
//         var deliveryPrice=0;
//         $("#order").click(function(){
//             var valueadd =$("input[name=yes]:checked").val();
//             if(valueadd==="yes"){
//                 deliveryPrice= 500;
//                 var getLocation = prompt("Tell your Location:");
//                 alert("Will be delivered at" + getLocation);
//             }

//         });

//     $("form#pizzaform").submit(function(event){
//     var sizechoice=parsefloat(document.getElementById('pizzasize').value);
//     var crustchoice=parsefloat(document.getElementById('pizzacrust').value);
//     // var toppingschoice=parsefloat(document.getElementById('pizzatoppings').value);

//     var total= sizechoice + crustchoice + deliveryPrice;
//     document.getElementById("totalamount").innerHTML =total;
//     event.preventDefault();
//     })

// });









var deliveryPrice=0;
// function orders(){
//     var valueadd =$("input[name=yes]:checked").val();
//             if(valueadd==="yes"){
//                 deliveryPrice= 500;
//                 var getLocation = prompt("Tell your Location:");
//                 alert("Will be delivered at" + getLocation);
            
// }
function pizza(){
    var sizechoice=parsefloat(document.getElementById('pizzasize').value);
    var crustchoice=parsefloat(document.getElementById('pizzacrust').value);
    var toppingschoice=parsefloat(document.getElementById('pizzatoppings').value);

    var total= sizechoice + crustchoice + toppingschoice+deliveryPrice;
    document.getElementById("totalamount").innerHTML =total;
    

}