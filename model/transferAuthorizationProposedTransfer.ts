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
import { ACHClass } from './aCHClass';
import { TransferType } from './transferType';
import { TransferUserInResponse } from './transferUserInResponse';

/**
* Details regarding the proposed transfer.
*/
export class TransferAuthorizationProposedTransfer extends null<String, any> {
    'achClass': ACHClass;
    /**
    * The Plaid `account_id` for the account that will be debited or credited.
    */
    'accountId': string;
    'type': TransferType;
    'user': TransferUserInResponse;
    /**
    * The amount of the transfer (decimal string with two digits of precision e.g. \"10.00\").
    */
    'amount': string;
    /**
    * The network or rails used for the transfer.
    */
    'network': string;
    /**
    * Plaid\'s unique identifier for the origination account that was used for this transfer.
    */
    'originationAccountId': string;
    /**
    * The currency of the transfer amount. The default value is \"USD\".
    */
    'isoCurrencyCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "achClass",
            "baseName": "ach_class",
            "type": "ACHClass"
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TransferType"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "TransferUserInResponse"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "string"
        },
        {
            "name": "originationAccountId",
            "baseName": "origination_account_id",
            "type": "string"
        },
        {
            "name": "isoCurrencyCode",
            "baseName": "iso_currency_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransferAuthorizationProposedTransfer.attributeTypeMap);
    }
}

