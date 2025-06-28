import assert from 'node:assert/strict';
import test from 'node:test';
import { POST } from '../app/api/contact/route.js';

test('POST /api/contact', async () => {
  const reqOk = new Request('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify({ email: 'test@example.com', message: 'hello' }),
  });
  const resOk = await POST(reqOk);
  assert.equal(resOk.status, 200);
  const okData = await resOk.json();
  assert.equal(okData.status, 'ok');

  const reqBad = new Request('http://localhost/api/contact', {
    method: 'POST',
    body: JSON.stringify({ email: '', message: '' }),
  });
  const resBad = await POST(reqBad);
  assert.equal(resBad.status, 400);
});
