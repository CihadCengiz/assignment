### Installation ###
-Clone or download the repository<br />
-Make sure to have `extension=intl` extension enabled. 

# -Follow the steps to enable it in XAMPP #
-Open [xampp_folder_path]/php/php.ini to edit.<br />
-Search for `;extension=intl` and remove the `;`.<br />
-Save the php.ini file and restart Apache.

## Backend Installation
-Run `composer install` in root folder to install dependencies<br />
- `OnError` => Run `composer update` in root folder to update composer then run `composer install` to install dependencies<br />
-Run `php spark serve` in root folder to start the development server

## Frontend Installation
-Run `npm install` in client folder to install dependencies<br />
-Run `npm start` in client folder to start the development server

## Setup Database
-In XAMPP Control Panel start "Apache" and "MySQL"<br />
-Locate "MySQL" and click on "Admin" button to access "phpMyAdmin Panel"<br />
-Make sure to edit `.env` file and set your root password<br />
-Create a new database called `ci4`<br />
-In the command line run `php spark migrate` to migrate database group with all available migrations

## Create Books Table
-This project does not use a "Books API" to feed the database.<br />
-Instead locate "createBooksTable.ts" in client folder and run `node createBooksTable.ts` in command line to create books table.

# Frontend Scripts
-`npm start`: Start the development server.<br />
-`npm build`: Build the project for production.<br />
-`npm test`: Run tests.<br />
-`npm eject`: Eject from create-react-app and customize configuration.

# Backend Scripts
-`php spark serve`: Start the development server.

## Requirements
-PHP version 7.4 or 8.0<br />
-CodeIgniter 4 framework version 4.0

## Backend Dependencies

# Production
codeigniter4/framework

# Development
fakerphp/faker<br />
mikey179/vfsstream<br />
phpunit/phpunit

# Scripts
-test: Run PHPUnit tests.

## Frontend Dependencies

# Production
-axios<br />
-bulma<br />
-datatables.net-dt<br />
-jquery<br />
-react<br />
-react-dom<br />
-react-router-dom<br />
-web-vitals

# Development
@testing-library/jest-dom<br />
@testing-library/react<br />
@testing-library/user-event<br />
@types/datatables.net<br />
@types/jest<br />
@types/jquery<br />
@types/node<br />
@types/react<br />
@types/react-dom<br />
react-scripts<br />
typescript

# ESLint
This project uses the ESLint configuration provided by create-react-app. The configuration extends the "react-app" and "react-app/jest" configurations.
