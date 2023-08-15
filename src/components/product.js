import React from "react";
/*Declare and export product components*/
        let product = {
            name:"PS5",
            price: "₦500,000",
            description: "Sony's Playsation 5",
            image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/62/1685042/1.jpg?4564",
        };
/* Stringify JSON Object*/
        let jsonObj = JSON.stringify(product);
        
        export default jsonObj;
