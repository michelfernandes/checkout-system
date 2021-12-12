# Checkout System

This is an interactive Checkout System built with `ReactJS` and `Typescript`.

![image](https://user-images.githubusercontent.com/18291046/145731779-90dd720f-09c3-4263-b267-f7b4075b8924.png)

## Installation

To install the project, you can run:

### `npm install`


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


# Documentation

## Components

The application was built as sections and placed on the screen on 3 different columns:

- **Product Table**: The table that holds the available products for the Checkout section to use.
- **Promotional Rules**: The current Promotional Rules being applied.
- **Checkout**: Section that allows the user to scan the the available products and applies the promotional rules to the final price.

## Checkout Service

The checkout service class is responsible to scan new items and maintain the total price of the scanned products. It receives the list of promotional rules on its constructor.

## Promotional Rules

Each promotional rule is a separate TS class that implements the `Rule` interface.

To create a new promotional rule, you need to:

1. Create a new class that implements the `Rule` interface;
2. Implement the `apply()` method, that should receive the list of scanned products and return the discount applied to the list;


## Tests

There are 2 different test approachs being used:
- The promotional rules and the checkout service are being tested with usual unit tests for its methods;
- The react components are being tested with snapshots assertions;

## Possible Future Enhancements

These are a few possible future improvments for the project:

- Extract types and interfaces to dedicated files;
- Make use of React useContext hook, to avoid multiple properties being passed between components;
- Increase tests coverage to cover all application logic;
- Always deal with number with maximum 2 decimal places;
