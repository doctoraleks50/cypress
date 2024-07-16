describe('Keepin CRM Login Test', () => {
  it('should log in with valid credentials', () => {
    // Відвідуємо сторінку входу Keepin CRM
    cy.visit('https://keepincrm.com');

    // Вводимо логін
    cy.get('#username').type('your-username');

    // Вводимо пароль
    cy.get('#password').type('your-password');

    // Натискаємо кнопку входу
    cy.get('#login-button').click();

    // Перевіряємо, що успішно увійшли, наприклад, шукаємо елемент, який з'являється тільки після входу
    cy.url().should('include', '/dashboard');
    cy.get('#user-profile').should('be.visible');
  });
});
