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
import { TransferIntentCreateMode } from './transferIntentCreateMode';
import { TransferUserInResponse } from './transferUserInResponse';

/**
* Represents a transfer intent within Transfer UI.
*/
export class TransferIntentCreate extends null<String, any> {
    /**
    * Plaid\'s unique identifier for the transfer intent object.
    */
    'id': string;
    /**
    * The datetime the transfer was created. This will be of the form `2006-01-02T15:04:05Z`.
    */
    'created': Date;
    /**
    * The status of the transfer intent.  - `PENDING` – The transfer intent is pending. - `SUCCEEDED` – The transfer intent was successfully created. - `FAILED` – The transfer intent was unable to be created.
    */
    'status': TransferIntentCreate.StatusEnum;
    /**
    * The Plaid `account_id` for the account that will be debited or credited. Returned only if `account_id` was set on intent creation.
    */
    'accountId'?: string | null;
    /**
    * Plaid’s unique identifier for the origination account for the intent. If not provided, the default account will be used.
    */
    'originationAccountId': string;
    /**
    * The amount of the transfer (decimal string with two digits of precision e.g. \"10.00\").
    */
    'amount': string;
    'mode': TransferIntentCreateMode;
    'achClass': ACHClass;
    'user': TransferUserInResponse;
    /**
    * A description for the underlying transfer. Maximum of 8 characters.
    */
    'description': string;
    /**
    * The Metadata object is a mapping of client-provided string fields to any string value. The following limitations apply: - The JSON values must be Strings (no nested JSON objects allowed) - Only ASCII characters may be used - Maximum of 50 key/value pairs - Maximum key length of 40 characters - Maximum value length of 500 characters 
    */
    'metadata'?: { [key: string]: string; } | null;
    /**
    * The currency of the transfer amount, e.g. \"USD\"
    */
    'isoCurrencyCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TransferIntentCreate.StatusEnum"
        },
        {
            "name": "accountId",
            "baseName": "account_id",
            "type": "string"
        },
        {
            "name": "originationAccountId",
            "baseName": "origination_account_id",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "mode",
            "baseName": "mode",
            "type": "TransferIntentCreateMode"
        },
        {
            "name": "achClass",
            "baseName": "ach_class",
            "type": "ACHClass"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "TransferUserInResponse"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "isoCurrencyCode",
            "baseName": "iso_currency_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransferIntentCreate.attributeTypeMap);
    }
}

export namespace TransferIntentCreate {
    export enum StatusEnum {
        Pending = <any> 'PENDING',
        Succeeded = <any> 'SUCCEEDED',
        Failed = <any> 'FAILED'
    }
}
