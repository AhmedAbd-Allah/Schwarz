<h1  align="center"> Schwarz Task </h1>  <br>



## Contents

-  [Introduction](#introduction)

-  [Architecture](#architecture)

-  [Database Models](#databasemodels)

-  [Docker](#docker)

-  [Run Docker](#run-docker)



  
  
  
  

## Introduction

Tha task simulates a company that wants to ship their goods to Schwarz.

The task is to implement a working solution to read the data from an input file, store them in MongoDB, access the data from MongoDB and then perform several operations on the data

  

## Architecture

The project implements multi tier architecture design
   
  
## Database Models: 

Database Used Is MongoDB.

        Order entity
                
                orderId: {
                        type: String,
                        unique: true
                        },
                companyName: {
                        type: String,
                },
                customerAdress: {
                        type: String,
                },
                orderedItem: {
                        type: String,
                }

               
## Requirements


An internet connection of course.

### Docker
*  Docker version 19.03.2
*  docker-compose version 1.18.0

### Run Docker

  - Change directory to the project's root (where `docker-compose.yml` is ) 
  - Change environment variables in the `.env` file to your values OR leave them if they are ok with you
  - Run the following command:


```bash

$ docker-compose up -d --build
```

### Try It out 
Now you have an up and running application, import the postman collection sent with the task to try the required operations.

