# Nível Javascript Junior
Desafio tecnico agronorte

## Você precisará ter instalado em sua maquina os seguinte pacotes
 - node
 - git


### Instalação do npm no Windows":

1. Acesse o [site oficial do Node.js](https://nodejs.org/).
2. Na página inicial, você verá dois downloads disponíveis: LTS e Current. Recomendo escolher a versão LTS (Long Term Support), pois é mais estável.
3. Clique no botão "LTS" para baixar o instalador.
4. Execute o instalador baixado e siga as instruções na tela. Certifique-se de marcar a opção "npm package manager" durante a instalação.

### Instalação do npm no macOS":

- **Opção 1 (usando Homebrew):**
  1. Abra o Terminal.
  2. Use o comando `/bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\"` para instalar o Homebrew.
  3. Execute o comando `brew install node` para instalar o Node.js e o npm.

- **Opção 2 (baixando diretamente):**
  1. Acesse o [site oficial do Node.js](https://nodejs.org/).
  2. Siga os mesmos passos mencionados na seção do Windows, selecionando a versão LTS e baixando o instalador.

### Instalação do npm no Linux (Ubuntu/Debian)":

1. Abra o Terminal.
2. Use o comando `curl` ou `wget` para baixar o script de instalação do Node.js:
   - Usando `curl`: Execute `curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -`.
   - Usando `wget`: Execute `wget -qO- https://deb.nodesource.com/setup_14.x | sudo -E bash -`.
3. Após a execução do script, instale o Node.js e o npm com o comando `sudo apt-get install -y nodejs`.
4. Para verificar se o Node.js e o npm foram instalados com sucesso, execute os seguintes comandos:
   - `node -v`
   - `npm -v`


### Instalação do Git":

1. Acesse o [site oficial do Git](https://git-scm.com/).
2. Na página inicial, clique no botão "Download for Windows" (se estiver usando o Windows), "Download for macOS" (se estiver usando o macOS), ou siga as instruções para sua distribuição Linux, se aplicável.
3. Após o download, execute o instalador e siga as instruções na tela. Certifique-se de selecionar as opções desejadas durante a instalação.

### Como fazer um fork em um repositório do GitHub":

1. Acesse o GitHub em [https://github.com](https://github.com) e faça login na sua conta (ou crie uma, se necessário).
2. Vá para o repositório que deseja fazer o fork.
3. No canto superior direito da página do repositório, clique no botão "Fork". Isso criará uma cópia do repositório na sua conta.
4. apos o fork, você pode clonar o repositório que foi clonado pro seu proprio perfil do github para o seu computador usando o comando Git. Certifique-se de substituir `<seu-nome-de-usuário>` pelo seu nome de usuário do GitHub e `<nome-do-repositório-forked>` pelo nome do repositório forked:

   ```shell
   git clone https://github.com/seu-nome-de-usuário/nome-do-repositório-forked.git 



Logo após clonar o repositorio e entrar na pasta do projeto execute o seguinte comando para instalar as dependencias : ```npm install ```

Abra o arquivo junior.js e escreva as funções seguinto as instruções. Após terminar de implementar as funções execute ```npx jest``` para rodar os testes

Se todos os testes passarem você concluiu o desafio.

![tt](https://github.com/Agronorte/javascript-challenger/assets/57598810/f8216312-055e-41f3-9112-6a02a7be1cc6)



