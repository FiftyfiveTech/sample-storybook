# Sample storybook repository
## _Code architecture followed by 55Tech developers._

[![N|Solid](https://www.fiftyfivetech.io/wp-content/uploads/2021/05/logo.png)](https://nodesource.com/products/nsolid)

✨ This repository showing that how we are using clean code architecture, folder structure, and component reusability.✨

## Features

- _**Functionality**_  : Work correctly, efficiently, and robustly.
- _**Readability**_    : The primary audience for our code is other developers.
- _**Extensibility**_  : Well-designed code should be extensible as a building block for solving new problems.
- _**Scalability**_    : The code that can scale along with the need of your business.

## Tech

- [React](https://reactjs.org/) - HTML enhanced for web apps!
- [StoryBook](https://storybook.js.org/) - UI component explorer for frontend developers.
- [Material UI](https://mui.com/) - The React component library you always wanted.
- [Web pack](https://webpack.js.org/) - Bundle your JavaScript applications.
- [Notistack](https://notistack.com/) -  Super easy to display notifications on your web apps.

## Installation

Requires [Node.js](https://nodejs.org/)  to run.

Install the dependencies and devDependencies and start the server.

```sh
cd sample-storybook
npm i or npm install
node run storybook
```

### Package manager - npm
This project is using `npm` as package manager, if you do not have this installed on your machine please start by looking at the [npm docuentation and tutorials](https://docs.npmjs.com/). After installing the package manager the following commands will be availible for you:
- `npm install` - Installing dev dependencies unless `mode=production`
- `npm run storybook` - Running the source file
- `npm run build` - Building the source files

If you seem to still have issues with these commands, try running `npm cache clean` and do `npm install` or `npm install --legacy-peer-deps`

### Linting
Project is using ESLint to make sure that we keep same coding style in the project. Currently the ruleset is defined in `.eslintrc.json`.

### Webpack and Babel
Webpack is a module bundler which packs all modules with dependencies – js, styles, images, etc. into static assets .js, .css, .jpg , .png, etc. Webpack comes with presets which help for compilation into the required form. For example, react preset that helps to get the final output in react form, es2015 or env preset that helps to compile the code in ES5 or 6 or 7, etc. We have used babel 6 in the project setup. In case you want to switch to babel7, install the required packages of babel using @babel/babel-package-name.


## Project structure
This project is structured in the following way:

```
├── .babelrc
├── .storybook
|  ├── main.js
|  ├── preview.js
├── .eslintrc.json
├── .prettierrc.json
├── package.json
├── public
├── src
|  ├── App.css
|  ├── App.test.tsx
|  ├── App.tsx
|  ├── Component
|  |  ├── ComponentName
|  |  |  ├── ComponentName
|  |  |  ├── ComponentName.tsx
|  |  |  ├── types.ts
|  |  |  └── index.ts
|  |  ├── index.ts
|  |  ├── interfaces
|  |  |  ├── index.ts
|  |  |  └── types.ts
|  |  └── theme
|  |     ├── index.ts
|  |     ├── theme.ts
|  |     └── themeColorConstant.ts
|  ├── index.css
|  ├── index.ts
|  ├── index.tsx
|  ├── logo.svg
|  ├── react-app-env.d.ts
|  ├── reportWebVitals.ts
|  ├── setupTests.ts
|  └── stories
|     └── ComponentName
|        ├── dataProvider
|        |  ├── data.ts
|        |  └── index.ts
|        └── ComponentName.stories.tsx
└── tsconfig.json
```

**index.ts** - You should always include `index` file in every folder. When you have a lot of components you need to export from a given folder and you would like to destructure in the files you're importing them into. You don't have to follow this at all, but is still best practice to do it this way; it can be easier when exporting a large amount of files such as from a reducer in Redux or a utility folder with a large amount of smaller components like a `<Button>` or `<Input>`, and it is easier to read for other users if everything coalesces into a single index file rather than several different files.

**Component/componentName** - To create UI core components we will add `ComponentName` folder in `Component` folder.

**Component/inferface** - To define type and interfaces that are used to create components. As we are using Typescript, it is necessary to create prop types.

**Component/theme** - In Component folder we add `theme` to component with theme provider.

**stories** - To test components in different scenarios we create stories. To add stories of a component we have to add `ComponentName` folder in `stories` folder and then add `ComponentName.stories.tsx` file in the `ComponentName` folder. If we need a mock data for the component, we can create `dataProvider` folder.

**tsconfig.json** - This is used to configure typescript compiler options and also to specify the root files for the project.

### What is the best way to add/develop UI components with Stories?
Add/develop your component in `ComponentName` folder, add the types that are used in your component in the `types.ts` file and export all the types with the UI component from `index.ts` file.

Now you have to create a story for your component, for this you have to create a `ComponentName` folder in the `stories` folder. Cover all the scenarios and usecases in component story and test it using data from `dataProvider`, and theme from `themes` folder.

Now to use your storybook components in your React project, create a build and compress it to `.tgz` package using `npm run build` followed by `npm pack`. Or you can publish it on `npm` to be used publicly if you want to release.

## License

**55 Tech**

**We are relentlessly focusing on digital transformation. Dive deep into the customer cases to know more about the project which we delivered.**
