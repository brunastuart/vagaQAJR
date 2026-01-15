<h2><span style="color: #2196F3;">Testes de API com Postman & Newman - Desafio QA Júnior 🚀</span></h2>

Este repositório contém a suíte de testes de API desenvolvida para o portal Automation Exercise. O projeto consiste em uma coleção de requisições documentadas e validadas, prontas para execução manual via Postman ou automatizada via linha de comando com o Newman.

---

<h3><span style="color: #4CAF50;">🛠️ Tecnologias Utilizadas</span></h3>

* Ferramenta de Teste: Postman

* Runner de Linha de Comando: Newman

* Ambiente de Execução: Node.js

---

<h3><span style="color: #673AB7;">⚙️ Configuração e Execução</span></h3>

1. Execução via Postman (Interface)
    * Abra o Postman.
    * Clique em Import e selecione o arquivo localizado em postman/collections/sua_colecao.json.
    * Clique no botão Run da coleção para executar todos os testes em sequência.

2. Execução via Newman (Linha de Comando
    * Certifique-se de ter o Node.js instalado e execute a instalação do Newman globalmente:
    > npm install -g newman
    * Para rodar os testes e gerar o resultado no terminal:
    > newman run postman/collections/sua_colecao.json -e postman/environments/seu_ambiente.json

---

<h3><span style="color: #E91E63;">🧪 Requisições e Validações</span></h3>

* Cada requisição na coleção possui scripts de teste que validam:
    *  Status Code: Verificação se a resposta retorna 200 OK, 201 Created, etc.
    * Garantia de que o corpo da resposta possui os campos obrigatórios.
    * Campos-Chave: Verificação de mensagens de sucesso ou erro retornadas pela API.

---

<h3>📄 Documentação Adicional</h3>

Site da API: [Lista oficial](https://automationexercise.com/api_list)

Relatório Cypress: Voltar para a documentação do projeto de automação E2E.

Evidências de sucesso dos testes em ../evidencias/postmanNewman

---

Desenvolvido por Bruna de Almeida Stuart 👨‍💻