import { RewePage } from './app.po';

describe('rewe App', function() {
  let page: RewePage;

  beforeEach(() => {
    page = new RewePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
