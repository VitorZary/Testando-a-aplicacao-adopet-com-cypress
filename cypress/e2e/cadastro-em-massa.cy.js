import { usuarios } from '../fixtures/usuarios.json';

describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
  })

  usuarios.forEach(usuario => {
    it('Deve preencher os campos e cadastra-los corretamente', () => {
        cy.cadastrar(usuario.name, usuario.email, usuario.password);
    })
  })

})