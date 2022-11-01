//Method for registering new customer from index.html
function registerCustomer() {
    const customer = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        phone: $("#phone").val(),
        email: $("#email").val(),
        address: $("#address").val(),
        postalCode: $("#postalCode").val(),
        password: $("#password").val()
    }
    //checks to see if every input field is filled
    if(customer.firstName == "" || customer.lastName == "" || customer.phone == "" || customer.email == "" ||
        customer.address == "" || customer.postalCode == "" || customer.password == "") {
        if (customer.firstName == "") {
            document.getElementById("errorfirstName").innerHTML = "You need to type first name";
        }
        if (customer.lastName == "") {
            document.getElementById("errorlastName").innerHTML = "You need to type last name";
        }
        if (customer.phone == "") {
            document.getElementById("errorphone").innerHTML = "You need to type phonenumber";
        }
        if (customer.email == "") {
            document.getElementById("erroremail").innerHTML = "You need to type email";
        }
        if (customer.address == "") {
            document.getElementById("erroraddress").innerHTML = "You need to type address";
        }
        if (customer.postalCode == "") {
            document.getElementById("errorpostalCode").innerHTML = "You need to type postal code";
        }
        if (customer.password == "") {
            document.getElementById("errorpassword").innerHTML = "You need to type password";
        }
    }
    //Sends HTTP POST request to server with the customer object
    else {
        $.post("/register", customer, function () {
            registered();
        });
    }
    //Function which is executed when a new customer is registered
    function registered() {
        document.getElementById("message").innerHTML = "Customer is registered";
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("address").value = "";
        document.getElementById("postalCode").value = "";
        document.getElementById("password").value = "";
    }
}
