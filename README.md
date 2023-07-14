# UrbanHealth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Data

The whole app renders based on the data available at `/assets/data.json`, The way it is constructed is as follows

1. `data.json` has one `elements` key which holds all the data
2. `elements` is an array of row objects with attribute `order` for ordering of data and `elements` for the actual data
3. Each object of `elements` further has `order`, `type` and `data` attributes, `order` for positioning and `type` for type of element

## Development

Under the `src/app` you would find components which consist of all components, pipes and services folder each holding such classes.
I have used two pipes one for sorting and another for searching,
Apart from that a service which has a utility method. 
