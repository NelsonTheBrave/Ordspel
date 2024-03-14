import { describe } from 'yargs';
import { renderTargetWord } from './renderTargetWord';

describe('renderTargetWord()', () => {
  it('returns a four letter word with non-duplicate letters from a specified list that only contains that four letter word', () => {
    const firstList = ['corn'];
    const output = renderTargetWord(firstList, 4, 'no');
    expect(output).toStrictEqual('corn');
  });
});
