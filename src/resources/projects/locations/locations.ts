// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as GlossariesAPI from './glossaries';
import { Glossaries, GlossaryCreateParams, GlossaryCreateResponse } from './glossaries';

export class Locations extends APIResource {
  glossaries: GlossariesAPI.Glossaries = new GlossariesAPI.Glossaries(this._client);

  /**
   * Translates input text and returns translated text.
   */
  translateText(
    projectId: string,
    location: string,
    body: LocationTranslateTextParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationTranslateTextResponse> {
    return this._client.post(`/projects/${projectId}/locations/${location}:translateText`, {
      body,
      ...options,
    });
  }
}

export interface LocationTranslateTextResponse {
  translations?: Array<LocationTranslateTextResponse.Translation>;
}

export namespace LocationTranslateTextResponse {
  export interface Translation {
    detectedLanguageCode?: string;

    translatedText?: string;
  }
}

export interface LocationTranslateTextParams {
  /**
   * The input text to translate.
   */
  contents?: Array<string>;

  /**
   * The language of the source text.
   */
  sourceLanguageCode?: string;

  /**
   * The language to use for translation of the input text.
   */
  targetLanguageCode?: string;
}

Locations.Glossaries = Glossaries;

export declare namespace Locations {
  export {
    type LocationTranslateTextResponse as LocationTranslateTextResponse,
    type LocationTranslateTextParams as LocationTranslateTextParams,
  };

  export {
    Glossaries as Glossaries,
    type GlossaryCreateResponse as GlossaryCreateResponse,
    type GlossaryCreateParams as GlossaryCreateParams,
  };
}
