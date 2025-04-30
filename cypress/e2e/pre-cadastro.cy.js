/// <reference types="cypress" />
const faker = require('faker');

faker.locale = 'pt_BR';

describe('Funcionalidade Pré Cadastro' , () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });


    it('Deve realizar pré cadastro com sucesso' , () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email()

        cy.get('#reg_email').type(emailFaker) 
        cy.get('#reg_password').type('testes_aluno02')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    });

    it('Deve realizar pré cadastro com sucesso - usando comandos' , () => {
        let emailFaker2 = faker.internet.email()
        cy.preCadastro(emailFaker2, 'senhaForteAS' , 'luiz', 'araujo')


    });

});