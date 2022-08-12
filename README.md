## Common UI Library Architecture

![alt tag](<https://img1.xenby.com/288/00000.png>)

## Prerequisites and Setup

- Code editor / IDE (this tutorial uses VS Code but any IDE will work)
- NPM (NPM is installed when you install Node.js on your machine)
- Installing packages (presume you know how to add packages to a Javascript project with `npm install`)
- Bash terminal (or another terminal you are comfortable with for running commands)
- Git (we will be creating a git repository on our machine and publishing it to Github, though all instructions will be provided on how to follow along)
- React (how to create simple components using JSX)
- Typescript (how to create an object interface with simple properties)

First we will initialize our project.

## Configuration Typescript

```json
{
  "compilerOptions": {
    // Default
    "target": "es5",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,

    // Added
    "jsx": "react",
    "module": "ESNext",
    "declaration": true,
    "declarationDir": "types",
    "sourceMap": true,
    "outDir": "dist",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "emitDeclarationOnly": true
  }
}
```

## Adding Rollup

install rollup and our plugins:

```bash
npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts --save-dev
```

## Building your library

With these configurations in place you are now ready to run rollup for the first time and make sure your basic configuration is correct. Your project structure should look like this before you run:

```
.
├── src
│   ├── components
|   │   ├── Component
|   |   │   ├── Component.tsx
|   |   │   └── index.ts
|   │   └── index.ts
│   └── index.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── rollup.config.js
```

The contents of each file should be as described above. Once you have confirmed this, run the following command:

```bash
npm run rollup
```

## Configure Library .NPMRC

```
# For example package with name `@group/my-package` will use this URL for download
 @group:registry=https://gitlab.com/api/v4/packages/npm/

# Add the token for the scoped packages URL. This will allow you to download
//gitlab.com/api/v4/packages/npm/:_authToken=7dLJwVc2aw9fKaxGPds8

# Add token for uploading to the registry
//gitlab.com/api/v4/projects/38481008/packages/npm/:_authToken=7dLJwVc2aw9fKaxGPds8
```

## Publishing your library

Now follow the instructions on Github shown in your new repository for committing your code.

This repository that you have created is the one you will clone & edit when you want to make changes and updates to your component library. This is not the package itself that your (as a user) would install and use. To configure within our project where our package needs to be published to, next we need to update `package.json` with that information:

`package.json`

```
{
  "publishConfig": {
    "registry": "PACKAGE_REGISTRY_REPO_URL"
  },
  ...
}
```
```bash
npm publish
```


## Using the library in Arbitrary Projects

Copy Paste the .npmrc into Project Root

`~/.npmrc`

```
# For example package with name `@cnx-grp/my-package` will use this URL for download
 @group:registry=https://gitlab.com/api/v4/packages/npm/

# Add the token for the scoped packages URL. This will allow you to download
//gitlab.com/api/v4/packages/npm/:_authToken=7dLJwVc2aw9fKaxGPds8

```

```bash
npm i @cnx-grp/common-ui-lib
```

```jsx
import MyCustomComponent from "common-ui-library";

const MyApp = () => {
  return (
    <div>
      <MyCustomComponent />
    </div>
  );
};
```