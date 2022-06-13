describe('Login', () => {

  it('Should not login if the form is invalid', () => {
    cy.visit('/');
    cy.get('[data-cy="login-email-field"]').type('test');
    cy.get('[data-cy="login-email-field"]').clear();
    cy.get('[data-cy="login-password-field"]').type('test');
    cy.get('[data-cy="login-password-field"]').clear();
    cy.get('[data-cy="login-switch-button"]').type('false');
  })

  it('Should not login if the form is valid', () => {
    cy.login('test@test.com', 'Test22*');
    cy.get('[data-cy="login-switch-button"]').type('true');
    cy.get('[data-cy="login-submit-button"]').click();
  })

  after(() => {
    cy.log('Test Finalizado')
})

})
