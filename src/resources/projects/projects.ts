// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as LocationsAPI from './locations/locations';
import { LocationTranslateTextParams, LocationTranslateTextResponse, Locations } from './locations/locations';

export class Projects extends APIResource {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
}

Projects.Locations = Locations;

export declare namespace Projects {
  export {
    Locations as Locations,
    type LocationTranslateTextResponse as LocationTranslateTextResponse,
    type LocationTranslateTextParams as LocationTranslateTextParams,
  };
}
