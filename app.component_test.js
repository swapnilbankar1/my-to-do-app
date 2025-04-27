Feature('App Page');

Scenario('open home page', async ({ I }) => {
  I.amOnPage('localhost:4200');
  I.seeElement('h1');
  I.see('To Do App');
});

Scenario('Add a new task', async ({ I }) => {
  I.amOnPage('localhost:4200');
  I.fillField('task', 'New Task');
  I.pressKey('Enter');
  I.see('New Task');
});

Scenario('Delete a task', async ({ I }) => {
  I.amOnPage('localhost:4200');
  I.fillField('task', 'Task to delete');
  I.pressKey('Enter');
  I.see('Task to delete');
  I.click('#btn-icon'); // Assuming there's a delete button with this class
  I.dontSee('Task to delete');
});

Scenario('Mark a task as completed', async ({ I }) => {
  I.amOnPage('localhost:4200');
  I.fillField('task', 'Task to complete');
  I.pressKey('Enter');
  I.see('Task to complete');
  I.click('#btn-complete'); // Assuming there's a complete button with this class
  I.seeElement('.completed'); // Assuming completed tasks have this class
});