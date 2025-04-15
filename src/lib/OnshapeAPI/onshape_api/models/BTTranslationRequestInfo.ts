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
import type { BTTranslationRequestState } from './BTTranslationRequestState';
import {
    BTTranslationRequestStateFromJSON,
    BTTranslationRequestStateFromJSONTyped,
    BTTranslationRequestStateToJSON,
} from './BTTranslationRequestState';

/**
 * 
 * @export
 * @interface BTTranslationRequestInfo
 */
export interface BTTranslationRequestInfo {
    /**
     * 
     * @type {string}
     * @memberof BTTranslationRequestInfo
     */
    documentId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslationRequestInfo
     */
    failureReason?: string;
    /**
     * URI to fetch complete information of the resource.
     * @type {string}
     * @memberof BTTranslationRequestInfo
     */
    href?: string;
    /**
     * Id of the resource.
     * @type {string}
     * @memberof BTTranslationRequestInfo
     */
    id?: string;
    /**
     * Name of the resource.
     * @type {string}
     * @memberof BTTranslationRequestInfo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslationRequestInfo
     */
    requestElementId?: string;
    /**
     * 
     * @type {BTTranslationRequestState}
     * @memberof BTTranslationRequestInfo
     */
    requestState?: BTTranslationRequestState;
    /**
     * 
     * @type {string}
     * @memberof BTTranslationRequestInfo
     */
    resultDocumentId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTTranslationRequestInfo
     */
    resultElementIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof BTTranslationRequestInfo
     */
    resultExternalDataIds?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BTTranslationRequestInfo
     */
    resultWorkspaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslationRequestInfo
     */
    versionId?: string;
    /**
     * URI to visualize the resource in a webclient if applicable.
     * @type {string}
     * @memberof BTTranslationRequestInfo
     */
    viewRef?: string;
    /**
     * 
     * @type {string}
     * @memberof BTTranslationRequestInfo
     */
    workspaceId?: string;
}

/**
 * Check if a given object implements the BTTranslationRequestInfo interface.
 */
export function instanceOfBTTranslationRequestInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BTTranslationRequestInfoFromJSON(json: any): BTTranslationRequestInfo {
    return BTTranslationRequestInfoFromJSONTyped(json, false);
}

export function BTTranslationRequestInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BTTranslationRequestInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'documentId': !exists(json, 'documentId') ? undefined : json['documentId'],
        'failureReason': !exists(json, 'failureReason') ? undefined : json['failureReason'],
        'href': !exists(json, 'href') ? undefined : json['href'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'requestElementId': !exists(json, 'requestElementId') ? undefined : json['requestElementId'],
        'requestState': !exists(json, 'requestState') ? undefined : BTTranslationRequestStateFromJSON(json['requestState']),
        'resultDocumentId': !exists(json, 'resultDocumentId') ? undefined : json['resultDocumentId'],
        'resultElementIds': !exists(json, 'resultElementIds') ? undefined : json['resultElementIds'],
        'resultExternalDataIds': !exists(json, 'resultExternalDataIds') ? undefined : json['resultExternalDataIds'],
        'resultWorkspaceId': !exists(json, 'resultWorkspaceId') ? undefined : json['resultWorkspaceId'],
        'versionId': !exists(json, 'versionId') ? undefined : json['versionId'],
        'viewRef': !exists(json, 'viewRef') ? undefined : json['viewRef'],
        'workspaceId': !exists(json, 'workspaceId') ? undefined : json['workspaceId'],
    };
}

export function BTTranslationRequestInfoToJSON(value?: BTTranslationRequestInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'documentId': value.documentId,
        'failureReason': value.failureReason,
        'href': value.href,
        'id': value.id,
        'name': value.name,
        'requestElementId': value.requestElementId,
        'requestState': BTTranslationRequestStateToJSON(value.requestState),
        'resultDocumentId': value.resultDocumentId,
        'resultElementIds': value.resultElementIds,
        'resultExternalDataIds': value.resultExternalDataIds,
        'resultWorkspaceId': value.resultWorkspaceId,
        'versionId': value.versionId,
        'viewRef': value.viewRef,
        'workspaceId': value.workspaceId,
    };
}

