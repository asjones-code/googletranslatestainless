// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Googletranslate from 'googletranslate';
import { Response } from 'node-fetch';

const client = new Googletranslate({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource locations', () => {
  test('translateText', async () => {
    const responsePromise = client.projects.locations.translateText('projectId', 'location', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
