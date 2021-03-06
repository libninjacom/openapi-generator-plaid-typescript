/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.64.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CountryCode } from './countryCode';
import { InstitutionsGetByIdRequestOptions } from './institutionsGetByIdRequestOptions';

/**
* InstitutionsGetByIdRequest defines the request schema for `/institutions/get_by_id`
*/
export class InstitutionsGetByIdRequest {
    /**
    * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
    */
    'clientId'?: string;
    /**
    * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
    */
    'secret'?: string;
    /**
    * The ID of the institution to get details about
    */
    'institutionId': string;
    /**
    * Specify an array of Plaid-supported country codes this institution supports, using the ISO-3166-1 alpha-2 country code standard. In API versions 2019-05-29 and earlier, the `country_codes` parameter is an optional parameter within the `options` object and will default to `[US]` if it is not supplied. 
    */
    'countryCodes': Array<CountryCode>;
    'options'?: InstitutionsGetByIdRequestOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clientId",
            "baseName": "client_id",
            "type": "string"
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "string"
        },
        {
            "name": "institutionId",
            "baseName": "institution_id",
            "type": "string"
        },
        {
            "name": "countryCodes",
            "baseName": "country_codes",
            "type": "Array<CountryCode>"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "InstitutionsGetByIdRequestOptions"
        }    ];

    static getAttributeTypeMap() {
        return InstitutionsGetByIdRequest.attributeTypeMap;
    }
}

