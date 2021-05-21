# User and Vendor registration

## User send registration request by post method to ...

http://localhost:8080/user/registration

## Vendor send registration request by post method to...

http://localhost:8080/vendor/registration

#### if requested username already stored in database, then server return 409 status and message.

![code 1](https://user-images.githubusercontent.com/76779265/119109947-75fca980-ba43-11eb-9a83-4484c616dc86.png)

#### else username and password store in database by hashing and create a jwt token by jasonWebToken. After that send token and 200 status and message.

![code 2](https://user-images.githubusercontent.com/76779265/119111164-9e38d800-ba44-11eb-8213-5b7c050a7cf7.png)

# User and Vendor Login

## User send login request by post method to ...

http://localhost:8080/user/login

## Vendor login request by post method to...

http://localhost:8080/vendor/login

#### If requested username stored in database then compare requested password and hashing password by bcrypt library. After matched password send token and 200 status and message.

![code 3](https://user-images.githubusercontent.com/76779265/119113399-e1944600-ba46-11eb-8007-e77b7f93da1d.png)
#### Rather, username matched but password didn't matched,then send 401 status and message.

![code 4](https://user-images.githubusercontent.com/76779265/119114858-59af3b80-ba48-11eb-99bd-731d895dfe60.png)

#### When requested username does not existing in database then send 404 status and message.

![code 5](https://user-images.githubusercontent.com/76779265/119115169-b3176a80-ba48-11eb-8fd2-6320231697eb.png)

# Request for products.
## Product list request by get method to ...
http://localhost:8080/vendor/list


