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

/**
* ProcessorApexProcessorTokenCreateRequest defines the request schema for `/processor/apex/processor_token/create`
*/
export class ProcessorApexProcessorTokenCreateRequest {
    /**
    * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
    */
    'clientId'?: string;
    /**
    * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
    */
    'secret'?: string;
    /**
    * The access token associated with the Item data is being requested for.
    */
    'accessToken': string;
    /**
    * The `account_id` value obtained from the `onSuccess` callback in Link
    */
    'accountId': string;

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
            "name": "accessToken",
            "baseName": "access_token",
            "type": "string"
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProcessorApexProcessorTokenCreateRequest.attributeTypeMap;
    }
}
