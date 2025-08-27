describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
  })
  
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário.', () => {
    let uuid = self.crypto.randomUUID();
    cy.cadastrar('teste cadastro', `${uuid}@email.com`, 'Senha123');
    cy.url().should('eq', 'https://adopet-frontend-cypress.vercel.app/login');
  })
})