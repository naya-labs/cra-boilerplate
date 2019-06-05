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

The `./src/theme/index.ts` should be the starting point. You can customize the theme according to the project designs starting from the font-face to the colors and Heading tags.

```typescript
// You can change the primary color here and it will take effect in all
// the components using primary variant.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400',
    },
  },
});
```

For more information https://material-ui.com/customization/palette/

### Reach Router

In order to use `path="/"` in a component like so `<Home path="/" />`, remember to include `RouteComponentProps` as a props type def so that Typescript can be happy. For example the home page

```tsx
export const Home: React.FC<RouteComponentProps> = () => {
  ...
}
```

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
