# VUE E2E Cypress

##### E2E Test:
###### Is a type of test that allows us to test business prosess from start to end.


- UI testing is not exatly e2e testing, because sometimes we dont have UI in hour application.

##### Cypress Features:

- Automatic waiting
- time travel
- Newtwork traffic control
- screenshot and video
- cross browser support


##### Add Cypress to project:
`npm i -D cypress`
`npx cypress open`
then configure the cypress in UI



##### How to Run Test

run the app `npm run app`
run the cypress `npx cypress open`


##### Cypress Best Practices
- use data-cy for targeting element in Cypress
``` html
<div data-cy="my-input"></div>
```
- add comment of what you want to do before start coding
```
// naviage to some page

// check list

// fill some inputs
```

- use triple slash at the top of file to have cypress types
`///<reference types="Cypress" />`
[mroe](https://stackoverflow.com/questions/52434223/lost-intellisense-for-cypress-in-visual-studio-code/52440156#52440156)

