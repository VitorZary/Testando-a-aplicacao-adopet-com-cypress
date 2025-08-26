describe('Página Inicial', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    })

    it('Verificar se ao clicar no botão "Ver pets disponíveis para adoção" é redirecionado para uma página que mostra os pets', () => {
        cy.contains('Ver pets disponíveis para adoção').click();
        cy.get('.cards > :nth-child(1) > img').should('be.visible');
        cy.get('.cards > :nth-child(3) > img').should('be.visible');
    })

    it('Verificar se o título da página é AdoPet', () => {
        cy.title().should('eq', 'AdoPet');
    })

    it('Verificar se o texto "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!" está sendo mostrado no html', () => {
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })
    
})