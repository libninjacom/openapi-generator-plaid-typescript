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
* An object containing a set of ids related to an employee
*/
export class PlatformIds extends null<String, any> {
    /**
    * The ID of an employee as given by their employer
    */
    'employeeId'?: string | null;
    /**
    * The ID of an employee as given by their payroll
    */
    'payrollId'?: string | null;
    /**
    * The ID of the position of the employee
    */
    'positionId'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employeeId",
            "baseName": "employee_id",
            "type": "string"
        },
        {
            "name": "payrollId",
            "baseName": "payroll_id",
            "type": "string"
        },
        {
            "name": "positionId",
            "baseName": "position_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PlatformIds.attributeTypeMap);
    }
}
