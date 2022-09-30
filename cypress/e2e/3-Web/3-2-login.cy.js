/// <reference types="cypress" />

import usuarios from '../../fixtures/usuarios.json'

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit('/login')
    });
    it('Deve fazer o login com sucesso usando cy.fixture', () => {
        cy.fixture("usuario").then((user) => {
            cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type(user.email)
            cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type(user.senha)
            cy.get('[data-test="login-submit"]').click()

            cy.get('[data-test="dashboard-welcome"]').should('contain', user.nome)
        }) 
    });

    it('Deve fazer o login com sucesso usando importação de dados', () => {
        cy.login(usuarios[2].usuario, usuarios[2].senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Ivani')
    });

    it('Deve realizar o login sem sucesso, senha errada', () => {
        cy.login(usuarios[2].usuario, usuarios[2].senha+'1')
        cy.get('[data-test="alert"]').should('have.text','Credenciais inválidas')
    });
    
    it('Deve realizar o login sem sucesso, email errado', () => {
        cy.login(usuarios[2].usuario+'m', usuarios[2].senha)
        cy.get('[data-test="alert"]').should('have.text','Credenciais inválidas')
    });
});