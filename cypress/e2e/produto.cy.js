/// <reference types="cypress"/>


describe('Funcionalidade Produto', ()=>{

    beforeEach(() => {
        cy.visit('produtos')
    });
    
        it('Deve selecionar produto da lista', ()=>{
            cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
    
        });
    
        it.only('Deve selecionar produto ao carrinho', ()=>{
            var qndCarrinho = 4
            
    
            cy.get('[class="product-block grid"]')
            .contains('Aero Daily Fitness Tee').click()
            cy.wait(3000)
            cy.get('.button-variable-item-XS').click()
            cy.get('.button-variable-item-Black').click()
            cy.get('.input-text').clear().type(qndCarrinho)
            cy.get('.single_add_to_cart_button').click()
    
            cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , qndCarrinho) 
            cy.get('.woocommerce-message').should('contain' , qndCarrinho + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
    
        });
    
        it('Deve adicionar produtos ao carrinho - usando comando', () => {
            cy.addProdutos('Abominable Hoodie', 'M', 'Blue', 3)
        });
    
        it('Deve adicionar produtos ao carrinho - usando comando', () => {
            cy.addProdutos('Aero Daily Fitness Tee', 'S', 'Black', 3)
        });
    
    });
