## Todos React Hooks
- This is a Todo app created with React using only Hooks to manage application State
- SemanticsUI was used to assist with styling elements

##### Running the App Locally
- Ensure that you have `node` and `yarn` installed on your machine before following the below steps
1. Clone the repo onto your machine
2. CD into the folder on your machine
3. Run `yarn install` to install all project dependencies
4. Run `yarn start` to launch the application
5. Visit `localhost:3000` on your web browser of choice to launch the application

- This app runs on port `3000` by default
- If you would like the app to run on a specific port, open `package.json` and update the `start` script to read:
```
"start": “PORT=8000 react-scripts start"
```
- The above example sets the port to `8000`, but this can be set to any valid port value.