package com.example.imeldashoes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

@org.springframework.stereotype.Repository
public class Repository {

    @Autowired
    private JdbcTemplate db;

    public void createCustomer(Customer customer) {
        String sql = "INSERT INTO Customer (firstName, lastName, phone, email, address, postalCode, password) VALUES(?,?,?,?,?,?,?)";
        db.update(sql, customer.getFirstName(), customer.getLastName(), customer.getPhone(), customer.getEmail(), customer.getAddress(),
                customer.getPostalCode(), customer.getPassword());
    }
}
