describe('Módulo de Autenticação', () => {

  // Variáveis para reutilizar nos testes (Substitua pelos dados cadastrados)
  const emailValido = 'bruna.stuart@aec.com.br'
  const senhaValida = '123'

  // Visitar a página de login antes de cada cenário
  beforeEach(() => {
    // URL limpa para evitar erros de navegação
    cy.visit('https://automationexercise.com/login')
  })

  it('Deve realizar login com sucesso usando credenciais válidas', () => {
    cy.get('[data-qa="login-email"]').type(emailValido)
    cy.get('[data-qa="login-password"]').type(senhaValida)
    cy.get('[data-qa="login-button"]').click()

    // Validação: Verificar se o texto de boas-vindas aparece no menu
    cy.get('.navbar-nav').should('contain', 'Logged in as')
  })

  it('Deve exibir erro ao tentar login com e-mail não cadastrado', () => {
    cy.get('[data-qa="login-email"]').type('email_inexistente_999@teste.com')
    cy.get('[data-qa="login-password"]').type('qualquer_senha')
    cy.get('[data-qa="login-button"]').click()

    // Validação: Mensagem de erro padrão do site
    cy.get('form[action="/login"] p')
      .should('be.visible')
      .and('contain', 'Your email or password is incorrect!')
  })

  it('Deve exibir erro ao inserir e-mail correto mas senha incorreta', () => {
    cy.get('[data-qa="login-email"]').type(emailValido)
    cy.get('[data-qa="login-password"]').type('senha_errada_123')
    cy.get('[data-qa="login-button"]').click()

    // Validação: Mensagem de erro deve ser visível
    cy.get('form[action="/login"] p')
      .should('be.visible')
      .and('contain', 'Your email or password is incorrect!')
  })

})