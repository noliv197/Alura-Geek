<img src="assets/img/icone/Logo.png">

> Project Status: :construction: On Development

## Table Of Contents
- [About The Project](#about-the-project)

- [Features](#features)

- [Build With](#build-with)

- [Authors](#authors)

## About The Project
### Context
This project is a front-end challenge designed by Alura.

The goal is to develop the html and css from the scratch (making sure to add layout responsiveness) and to develop functionalities to the web page using javascript or frameworks according to customer needs. 
### Challenge
The company AluraGeek needs to bring more customers and increase its sales, so they want to implement an e-commerce and take the company to the next level, becoming more digital.
Therefore, they are asking for our help as developers to create the website and the e-commerce must contain the following requirements:
* A homepage that contains a "login" button and a search engine for products offered by the company.
* A banner that contains discounts, promotions, or information relevant to the moment.
* A gallery with product information such as: image, product name, price and a link to the product description page.
* A product page that contains the image, name, description, and price.
* A footer with a contact form and other relevant information.
* Admin menu so they can add, edit, search or delete products from the store.

__It is very important that the website is responsive__ to give customers the ease of shopping through mobile devices.

### Layout
The desktop and mobile templates are available [here](https://www.figma.com/file/fR9qvy3gU53s2q5efeMpy9/AluraGeek---Challenge?node-id=0%3A1)

I used the desktop first approach (no particular reason) to create the html and css


## Features 
- ` get products from server`: :heavy_check_mark:
  * I used json-server from node.js to host a localhost server
  * Each product has the properties: img src, img alt, product title, product price, product category, product description and an id
  * Once the page is loaded ```exibeCard()``` uses fetch with method GET the products list and creates the card div for each product and add them to their corresponding product section
- ` product description customized for each product`: :heavy_check_mark:
  * while constructing a card product, I seted a link to the product description using their id
  ```
  <a href="telas/produto.html?id=${id}" class="texto__primario">Ver produto</a>
  ```
  * The link redirects to the description page of the product and all their information is displayed based on the id
  ```
  fetch(`http://localhost:3000/produtos/${id}`)
  ```
  * I also used the product category property to create the similar products section, adding to it only the products that have the same category 
- ` show all`: :heavy_check_mark:
  * Once the "Ver tudo" button is clicked, the method ```exibetudo()``` changes the button innerText to "Mostrar menos" as well as removes the transparent class from all the product cards from the section that have it
  * Clicking on the button one more time reverse the process, changing the button innerText back to the original and adding the tranparent class to the cards according to the screen width 
    * screen width > 1210 shows a maximum of 6 cards
    * screen width between 1210 and 1035 shows a maximum of 5 cards
    * screen width < 1035 shows a maximum of 4 cards
- ` edit product`: :heavy_check_mark:
  * I used the same logic of redirecting the page based on the product id
  * Upon clicking on the button with a pencil icon, the page is redirected to the edit form page, where all the product information are displayed on screen based on the product id
  * Once the alterations are done and the form is submitted, ```atualizaProduto()``` uses fetch with method PUT to update the data
- ` delete product`: :ballot_box_with_check: :grey_exclamation:
- ` add new product`: :ballot_box_with_check: :grey_exclamation:
- ` send message`: :ballot_box_with_check: :grey_exclamation:
- ` search product`: :ballot_box_with_check: :grey_exclamation:
- ` admin login`: :construction: 


## Build With
:small_blue_diamond: HTML

:small_blue_diamond: CSS

:small_blue_diamond: Javascript

:small_blue_diamond: Node.js

## Authors
