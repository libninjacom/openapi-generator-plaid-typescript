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
* Data on the W2 Box 12
*/
export class W2Box12 extends null<String, any> {
    /**
    * W2 Box 12 code.
    */
    'code'?: string | null;
    /**
    * W2 Box 12 amount.
    */
    'amount'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(W2Box12.attributeTypeMap);
    }
}

