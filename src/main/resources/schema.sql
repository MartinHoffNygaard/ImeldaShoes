CREATE TABLE Customer
(
    customerID INTEGER AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    phone VARCHAR(10) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(50) NOT NULL,
    postalCode VARCHAR(4) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);