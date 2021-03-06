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
* Student loan repayment information used to configure Sandbox test data for the Liabilities product
*/
export class StudentLoanRepaymentModel extends null<String, any> {
    /**
    * The only currently supported value for this field is `standard`.
    */
    'type': string;
    /**
    * Configures the number of months before repayment starts.
    */
    'nonRepaymentMonths': number;
    /**
    * Configures the number of months of repayments before the loan is paid off.
    */
    'repaymentMonths': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "nonRepaymentMonths",
            "baseName": "non_repayment_months",
            "type": "number"
        },
        {
            "name": "repaymentMonths",
            "baseName": "repayment_months",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StudentLoanRepaymentModel.attributeTypeMap);
    }
}

