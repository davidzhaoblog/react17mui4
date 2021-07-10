This is master branch.
The npm packages will be maintained separately from other branches, together with tsconfig.json.
This commit contains blank react homepage with AppBar, but with all npm packages we are currently using in following branches, tsconfig.json same as latest commit in [01-basic](https://github.com/davidzhaoblog/react17mui4/tree/01-basic) branch.

Todo list related code also included to test some features.

We will have/already had a few branches to contain key react features.
[01-basic](https://github.com/davidzhaoblog/react17mui4/tree/01-basic): some basic npm packages

Possible future branches should base on this master branch:
- 02-layout
- 03-styling
- 04-friendly-ui

Current commits in 01-basic branch as of 2021-06-30:
- Basic-1.1. create-react-app 
    - npm uninstall -g npx
    - npm install -g npx
    - npm uninstall -g create-react-app
    - npm install -g create-react-app 
    - npx create-react-app react17mui4 --template typescript
- Basic-1.1.1. tsconfig.json
- Basic-1.2.1. material-ui/core
    - npm install @material-ui/core
    - npm install @material-ui/icons
- Basic-1.2.2. material-ui working with AppBar
- Basic-1.3. i18next
    - npm install react-i18next i18next --save
    - npm install i18next-http-backend i18next-browser-languagedetector
- Basic-1.4. react-redux
    - npm install @reduxjs/toolkit react-redux
- Basic-1.4.1. reduxjs-toolkit-persist
    - npm install reduxjs-toolkit-persist
- Basic-1.5. react-router-dom
    - npm install --save react-router-dom
- Basic-1.6. react-cookie
    - npm install react-cookie
- Basic-1.7. axios and react fetch
    - npm install axios
    - npm install --save @types/qs
    - tsconfig.json changes:
        - "strictNullChecks": false,
        - "suppressImplicitAnyIndexErrors": true,
- Basic-1.8. Forms: 
    - Basic-1.8.1. Form: react-hook-form V7 (use this for Forms)
        - npm install react-hook-form
- Basic-1.8.2. Form: Formik V2
        - npm install formik formik-material-ui
        - npm install -S yup
- Basic-1.9. .env and env-cmd
    - npm install env-cmd or npm install -g env-cmd
    - npm run start:qa
- Basic-1.10. lodash
    - npm i --save lodash
    - Basic-1.10.1. lodash groupBy
- Basic-1.11. clsx
    - npm install --save clsx
