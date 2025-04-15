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
/**
 * 
 * @export
 * @interface BTFullElementIdAndPartId643AllOf
 */
export interface BTFullElementIdAndPartId643AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTFullElementIdAndPartId643AllOf
     */
    btType?: string;
    /**
     * 
     * @type {string}
     * @memberof BTFullElementIdAndPartId643AllOf
     */
    partId?: string;
}

/**
 * Check if a given object implements the BTFullElementIdAndPartId643AllOf interface.
 */
export function instanceOfBTFullElementIdAndPartId643AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTFullElementIdAndPartId643AllOfFromJSON(json: any): BTFullElementIdAndPartId643AllOf {
    return BTFullElementIdAndPartId643AllOfFromJSONTyped(json, false);
}

export function BTFullElementIdAndPartId643AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTFullElementIdAndPartId643AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'partId': !exists(json, 'partId') ? undefined : json['partId'],
    };
}

export function BTFullElementIdAndPartId643AllOfToJSON(value?: BTFullElementIdAndPartId643AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'partId': value.partId,
    };
}

