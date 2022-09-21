# Need to install dependencies:

first npm init-y
npm i watchify
npm i -D jest jest-environment-jsdom jsdom

in package.json
> in debug section, in scripts
insert
scripts": {
    "test": "jest --watchAll",
    "dev": "watchify ./script.js -o bundle.js"
  },

  add to the bottom of package.json

  "jest": {
    "testEnvironment": "jsdom"
  }

