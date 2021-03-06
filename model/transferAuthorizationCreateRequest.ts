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
import { TransferAuthorizationDevice } from './transferAuthorizationDevice';
import { TransferNetwork } from './transferNetwork';
import { TransferType } from './transferType';
import { TransferUserInRequest } from './transferUserInRequest';

/**
* Defines the request schema for `/transfer/authorization/create`
*/
export class TransferAuthorizationCreateRequest {
    /**
    * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
    */
    'clientId'?: string;
    /**
    * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
    */
    'secret'?: string;
    /**
    * The Plaid `access_token` for the account that will be debited or credited.
    */
    'accessToken': string;
    /**
    * The Plaid `account_id` for the account that will be debited or credited.
    */
    'accountId': string;
    'type': TransferType;
    'network': TransferNetwork;
    /**
    * The amount of the transfer (decimal string with two digits of precision e.g. \"10.00\").
    */
    'amount': string;
    'achClass': ACHClass;
    'user': TransferUserInRequest;
    'device'?: TransferAuthorizationDevice;
    /**
    * Plaid\'s unique identifier for the origination account for this authorization. If not specified, the default account will be used.
    */
    'originationAccountId'?: string;
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
            "name": "device",
            "baseName": "device",
            "type": "TransferAuthorizationDevice"
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
        return TransferAuthorizationCreateRequest.attributeTypeMap;
    }
}

