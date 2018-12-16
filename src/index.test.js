import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have h1 that says Users', (done) => {
    const { JSDOM } = jsdom;
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const { document } = (new JSDOM(index)).window;
    const h1 = document.getElementsByTagName('h1')[0];

    expect(h1.innerHTML).to.equal("Users");
    done();
  });
})
