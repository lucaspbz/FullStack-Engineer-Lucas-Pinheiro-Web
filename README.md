Website desenvolvido para desafio de processo seletivo.

Nessa aplicação é possível ver as questões cadastradas no banco de dados através de uma lista, marcar se estão disponíveis ou não e editar enunciado e alternativas.

Uma dificuldade que encontrei nesse projeto foi para mostrar de forma efetivas as questões numa lista, sem que ocupassem muito espaço e ao mesmo tempo fosse possível de distinguir uma questão da outra. Minha solução para este problema foi ter as questões mostradas em cards contendo algumas informações e um botão de visualizar, que ao clicado
abre um modal mostrando o enunciado da questao. Escolhi fazer dessa maneira para que não gerasse um carregamento extra da página ao sair do modo de visualização da questao.
É possível entrar no modo de edição a partir do modal, sem ter que voltar para a lista. Uma feature interessante de ser implementada no futuro seria setas dos dois lados do modal para avançar para a próxima questão e voltar para a questão anterior.

Para edição do enunciado e das alternativas eu escolhi usar o "tinymce" que apresentou uma interface fácil de trabalhar e com muitas opções de customização. Existem várias outras ferramentas no mercado, inclusive gratuitas. Com ele consegui fazer edição como texto e recebendo o retorno convertido para html, pronto para ser enviado para o backend.

Para interface usei o bootstrap para a navbar, botões e algumas outras estilizações. A navbar ficou pronta para receber outras telas e mais funcionalidades.

Este site encontra-se hospedado em: https://fbstudio.netlify.app/

Intruções para dowload e execução do projeto se encontram abaixo:


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
