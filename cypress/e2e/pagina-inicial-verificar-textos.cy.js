describe('Página Inicial', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    })

    it('Verificar se o título da página é AdoPet', () => {
        cy.title().should('eq', 'AdoPet');
    })

    it('Verificar se o texto "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!" está sendo mostrado no html', () => {
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })

    it('Verificar se o texto "Quem ama adota!" está presente no html', () => {
        cy.contains('Quem ama adota!').should('be.visible');
    })
    
})