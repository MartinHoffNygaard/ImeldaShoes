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
    else {
        $.post("/register", customer, function () {
            registered();
        });
    }

    function registered() {
        document.getElementById("message").innerHTML = "";
        document.getElementById("errorfirstName").innerHTML = "";
        document.getElementById("errorlastName").innerHTML = "";
        document.getElementById("errorphone").innerHTML = "";
        document.getElementById("erroremail").innerHTML = "";
        document.getElementById("erroraddress").innerHTML = "";
        document.getElementById("errorpostalCode").innerHTML = "";
        document.getElementById("errorpassword").innerHTML = "";
    }
}
