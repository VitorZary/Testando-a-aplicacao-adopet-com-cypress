describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
  })

  for (let i = 0; i < 5; i++) {
    it('Deve preencher os campos e cadastra-los corretamente', () => {
        let uuid = self.crypto.randomUUID();
        cy.cadastrar('teste cadastro', `${uuid}@email.com`, `S${Math.random().toString(36).slice(-10)}`);
        cy.url().should('eq', 'https://adopet-frontend-cypress.vercel.app/login');
    })
  }
    
})