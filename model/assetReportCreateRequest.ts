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
import { AssetReportCreateRequestOptions } from './assetReportCreateRequestOptions';

/**
* AssetReportCreateRequest defines the request schema for `/asset_report/create`
*/
export class AssetReportCreateRequest {
    /**
    * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
    */
    'clientId'?: string;
    /**
    * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
    */
    'secret'?: string;
    /**
    * An array of access tokens corresponding to the Items that will be included in the report. The `assets` product must have been initialized for the Items during link; the Assets product cannot be added after initialization.
    */
    'accessTokens': Array<string>;
    /**
    * The maximum integer number of days of history to include in the Asset Report. If using Fannie Mae Day 1 Certainty, `days_requested` must be at least 61 for new originations or at least 31 for refinancings.
    */
    'daysRequested': number;
    'options'?: AssetReportCreateRequestOptions;

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
            "name": "accessTokens",
            "baseName": "access_tokens",
            "type": "Array<string>"
        },
        {
            "name": "daysRequested",
            "baseName": "days_requested",
            "type": "number"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "AssetReportCreateRequestOptions"
        }    ];

    static getAttributeTypeMap() {
        return AssetReportCreateRequest.attributeTypeMap;
    }
}

