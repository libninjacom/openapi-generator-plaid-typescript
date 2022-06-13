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
import { PaystubAddress } from './paystubAddress';
import { TaxpayerID } from './taxpayerID';

/**
* Data about the employee.
*/
export class Employee extends null<String, any> {
    'address': PaystubAddress;
    /**
    * The name of the employee.
    */
    'name': string | null;
    /**
    * Marital status of the employee - either `single` or `married`.
    */
    'maritalStatus'?: string | null;
    'taxpayerId'?: TaxpayerID;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "PaystubAddress"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "maritalStatus",
            "baseName": "marital_status",
            "type": "string"
        },
        {
            "name": "taxpayerId",
            "baseName": "taxpayer_id",
            "type": "TaxpayerID"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(Employee.attributeTypeMap);
    }
}

