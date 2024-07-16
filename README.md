# Cypress Playground

## Запуск проекту на Gitpod

1. Відкрийте проект у Gitpod: [Open in Gitpod](https://gitpod.io/#YOUR_REPO_URL)
2. Зачекайте, поки середовище налаштується та встановить всі залежності.
3. Cypress автоматично відкриється для написання та запуску тестів.

## Написання тестів

1. Створіть новий файл тесту у папці `cypress/integration`.
2. Напишіть ваші тести, використовуючи синтаксис Cypress.
3. Запустіть тести, щоб переконатися, що все працює.

## Приклад тесту

```javascript
describe('Example Test', () => {
  it('Visits a webpage', () => {
    cy.visit('https://example.com');
    cy.contains('Example Domain');
  });
});
```