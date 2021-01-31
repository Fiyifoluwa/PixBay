# PixBay v1

## Image gallery built with React, TailwindCSS and Framer Motion

### Powered by the Pixabay API


### Install TailwindCSS in React
```sh
npm i -D tailwindcss postcss-cli postcss autoprefixer

```

### Initialise TailwindCSS
```sh
npx tailwind init tailwind.js --full
```

### Create PostCSS Config File
```javascript
touch postcss.config.js

//in postcss.config.js

const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [tailwindcss('./tailwind.js'), require('autoprefixer')],
};
```

### Create assets folder for tailwind.css and main.css in src folder
```javascript
//in tailwind.css

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

//tailwind attributes will get compiled inside the main.css file automatically
```

### add to build command in package.json
```json
  "scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  }
```