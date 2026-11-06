import test from 'node:test';
import assert from 'node:assert/strict';
import { estimateMinutes, xboxPreloadTime } from './launch-tools.mjs';

test('decimal GB/Mbps conversion, rounding and long downloads', () => {
  assert.equal(estimateMinutes(100, 100), 134);
  assert.equal(estimateMinutes(1, 1000), 1);
  assert.equal(estimateMinutes(500, 10), 6667);
  assert.equal(estimateMinutes(0.01, 0.01), 134);
});
test('unsafe and invalid input is rejected', () => {
  for (const [size, speed] of [[0,100],[-1,100],[100,0],[NaN,100],[100,Infinity],[10001,100],[100,100001]]) {
    assert.throws(() => estimateMinutes(size,speed), RangeError);
  }
});
test('one global instant has the correct local date on both sides of midnight', () => {
  assert.match(xboxPreloadTime('Europe/Istanbul'), /10 November 2026 at 03:00:00/);
  assert.match(xboxPreloadTime('America/Los_Angeles'), /9 November 2026 at 16:00:00/);
  assert.match(xboxPreloadTime('Asia/Tokyo'), /10 November 2026 at 09:00:00/);
  assert.throws(() => xboxPreloadTime('Invalid/Zone'), RangeError);
});
