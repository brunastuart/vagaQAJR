<h2><span style="color: #2196F3;">Automação de Testes com Cypress - Desafio QA Júnior 🚀</span></h2>

Este repositório contém o projeto de automação de testes end-to-end (E2E) desenvolvido para o site Automation Exercise, como parte do desafio técnico para a vaga de QA Júnior. O foco principal é a validação do fluxo de Autenticação, garantindo a integridade dos cenários de login.

---

<h3><span style="color: #4CAF50;"><b>🛠️ Tecnologias Utilizadas</b></span></h3>

* Framework: Cypress (v13+)
* Relatórios: Markdown para documentação técnica.
* Versionamento: Git & GitLab.

---

<h3><span style="color: #FF9800;"><b>📁 Estrutura do Projeto</b></span></h3>

Abaixo, a organização das pastas para facilitar a navegação:

* cypress/: Pasta raiz do Cypress.
    * e2e/: Contém o script de teste login.cy.js.
    * fixtures/: Arquivos de massa de dados.
    * support/: Comandos customizados e hooks.
* evidencias/: Capturas de tela (prints) dos testes.
* testes-manuais/: Pasta com o arquivo testesManuais.md em BDD.
* cypress.config.js: Arquivo de configuração global.
* package.json: Scripts e dependências do projeto.
* README.md: Guia principal de uso.

---




<h3><span style="color: #673AB7;">⚙️ Configuração e Execução</span></h3>

<h4>1. Pré-requisitos</h4>

* Antes de iniciar, certifique-se de ter instalado:
    * Cypress (v13+)
    * Node.js (v18+)
    * Git

<h4>2. Instalação</h4>

* Clone o repositório e instale as dependências:
> git clone [https://link-do-seu-repositorio.com](https://link-do-seu-repositorio.com)
cd nome-do-projeto
npm install

<h4>3. Rodando os Testes</h4>

* Interface Gráfica (Modo Interativo):
> npx cypress open

* Terminal (Modo Headless):
> npx cypress run

---

<h3><span style="color: #E91E63;"><b>🧪 Cenários Automatizados (E2E)</b></span></h3>

O script login.cy.js cobre os seguintes comportamentos:
* Sucesso no Login: Validação do fluxo positivo com credenciais corretas.
* E-mail Inválido: Garantia de que o sistema bloqueia acessos de usuários não cadastrados.
* Senha Incorreta: Validação da segurança para e-mails válidos com senhas erradas.

---




<h3>📄 Documentação Adicional</h3>

Testes Manuais: Cenários detalhados em BDD com prints de evidência.

API Testing: Documentação da coleção Postman disponível na pasta /postman.

Evidências de sucesso dos testes em ../evidencias/cypress

---



Desenvolvido por Bruna de Almeida Stuart 👨‍💻