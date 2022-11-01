package com.example.imeldashoes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Autowired
    Repository repository;

    //Saves the JSON object from the POST request into the database
    @PostMapping("/register")
    public void createCustomer(Customer customer) {
        repository.createCustomer(customer);
    }
}
