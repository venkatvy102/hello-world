import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { IPlexAutomationSettings } from './plexautomationsettings';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class SettingsService {

    //private _authUrl: string = 'http://localhost:16538/api/plex/usersettings';
    private _authUrl: string = 'https://www.venkatpasumarthi.com/api/api/plex/usersettings';

    constructor(private _http: Http){

    }

    getUserSettings(userName: string, access_token: string): Observable<IPlexAutomationSettings> {

        let urlParam = new URLSearchParams();
        urlParam.append("username", userName);
        
        let headerParam = new Headers();
        headerParam.append("Content-Type","application/x-www-form-urlencoded");
        headerParam.append("Authorization", "Bearer " + access_token);

        let requestOptions = new RequestOptions({headers: headerParam});

        console.log(urlParam);

        return this._http.get(this._authUrl + "?" + urlParam.toString(), requestOptions)
        //.do(data => console.log('All:' + JSON.stringify(data)))
        .map((response: Response) => <IPlexAutomationSettings>response.json())
        //.do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    updateUserSettings(userName: string, access_token: string, settings: IPlexAutomationSettings): Observable<boolean> {
        let urlParam = new URLSearchParams();
        urlParam.append("username", userName);
        urlParam.append("emailNotifications", settings.EmailNotifications.toString());
        urlParam.append("pushNotifications", settings.PushNotifications.toString());

        let headerParam = new Headers();
        headerParam.append("Content-Type","application/x-www-form-urlencoded");
        headerParam.append("Authorization", "Bearer " + access_token);

        let requestOptions = new RequestOptions({headers: headerParam});

        return this._http.post(this._authUrl + "?" + urlParam.toString(),null, requestOptions)
        .map((response: Response) => <boolean>response.json())
        .catch(this.handleError);
    }
}
