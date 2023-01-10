# Solutions

Specification [here](https://docs.google.com/document/d/1hpjLfMBbEkPCSd7kY--Hvy1CHx68l1Q6BzCyyMSLSPw/edit)

It's solution for **third** task and it's containing in the branch **"feat-widget"**. If you want to see other solutions, please change the branch.

## Description

[![imageup.ru](https://imageup.ru/img165/4160186/screenshot-2023-01-10-at-131023.jpg)](https://imageup.ru/img165/4160186/screenshot-2023-01-10-at-131023.jpg.html)

The widget by itself is a table with the refresh button and the auto-refresh checkbox.\
By default (on page load) the widget should display the message “No data. Press the Refresh button”.
When the Refresh button is pressed, the widget should request new data from the endpoint and replace the previous message with the response data from the server. In case of failure an error message should be displayed instead.
When the Auto-Refresh checkbox is selected, the widget should start requesting new data from the endpoint every 3 seconds and replace the previous content of the widget with the response data from the server after each request. In case of failure an error message should be displayed and the widget should continue trying to load fresh data. When the Auto-Refresh checkbox is unselected, the widget should stop requesting new data from the endpoint and leave the previous widget content.\

I used to React + TypeScript + JSON server for this app.

## Available Scripts

In the project directory, you can run:

### `make install`

Install dependencies.

### `make start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser and run JSON-server [http://localhost:8080](http://localhost:8080).

The page will reload if you make edits.\
You will also see any lint errors in the console
