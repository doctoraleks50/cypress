describe('Keepin CRM Login Test', () => {
  it('should log in with valid credentials', () => {

    // Креди з енвів
    const username = Cypress.env('username');
    const password = Cypress.env('password');

    // Відвідуємо сторінку входу Keepin CRM
    cy.visit('https://my.keepincrm.com/users/sign_in?locale=uk');

    // Вводимо логін
    cy.get('#user_email').type(username);

    // Вводимо пароль
    cy.get('#user_password').type(password);

    // Натискаємо кнопку входу
    cy.wait(1000); // Зачекайте 1 секунду (можливо, потрібно збільшити цей час)
    cy.get('button[type="submit"]').click();

    // Очікуємо, що сторінка завантажиться повністю
    cy.contains('Loading...').should('not.exist');
    cy.contains('Please wait...').should('not.exist');

    // Перевіряємо, що успішно увійшли, наприклад, шукаємо елемент, який з'являється тільки після входу
    cy.url().should('include', '/dashboard');
    cy.get('#user-profile').should('be.visible');
  });
});
