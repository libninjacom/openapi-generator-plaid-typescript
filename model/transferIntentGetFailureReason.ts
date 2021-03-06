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
* The reason for a failed transfer intent. Returned only if the transfer intent status is `failed`. Null otherwise.
*/
export class TransferIntentGetFailureReason extends null<String, any> {
    /**
    * A broad categorization of the error.
    */
    'errorType'?: string;
    /**
    * A code representing the reason for a failed transfer intent (i.e., an API error or the authorization being declined).  For a full listing of bank transfer errors, see [Bank Transfers errors](https://plaid.com/docs/errors/bank-transfers/).
    */
    'errorCode'?: string;
    /**
    * A human-readable description of the code associated with a failed transfer intent.
    */
    'errorMessage'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorType",
            "baseName": "error_type",
            "type": "string"
        },
        {
            "name": "errorCode",
            "baseName": "error_code",
            "type": "string"
        },
        {
            "name": "errorMessage",
            "baseName": "error_message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransferIntentGetFailureReason.attributeTypeMap);
    }
}

