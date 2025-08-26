describe('Página Home', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.login('deodorosilva@email.com', 'Senha123');
        cy.url().should('eq', 'https://adopet-frontend-cypress.vercel.app/home');
    })

    it('Ao logar com o usuário, verificar se na página home aparecem as imagens dos pets', () => {
        cy.get('.cards > :nth-child(1) > img').should('be.visible');
        cy.get('.cards > :nth-child(3) > img').should('be.visible');
    })
})