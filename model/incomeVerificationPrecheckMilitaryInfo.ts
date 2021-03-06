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
* Data about military info in the income verification precheck.
*/
export class IncomeVerificationPrecheckMilitaryInfo {
    /**
    * Is the user currently active duty in the US military
    */
    'isActiveDuty'?: boolean | null;
    /**
    * If the user is currently serving in the US military, the branch of the military they are serving in
    */
    'branch'?: IncomeVerificationPrecheckMilitaryInfo.BranchEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isActiveDuty",
            "baseName": "is_active_duty",
            "type": "boolean"
        },
        {
            "name": "branch",
            "baseName": "branch",
            "type": "IncomeVerificationPrecheckMilitaryInfo.BranchEnum"
        }    ];

    static getAttributeTypeMap() {
        return IncomeVerificationPrecheckMilitaryInfo.attributeTypeMap;
    }
}

export namespace IncomeVerificationPrecheckMilitaryInfo {
    export enum BranchEnum {
        AirForce = <any> 'AIR FORCE',
        Army = <any> 'ARMY',
        CoastGuard = <any> 'COAST GUARD',
        Marines = <any> 'MARINES',
        Navy = <any> 'NAVY',
        Unknown = <any> 'UNKNOWN'
    }
}
