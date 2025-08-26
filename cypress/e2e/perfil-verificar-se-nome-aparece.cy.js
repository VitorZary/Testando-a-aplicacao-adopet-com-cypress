describe('Página Home', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.login('deodorosilva@email.com', 'Senha123');
        cy.url().should('eq', 'https://adopet-frontend-cypress.vercel.app/home');
    })

    it('Ao logar com o usuário, verificar se na página perfil aparece o nome do usuário', () => {
        cy.get('.header__user').click();
        cy.get('.button').click();
        cy.get('#nome').should('have.value', 'Deodoro Silva');
    })
})