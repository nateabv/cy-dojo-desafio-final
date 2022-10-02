/// <reference types="cypress" />


describe("Funcionalidade: Adicionar Produtos no Carrinho", () => {
    beforeEach (() => cy.visit("http://lojaebac.ebaconline.art.br/produtos/"));

    it('Deve adicionar primeiro produto', () => { 
        cy.get('.post-3073 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.single_add_to_cart_button').click()
    });
    it('Deve adicionar segundo', () => { 
    cy.get('.post-3528 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()
    });
    it('Deve adicionar terceiro produto', () => { 
        cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.single_add_to_cart_button').click()
    });
    it('Deve validar produtos no carrinho', () => { 
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('.product-name > a').should('contain', 'Aether Gym Pant - 32, Blue  ')
        cy.get('.product-name > a').should('contain', 'Arcadio Gym Short - 36, Red')
        cy.get('.product-name > a').should('contain', 'Abominable Hoodie - XL, Red')
    });

          
});