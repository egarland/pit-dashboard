/* tslint:disable */
/* eslint-disable */
/**
 * Onshape REST API
 * The Onshape REST API consumed by all client. # Authorization The simplest way to authorize and enable the **Try it out** functionality is to sign in to Onshape and use the current session. The **Authorize** button enables other authorization techniques. To ensure the current session isn\'t used when trying other authentication techniques, make sure to remove the Onshape cookie as per the instructions for your particular browser. Alternatively, a private or incognito window may be used. Here\'s [how to remove a specific cookie on Chrome](https://support.google.com/chrome/answer/95647#zippy=%2Cdelete-cookies-from-a-site). - **Current Session** authorization is enabled by default if the browser is already signed in to [Onshape](/). - **OAuth2** authorization uses an Onshape OAuth2 app created on the [Onshape Developer Portal](https://dev-portal.onshape.com/oauthApps). The redirect URL field should include `https://cad.onshape.com/glassworks/explorer/oauth2-redirect.html`. - **API Key** authorization using basic authentication is also available. The keys can be generated in the [Onshape Developer Portal](https://dev-portal.onshape.com/keys). In the authentication dialog, enter the access key in the `Username` field, and enter the secret key in the `Password` field. Basic authentication should only be used during the development process since sharing API Keys provides the same level of access as a username and password.
 *
 * The version of the OpenAPI document: 1.164.16301-d273853a12e7
 * Contact: api-support@onshape.zendesk.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BTTableBaseCrossHighlightData2609 } from './BTTableBaseCrossHighlightData2609';
import {
    BTTableBaseCrossHighlightData2609FromJSON,
    BTTableBaseCrossHighlightData2609FromJSONTyped,
    BTTableBaseCrossHighlightData2609ToJSON,
} from './BTTableBaseCrossHighlightData2609';

/**
 * 
 * @export
 * @interface BTFSTableColumnInfo623AllOf
 */
export interface BTFSTableColumnInfo623AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTFSTableColumnInfo623AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTTableBaseCrossHighlightData2609}
     * @memberof BTFSTableColumnInfo623AllOf
     */
    crossHighlightData?: BTTableBaseCrossHighlightData2609;
}

/**
 * Check if a given object implements the BTFSTableColumnInfo623AllOf interface.
 */
export function instanceOfBTFSTableColumnInfo623AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFSTableColumnInfo623AllOfFromJSON(json: any): BTFSTableColumnInfo623AllOf {
    return BTFSTableColumnInfo623AllOfFromJSONTyped(json, false);
}

export function BTFSTableColumnInfo623AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFSTableColumnInfo623AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'crossHighlightData': !exists(json, 'crossHighlightData') ? undefined : BTTableBaseCrossHighlightData2609FromJSON(json['crossHighlightData']),
    };
}

export function BTFSTableColumnInfo623AllOfToJSON(value?: BTFSTableColumnInfo623AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'crossHighlightData': BTTableBaseCrossHighlightData2609ToJSON(value.crossHighlightData),
    };
}

