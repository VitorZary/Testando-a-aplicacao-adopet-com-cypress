describe('Página de mensagens', () => {
        beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
        cy.login('deodorosilva@email.com', 'Senha123');
        cy.url().should('eq', 'https://adopet-frontend-cypress.vercel.app/home');
        cy.get('.header__message').click();
    })

    it('Com o usuário logado, verificar se ao mandar uma mensagem sem preencher os campos obrigatório são apresentadas mensagens de erro.', () => {
        cy.get('[data-test="submit-button"]').click();
        cy.contains('É necessário informar seu nome').should('be.visible');
        cy.contains('Informe um número de telefone').should('be.visible');
        cy.contains('É necessário informar o nome do animal').should('be.visible');
        cy.contains('É necessário escrever uma mensagem').should('be.visible');
    })
})