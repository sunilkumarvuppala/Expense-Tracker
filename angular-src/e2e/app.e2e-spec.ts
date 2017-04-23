import { ExpensetrackerPage } from './app.po';

describe('expensetracker App', () => {
  let page: ExpensetrackerPage;

  beforeEach(() => {
    page = new ExpensetrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
