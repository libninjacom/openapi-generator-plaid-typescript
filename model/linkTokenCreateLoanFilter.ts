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
import { LoanAccountSubtype } from './loanAccountSubtype';

/**
* A filter to apply to `loan`-type accounts
*/
export class LinkTokenCreateLoanFilter extends null<String, any> {
    /**
    * An array of account subtypes to display in Link. If not specified, all account subtypes will be shown. For a full list of valid types and subtypes, see the [Account schema](https://plaid.com/docs/api/accounts#account-type-schema). 
    */
    'accountSubtypes'?: Array<LoanAccountSubtype>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountSubtypes",
            "baseName": "account_subtypes",
            "type": "Array<LoanAccountSubtype>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LinkTokenCreateLoanFilter.attributeTypeMap);
    }
}

