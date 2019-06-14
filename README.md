# Adams Game
## Dependências
Ferramentas necessárias para executar a aplicação:
* `node` e `npm`

## Instalação
* `clone` esse projeto;
* `npm install` para instalar as dependências do projeto;

## Rodando a Aplicação
Esta aplicação está utilizando Gulp para construir e rodar o ambiente de desenvolvimento. Depois de instalar todas as dependências, você pode executar o aplicativo.
O comando `npm start` irá empacotar o aplicativo com `webpack`, executará um servidor de desenvolvimento, e observa todas as alterações dos arquivos.

O servidor irá executar na porta 3000:

`http://localhost:3000/`
 
### Tasks

* `npm run serve`
  * inicia o servidor de desenvolvimento via `webpack-dev-server`;
* `npm start`
  * alias para o `serve`
* `npm run build`
  * executa a build do projeto;
