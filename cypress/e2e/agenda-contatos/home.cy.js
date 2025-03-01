/// <reference types="cypress" />

describe('Testes para o contatos', () => {
    
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-cypress.vercel.app/')
    })
    it('Devera adicionar um novo contato', () => {
        cy.get('[type="text"]').type('Test')
        cy.get('[type="email"]').type('Test@gmail.com')
        cy.get('[type="tel"]').type('00 0000 0000')
        cy.get('.adicionar').click()
    })  
    it('Devera ativar modo de edição', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').should('have.length.greaterThan', 0)
    })
    it('Devera editar o primeiro contato', () => {
        cy.get('.edit').first().click()

        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('NovoTest')

        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('NovoTest@gmail.com')

        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('99 9999 9999')

        cy.get('.alterar').click()
    })
    it('Devera excluir o ultimo contato', () => {

        cy.get('.delete').last().click()
    })
})