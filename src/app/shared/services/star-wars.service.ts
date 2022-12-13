import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, map, mergeMap, Observable, of, share, shareReplay, Subscription, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class StarWarsService {
    private baseUrl: string = "https://swapi.dev/api";
    private itemsList: {[key: string]: any}[] = [];

    constructor(private http: HttpClient) {}

    init(itemType: string): Observable<{[key: string]: any}> {
        return this.http.get<{[key: string]: any}>(this.baseUrl + itemType);
    }

    setItems(items: {[key: string]: any}[]) {
        this.itemsList = [...items];
    }

    getItems(): {[key: string]: any}[] {
        return this.itemsList;
    }

    getItem(id: number): {[key: string]: any} {
        return this.itemsList[id];
    }
}
