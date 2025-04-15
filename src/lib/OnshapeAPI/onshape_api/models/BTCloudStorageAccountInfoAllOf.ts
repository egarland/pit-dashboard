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
import type { BTCloudStorageObjectInfo } from './BTCloudStorageObjectInfo';
import {
    BTCloudStorageObjectInfoFromJSON,
    BTCloudStorageObjectInfoFromJSONTyped,
    BTCloudStorageObjectInfoToJSON,
} from './BTCloudStorageObjectInfo';

/**
 * 
 * @export
 * @interface BTCloudStorageAccountInfoAllOf
 */
export interface BTCloudStorageAccountInfoAllOf {
    /**
     * 
     * @type {string}
     * @memberof BTCloudStorageAccountInfoAllOf
     */
    cloudStorageAccountId?: string;
    /**
     * 
     * @type {number}
     * @memberof BTCloudStorageAccountInfoAllOf
     */
    cloudStorageProvider?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BTCloudStorageAccountInfoAllOf
     */
    enabled?: boolean;
    /**
     * 
     * @type {BTCloudStorageObjectInfo}
     * @memberof BTCloudStorageAccountInfoAllOf
     */
    exportFolder?: BTCloudStorageObjectInfo;
    /**
     * 
     * @type {BTCloudStorageObjectInfo}
     * @memberof BTCloudStorageAccountInfoAllOf
     */
    importFolder?: BTCloudStorageObjectInfo;
}

/**
 * Check if a given object implements the BTCloudStorageAccountInfoAllOf interface.
 */
export function instanceOfBTCloudStorageAccountInfoAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTCloudStorageAccountInfoAllOfFromJSON(json: any): BTCloudStorageAccountInfoAllOf {
    return BTCloudStorageAccountInfoAllOfFromJSONTyped(json, false);
}

export function BTCloudStorageAccountInfoAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTCloudStorageAccountInfoAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloudStorageAccountId': !exists(json, 'cloudStorageAccountId') ? undefined : json['cloudStorageAccountId'],
        'cloudStorageProvider': !exists(json, 'cloudStorageProvider') ? undefined : json['cloudStorageProvider'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'exportFolder': !exists(json, 'exportFolder') ? undefined : BTCloudStorageObjectInfoFromJSON(json['exportFolder']),
        'importFolder': !exists(json, 'importFolder') ? undefined : BTCloudStorageObjectInfoFromJSON(json['importFolder']),
    };
}

export function BTCloudStorageAccountInfoAllOfToJSON(value?: BTCloudStorageAccountInfoAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloudStorageAccountId': value.cloudStorageAccountId,
        'cloudStorageProvider': value.cloudStorageProvider,
        'enabled': value.enabled,
        'exportFolder': BTCloudStorageObjectInfoToJSON(value.exportFolder),
        'importFolder': BTCloudStorageObjectInfoToJSON(value.importFolder),
    };
}

