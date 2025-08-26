describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    })

    it('Deve fazer o login por um outro fluxo, nesse caso clicando no ícone de mensagens sem ter um usuário logado.', () => {
        cy.get('.header__message').click();
        cy.login('deodorosilva@email.com', 'Senha123');
        cy.url().should('eq', 'https://adopet-frontend-cypress.vercel.app/home');
    })
})