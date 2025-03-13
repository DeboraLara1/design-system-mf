const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");
module.exports = withModuleFederationPlugin({
  name: "design-system",
  exposes: {
    "./Button": "./src/app/components/button/button.component.ts",
    "./ButtonLong": "./src/app/components/button-long/button-long.component.ts",
    "./Input": "./src/app/components/input/input.component.ts",
    "./ModalAdd": "./src/app/components/modalnewcliente/modalnewcliente.component.ts",
    "./ModalEdit": "./src/app/components/modaledit/modaledit.component.ts",
    "./ModalDelete": "./src/app/components/modaldeletecliente/modaldeletecliente.component.ts",
    "./Menu": "./src/app/components/menu/menu.component.ts",
    "./Card": "./src/app/components/card/card.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
