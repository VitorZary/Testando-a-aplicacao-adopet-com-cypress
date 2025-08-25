describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve inserir um usuário não cadastrado no sistema e verificar se aparece alguma mensagem de erro', () => {
        cy.get('[data-test="input-loginEmail"]').type('usuarionaoexistente@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })
})