// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Glossaries extends APIResource {
  /**
   * Creates a glossary and returns the long-running operation.
   */
  create(
    projectId: string,
    location: string,
    body: GlossaryCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GlossaryCreateResponse> {
    return this._client.post(`/projects/${projectId}/locations/${location}/glossaries`, { body, ...options });
  }
}

export interface GlossaryCreateResponse {
  metadata?: unknown;

  name?: string;
}

export interface GlossaryCreateParams {
  /**
   * The language codes of the languages in the glossary.
   */
  languageCodesSet?: GlossaryCreateParams.LanguageCodesSet;

  /**
   * The resource name of the glossary.
   */
  name?: string;
}

export namespace GlossaryCreateParams {
  /**
   * The language codes of the languages in the glossary.
   */
  export interface LanguageCodesSet {
    languageCodes?: Array<string>;
  }
}

export declare namespace Glossaries {
  export {
    type GlossaryCreateResponse as GlossaryCreateResponse,
    type GlossaryCreateParams as GlossaryCreateParams,
  };
}
