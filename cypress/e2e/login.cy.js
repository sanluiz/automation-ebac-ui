/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {

    beforeEach(() =>{
        cy.visit('minha-conta')
    });
    
    
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve realizar login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        //cy.get('.page-title').should('contain' , 'Minha conta')
 

    });

    it('Deve fazer o login com sucesso - usando arquivo de dados', () =>{
		cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain' , 'Minha conta')

    });

    it('Deve fazer o login com sucesso - usando fixture', () =>{
        cy.fixture('perfil').then(dados =>{
            cy.get('#username').type(perfil.usuario)
            cy.get('#password').type(perfil.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain' , 'Minha conta')

        });

    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválidos', ()=> {
        cy.get('#username').type('alun_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválidos', ()=> {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    });

})