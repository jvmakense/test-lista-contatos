/// <reference types="cypress" />

describe('Testes para o contatos', () => {
    
    beforeEach(() => {
        cy.visit('https://agenda-contatos-cypress.vercel.app/')
    })

    it('Devera adicionar um novo contato', () => {
        cy.get('[type="text"]').type('Test')
        cy.get('[type="email"]').type('Test@gmail.com')
        cy.get('[type="tel"]').type('00 0000 0000')
        cy.get('.adicionar').click()
        cy.wait(10000)

        cy.contains('Test').should('exist')
    })

    it('Devera ativar modo de edição', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').should('have.length.greaterThan', 0)
        cy.wait(10000)
    })

    it('Devera editar o primeiro contato', () => {
        cy.get('.edit').first().click()

        cy.get('[type="text"]').clear().type('NovoTest')
        cy.get('[type="email"]').clear().type('NovoTest@gmail.com')
        cy.get('[type="tel"]').clear().type('99 9999 9999')
        cy.get('.alterar').click()
        cy.wait(10000)
        
        cy.contains('NovoTest').should('exist')
    })

    it('Devera excluir o ultimo contato', () => {
        cy.get('.delete').last().click()
        cy.wait(5000)
    })
})
