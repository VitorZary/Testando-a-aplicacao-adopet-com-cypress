describe('Página mostrar pets', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    })

    it('Verificar se ao clicar no botão "Ver pets disponíveis para adoção" é redirecionado para uma página que mostra os pets', () => {
        cy.contains('Ver pets disponíveis para adoção').click();
        cy.get('.cards > :nth-child(1) > img').should('be.visible');
        cy.get('.cards > :nth-child(3) > img').should('be.visible');
    })
})