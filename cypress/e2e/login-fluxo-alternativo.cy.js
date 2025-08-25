describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    })

    it('Deve fazer o login por um outro fluxo, nesse caso clicando no ícone de mensagens sem ter um usuário logado.', () => {
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('deodorosilva@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
        cy.url().should('eq', 'https://adopet-frontend-cypress.vercel.app/home');
    })
})