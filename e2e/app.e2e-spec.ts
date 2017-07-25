import { AngularProject1Page } from './app.po';

describe('angular-project1 App', () => {
  let page: AngularProject1Page;

  beforeEach(() => {
    page = new AngularProject1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
