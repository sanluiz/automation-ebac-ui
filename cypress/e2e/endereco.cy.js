/// <reference types="cypress" />

//importa informações de outros arquivos dentro do projeto
import EnderecoPage from '../support/page-objects/endereco.pege'

const dadosEndereco = require('../fixtures/endereco.json')


describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.login, dados.senha)
        })
    });

    
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Victor', 'Silva', 'Ebac', 'Brasil', 'Duarte da Costa', '2001', 'Osasco', 'São Paulo' ,'00000000', '11999999999', 'teste@teste.com') 
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')       
    });


    it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email,
            ) 
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')       
    });


});
