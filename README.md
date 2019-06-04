<div align="center">
  Simple CRA Boilerplate.
</div>

A boilerplate with all the needs packages to kickstart a project and to standardize codebase across project. This helps in easier developer and client on-boarding.

#### Technologies

- [Material-UI](https://material-ui.com/)
- [Pretteir](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [EditorConfig](https://editorconfig.org/)
- [stylelint](https://stylelint.io/)
- [Formik](https://jaredpalmer.com/formik/)
- [Reach Router](https://reach.tech/router)
- [Axios](https://github.com/axios/axios)
- [Lint Staged](https://github.com/okonet/lint-staged)

#### Folder structure

```sh
cra-boilerplate/
├── public
├── src
    ├── components
        └── shared // reusable compoents that are shared across multiple components
    ├── images // all images
    ├── lib // any useful modules
    ├── pages // different pages
    ├── theme // theme to be injected into Material UI for customization
    ├── types  // typescript types
    └── contexts // React contexts
```

### Before starting

Update the theme file to line up with the design details provided by the designer and the design files.

#### Code Style

We run Prettier on-commit using lint-staged.

#### Reason for Using Material-UI

Before material-ui v4, in order to start a project, we would use `styled-components`, `styled-system` and another react framework like `Boostrap` or `Ant.design`.
With the intergration of better theme system, better CSS-in-JS solution and Material System, it helps replace all the libraries above use one unified framework.

##### Rules

- **Typescript**: All new files created must use typescript.
  ...more coming

### First time setup

First step is to clone the boilerplate

```sh
git clone git@github.com:naya-labs/cra-boilerplate.git
```

If you get `Permission denied` error using `ssh` refer [here](https://help.github.com/articles/error-permission-denied-publickey/)
or use `https` link as a fallback.

```sh
https://github.com/naya-labs/cra-boilerplate.git
```
