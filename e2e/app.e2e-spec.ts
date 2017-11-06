import { StressTestPage } from './app.po';

describe('stress-test App', function() {
  let page: StressTestPage;

  beforeEach(() => {
    page = new StressTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
