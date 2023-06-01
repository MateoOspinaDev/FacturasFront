import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize the first letter of a string', () => {
    const result = pipe.transform('test');
    expect(result).toEqual('Test');
  });

  it('should not modify the letter when it is uppercase', () => {
    const result = pipe.transform('Test');
    expect(result).toEqual('Test');
  });

  it('should return an empty string if the input is empty', () => {
    const result = pipe.transform('');
    expect(result).toEqual('');
  });

});
