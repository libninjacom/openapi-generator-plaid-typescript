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
* The rationale for Plaid\'s decision regarding a proposed transfer. Will be null for `approved` decisions.
*/
export class TransferAuthorizationDecisionRationale extends null<String, any> {
    /**
    * A code representing the rationale for permitting or declining the proposed transfer. Possible values are:  `NSF` – Transaction likely to result in a return due to insufficient funds.  `RISK` - Transaction is high-risk.  `MANUALLY_VERIFIED_ITEM` – Item created via same-day micro deposits, limited information available. Plaid can only offer `permitted` as a transaction decision.  `LOGIN_REQUIRED` – Unable to collect the account information required for an authorization decision due to Item staleness. Can be rectified using Link update mode.  `ERROR` – Unable to collect the account information required for an authorization decision due to an error.
    */
    'code': TransferAuthorizationDecisionRationale.CodeEnum;
    /**
    * A human-readable description of the code associated with a permitted transfer or transfer decline.
    */
    'description': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "TransferAuthorizationDecisionRationale.CodeEnum"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TransferAuthorizationDecisionRationale.attributeTypeMap);
    }
}

export namespace TransferAuthorizationDecisionRationale {
    export enum CodeEnum {
        Nsf = <any> 'NSF',
        Risk = <any> 'RISK',
        ManuallyVerifiedItem = <any> 'MANUALLY_VERIFIED_ITEM',
        LoginRequired = <any> 'LOGIN_REQUIRED',
        Error = <any> 'ERROR'
    }
}
