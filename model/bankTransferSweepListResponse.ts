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
import { BankTransferSweep } from './bankTransferSweep';

/**
* BankTransferSweepListResponse defines the response schema for `/bank_transfer/sweep/list`
*/
export class BankTransferSweepListResponse extends null<String, any> {
    'sweeps': Array<BankTransferSweep>;
    /**
    * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
    */
    'requestId': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sweeps",
            "baseName": "sweeps",
            "type": "Array<BankTransferSweep>"
        },
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BankTransferSweepListResponse.attributeTypeMap);
    }
}

