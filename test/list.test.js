import test from 'ava';
import resin from 'resin';
import fs from 'fs';

test('mobile dark', t => {
  const actual = fs.readFileSync('../css/mobile-dark-list.css','utf-8').trim();
  const expected = fs.readFileSync('./expected/mobile-dark-list.css','utf-8').trim();
  t.is(actual, expected);
});

test('mobile light', t => {
  const actual = fs.readFileSync('../css/mobile-light-list.css','utf-8').trim();
  const expected = fs.readFileSync('./expected/mobile-light-list.css','utf-8').trim();
  t.is(actual, expected);
});
