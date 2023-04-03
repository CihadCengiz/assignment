### Installation ###
-Clone or download the repository
-Make sure to have `extension=intl` extension enabled. 

# -Follow the steps to enable it in XAMPP #
-Open [xampp_folder_path]/php/php.ini to edit.
-Search for `;extension=intl` and remove the `;`.
-Save the php.ini file and restart Apache.

## Backend Installation
-Run `composer install` in root folder to install dependencies
- `OnError` => Run `composer update` in root folder to update composer then run `composer install` to install dependencies
-Run `php spark serve` in root folder to start the development server

## Frontend Installation
-Run `npm install` in client folder to install dependencies
-Run `npm start` in client folder to start the development server

## Setup Database
-In XAMPP Control Panel start "Apache" and "MySQL"
-Locate "MySQL" and click on "Admin" button to access "phpMyAdmin Panel"
-Make sure to edit `.env` file and set your root password
-Create a new database called `ci4`
-In the command line run `php spark migrate` to migrate database group with all available migrations

## Create Books Table
-This project does not use a "Books API" to feed the database.
-Instead locate "createBooksTable.ts" in client folder and run `node createBooksTable.ts` in command line to create books table.

# Frontend Scripts
-`npm start`: Start the development server.
-`npm build`: Build the project for production.
-`npm test`: Run tests.
-`npm eject`: Eject from create-react-app and customize configuration.

# Backend Scripts
-`php spark serve`: Start the development server.

## Requirements
-PHP version 7.4 or 8.0
-CodeIgniter 4 framework version 4.0

## Backend Dependencies

# Production
codeigniter4/framework

# Development
fakerphp/faker
mikey179/vfsstream
phpunit/phpunit

# Scripts
-test: Run PHPUnit tests.

## Frontend Dependencies

# Production
-axios
-bulma
-datatables.net-dt
-jquery
-react
-react-dom
-react-router-dom
-web-vitals

# Development
@testing-library/jest-dom
@testing-library/react
@testing-library/user-event
@types/datatables.net
@types/jest
@types/jquery
@types/node
@types/react
@types/react-dom
react-scripts
typescript

# ESLint
This project uses the ESLint configuration provided by create-react-app. The configuration extends the "react-app" and "react-app/jest" configurations.