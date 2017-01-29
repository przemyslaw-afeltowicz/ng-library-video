import { NgLibraryVideoPage } from './app.po';

describe('ng-library-video App', function() {
  let page: NgLibraryVideoPage;

  beforeEach(() => {
    page = new NgLibraryVideoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
