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
* The user object allows you to provide additional information about the user to be appended to the Asset Report. All fields are optional. The `first_name`, `last_name`, and `ssn` fields are required if you would like the Report to be eligible for Fannie Mae’s Day 1 Certainty™ program.
*/
export class AssetReportUser extends null<String, any> {
    /**
    * An identifier you determine and submit for the user.
    */
    'clientUserId'?: string | null;
    /**
    * The user\'s first name. Required for the Fannie Mae Day 1 Certainty™ program.
    */
    'firstName'?: string | null;
    /**
    * The user\'s middle name
    */
    'middleName'?: string | null;
    /**
    * The user\'s last name.  Required for the Fannie Mae Day 1 Certainty™ program.
    */
    'lastName'?: string | null;
    /**
    * The user\'s Social Security Number. Required for the Fannie Mae Day 1 Certainty™ program.  Format: \"ddd-dd-dddd\"
    */
    'ssn'?: string | null;
    /**
    * The user\'s phone number, in E.164 format: +{countrycode}{number}. For example: \"+14151234567\". Phone numbers provided in other formats will be parsed on a best-effort basis.
    */
    'phoneNumber'?: string | null;
    /**
    * The user\'s email address.
    */
    'email'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clientUserId",
            "baseName": "client_user_id",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "middleName",
            "baseName": "middle_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "ssn",
            "baseName": "ssn",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(AssetReportUser.attributeTypeMap);
    }
}

