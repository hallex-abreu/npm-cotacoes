# npm-cotacoes

> The npm-cotacoes will help you get financial data more.

<!-- [START getstarted] -->
## Getting Started

### Installation

To use npm-cotacoes in your project, run:

```bash
npm i npm-cotacoes
# or "yarn add npm-cotacoes"
```
### Usage 

For quotes you will use the following code:

```js
const {cotacoes} = require('npm-cotacoes')

(async () => {
  const petrobras = await cotacoes('petr4'); //Pass the parameter of the quote you want to obtain
  console.log(petrobras)
})();
```

For exchange you will use the following code:

```js
const {cambio} = require('npm-cotacoes')

(async () => {
  const moedas = await cambio();
  console.log(moedas)
})();

```

### Quotation parameters

Petrobras: petr4,

Vale: vale3,

Itaú: itub4,

Ambev: abev3,

Gerdau: ggbr4,

Ibovespa: ibove,

Bitcoin: btc,

Índice de fundos de investimentos imobiliários: ifix

Magazine Luiza: mglu3

### For exchange you don't need parameters
Exchange Return
Dollar, Euro, Yen, Swiss Franc, Peso, British Pound:

Help us maintain the project: [donate](https://mpago.la/1zCdgRN).