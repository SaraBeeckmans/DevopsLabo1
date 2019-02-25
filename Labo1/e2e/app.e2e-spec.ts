import { TestAPPPage } from './app.po';

describe('test-app App', function() {
  let page: TestAPPPage;

  beforeEach(() => {
    page = new TestAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
