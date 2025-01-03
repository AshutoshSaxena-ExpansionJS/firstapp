import { CapitalizeFirstLastPipe } from './capitalize-first-last.pipe';

describe('CapitalizeFirstLastPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizeFirstLastPipe();
    expect(pipe).toBeTruthy();
  });
});
