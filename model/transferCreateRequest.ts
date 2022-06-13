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
import { TransferNetwork } from './transferNetwork';
import { TransferType } from './transferType';
import { TransferUserInRequest } from './transferUserInRequest';

/**
* Defines the request schema for `/transfer/create`
*/
export class TransferCreateRequest {
    /**
    * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
    */
    'clientId'?: string;
    /**
    * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
    */
    'secret'?: string;
    /**
    * Deprecated. `authorization_id` is now for used idempotency instead.  A random key provided by the client, per unique transfer. Maximum of 50 characters.  The API supports idempotency for safely retrying requests without accidentally performing the same operation twice. For example, if a request to create a transfer fails due to a network connection error, you can retry the request with the same idempotency key to guarantee that only a single transfer is created.
    */
    'idempotencyKey'?: string;
    /**
    * The Plaid `access_token` for the account that will be debited or credited.
    */
    'accessToken': string;
    /**
    * The Plaid `account_id` for the account that will be debited or credited.
    */
    'accountId': string;
    /**
    * Plaid’s unique identifier for a transfer authorization. This parameter also serves the purpose of acting as an idempotency identifier.
    */
    'authorizationId': string;
    'type': TransferType;
    'network': TransferNetwork;
    /**
    * The amount of the transfer (decimal string with two digits of precision e.g. \"10.00\").
    */
    'amount': string;
    /**
    * The transfer description. Maximum of 10 characters.
    */
    'description': string;
    'achClass': ACHClass;
    'user': TransferUserInRequest;
    /**
    * The Metadata object is a mapping of client-provided string fields to any string value. The following limitations apply: - The JSON values must be Strings (no nested JSON objects allowed) - Only ASCII characters may be used - Maximum of 50 key/value pairs - Maximum key length of 40 characters - Maximum value length of 500 characters 
    */
    'metadata'?: { [key: string]: string; } | null;
    /**
    * Plaid’s unique identifier for the origination account for this transfer. If you have more than one origination account, this value must be specified. Otherwise, this field should be left blank.
    */
    'originationAccountId'?: string | null;
    /**
    * The currency of the transfer amount. The default value is \"USD\".
    */
    'isoCurrencyCode'?: string;

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
            "name": "idempotencyKey",
            "baseName": "idempotency_key",
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
        },
        {
            "name": "authorizationId",
            "baseName": "authorization_id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TransferType"
        },
        {
            "name": "network",
            "baseName": "network",
            "type": "TransferNetwork"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "achClass",
            "baseName": "ach_class",
            "type": "ACHClass"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "TransferUserInRequest"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
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
        return TransferCreateRequest.attributeTypeMap;
    }
}

