# Cypress Playground

## Змінні середовища
1. Скопіюйте енв файл приклад
```bash
cp .env.example .env
```

## Написання тестів
1. Створіть новий файл тесту у папці `cypress/e2e`.
2. Напишіть ваші тести, використовуючи синтаксис Cypress.
3. Запустіть тести, щоб переконатися, що все працює.
```bash
npm run cypress:open
```

## Приклад тесту
```javascript
describe('Example Test', () => {
  it('Visits a webpage', () => {
    cy.visit('https://example.com');
    cy.contains('Example Domain');
  });
});
```
