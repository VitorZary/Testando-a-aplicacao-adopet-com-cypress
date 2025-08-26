describe('Página de mensagens', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.login('deodorosilva@email.com', 'Senha123');
        cy.url().should('eq', 'https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click();
    })

    it('Com um usuário logado deve validar se as mensagens estão sendo enviadas corretamente', () => {
        cy.get('#name').type('Deodoro Silva');
        cy.get('#phone').type('84981486217');
        cy.get('#petName').type('Dunga');
        cy.get('#msg').type('Gostaria do cachorro chamado Dunga porque eu achei ele muito bonito.');
        cy.get('[data-test="submit-button"]').click();
        cy.url().should('eq', 'https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click();
        cy.get('ul.enviadas > li:last-child').contains('Gostaria do cachorro chamado Dunga porque eu achei ele muito bonito.');

    })    
})