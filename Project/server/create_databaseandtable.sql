
create database asheley_db;-- 

show databases;

use asheley_db;
create table restaurant_info (
	id INT PRIMARY KEY auto_increment,
    name varchar(30) NOT NULL,
    tele varchar(20),
    state varchar(10) NOT NULL,
    address varchar(100) NOT NULL,
    has_parking varchar(80),
    seat int,
    holiday varchar(50),
    restaurant_type tinyint(1),
    operation_time_id int(10),
    price_id int(10),
    restaurant_service int(10));

create table operation_time(
	id INT PRIMARY KEY auto_increment,
    weekday varchar(20),
    weekday_saladbar varchar(20),
    weekend varchar(20),
    weekend_saladbar varchar(20));

create table restaurant_service(
	id INT PRIMARY KEY auto_increment,
    wine tinyint(1),
    beer tinyint(1),
    delivery tinyint(1),
    kids_room tinyint(1),
    nursing_room tinyint(1));

create table restaurant_price(
	id INT PRIMARY KEY auto_increment,
    weekday_lunch int(10),
    weekday_dinner int(10),
    holiday int(10),
    elementary_school int(10),
    baby int(10));
    


