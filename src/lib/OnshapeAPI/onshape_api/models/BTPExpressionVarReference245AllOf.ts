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
import type { BTPName261 } from './BTPName261';
import {
    BTPName261FromJSON,
    BTPName261FromJSONTyped,
    BTPName261ToJSON,
} from './BTPName261';

/**
 * 
 * @export
 * @interface BTPExpressionVarReference245AllOf
 */
export interface BTPExpressionVarReference245AllOf {
    /**
     * 
     * @type {string}
     * @memberof BTPExpressionVarReference245AllOf
     */
    btType?: string;
    /**
     * 
     * @type {BTPName261}
     * @memberof BTPExpressionVarReference245AllOf
     */
    name?: BTPName261;
}

/**
 * Check if a given object implements the BTPExpressionVarReference245AllOf interface.
 */
export function instanceOfBTPExpressionVarReference245AllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTPExpressionVarReference245AllOfFromJSON(json: any): BTPExpressionVarReference245AllOf {
    return BTPExpressionVarReference245AllOfFromJSONTyped(json, false);
}

export function BTPExpressionVarReference245AllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTPExpressionVarReference245AllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'btType': !exists(json, 'btType') ? undefined : json['btType'],
        'name': !exists(json, 'name') ? undefined : BTPName261FromJSON(json['name']),
    };
}

export function BTPExpressionVarReference245AllOfToJSON(value?: BTPExpressionVarReference245AllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'btType': value.btType,
        'name': BTPName261ToJSON(value.name),
    };
}

