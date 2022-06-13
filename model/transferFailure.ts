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
* The failure reason if the event type for a transfer is `\"failed\"` or `\"reversed\"`. Null value otherwise.
*/
export class TransferFailure extends null<String, any> {
    /**
    * The ACH return code, e.g. `R01`.  A return code will be provided if and only if the transfer status is `reversed`. For a full listing of ACH return codes, see [Transfer errors](https://plaid.com/docs/errors/transfer/#ach-return-codes).
    */
    'achReturnCode'?: string | null;
    /**
    * A human-readable description of the reason for the failure or reversal.
    */
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "achReturnCode",
            "baseName": "ach_return_code",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransferFailure.attributeTypeMap);
    }
}
