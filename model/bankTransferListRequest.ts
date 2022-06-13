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
import { BankTransferDirection } from './bankTransferDirection';

/**
* Defines the request schema for `/bank_transfer/list`
*/
export class BankTransferListRequest {
    /**
    * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
    */
    'clientId'?: string;
    /**
    * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
    */
    'secret'?: string;
    /**
    * The start datetime of bank transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)
    */
    'startDate'?: Date | null;
    /**
    * The end datetime of bank transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)
    */
    'endDate'?: Date | null;
    /**
    * The maximum number of bank transfers to return.
    */
    'count'?: number = 25;
    /**
    * The number of bank transfers to skip before returning results.
    */
    'offset'?: number = 0;
    /**
    * Filter bank transfers to only those originated through the specified origination account.
    */
    'originationAccountId'?: string | null;
    'direction'?: BankTransferDirection | null;

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
            "name": "startDate",
            "baseName": "start_date",
            "type": "Date"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "Date"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number"
        },
        {
            "name": "originationAccountId",
            "baseName": "origination_account_id",
            "type": "string"
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "BankTransferDirection"
        }    ];

    static getAttributeTypeMap() {
        return BankTransferListRequest.attributeTypeMap;
    }
}
