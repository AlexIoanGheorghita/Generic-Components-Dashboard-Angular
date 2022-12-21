import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, ReplaySubject, Subject, Subscription } from "rxjs";
import { Person } from "../models/star-wars-person.model";
import { Hobbies } from "../models/hobbies.enum";
import { PEOPLE_LIST } from "../models/people.const";

type GenericObject = {[key: string]: any};

@Injectable({ providedIn: 'root' })
export class StarWarsService {
    private baseUrl: string = "https://swapi.dev/api";
    private itemsList: Person[] = PEOPLE_LIST;
    starWarsList = new Subject<Person[]>();

    constructor(private http: HttpClient) {
      const localStorageList = JSON.parse(<string>localStorage.getItem('list'));
      console.log(localStorageList);
      if (!localStorageList) {
        // this.init('/people').subscribe(items => {
        //   this.setItems(items['results']);
        // })
        localStorage.setItem('list', JSON.stringify(this.itemsList));
      } else {
        this.itemsList = localStorageList;
      }
    }

    getItems(): Person[] {
      return this.itemsList.slice();
    }

    getItem(id: number): Person | undefined {
      return this.itemsList.find(item => {
        return +item.id === id
      });
    }

    deleteItem(id: number): void {
      this.itemsList = this.itemsList.filter(item => {
        return item.id !== id
      });
      localStorage.setItem('list', JSON.stringify(this.itemsList));
      this.starWarsList.next(this.itemsList.slice());
    }

    init(itemType: string): Observable<GenericObject> {
        return this.http.get<{[key: string]: any}>(this.baseUrl + itemType);
    }

    setItems(items: GenericObject[]) {
        let list = [];
        for (let item of items) {
            let newItem = this.configureProperties(item);
            list.push(newItem);
        }
        this.itemsList = [...list];
        this.starWarsList.next(this.itemsList.slice());
        localStorage.setItem('list', JSON.stringify(this.itemsList));
    }

    clearList(): void {
      localStorage.removeItem('list');
      this.itemsList = [];
      this.starWarsList.next([]);
    }

    get LocalStorageList() {
      return JSON.parse(<string>localStorage.getItem('list'));
    }

    private getId(item: GenericObject): number {
        return +item['url'].split('/')[5];
    }

    private configureProperties(item: GenericObject): Person {
        let { hair_color, skin_color, eye_color, height, mass, name, homeworld, gender, birth_year, ...rest } = item;

        hair_color = hair_color.split(', ')[0];
        skin_color = skin_color.split(', ')[0];
        eye_color = eye_color.split(', ')[0];
        height = +height;
        mass = +mass;

        let id = this.getId(item);
        let hobbies = this.assignHobbies();

        return { id, name, height, mass, gender, hair_color, skin_color, eye_color, homeworld, hobbies, birth_year };
    }

    private assignHobbies(): Hobbies[] {
        const numberOfHobbies = Math.floor(Math.random() * 3) + 1;  // generates 1, 2, or 3 hobbies;

        let existingHobbies = Object.values(Hobbies);

        let hobbiesArray = Array.from(Array(numberOfHobbies).keys(), key => {
            let hobbyIndex = Math.floor(Math.random() * (existingHobbies.length));  // get a random hobby index
            let hobby = existingHobbies[hobbyIndex];                                // retrieve the hobby at that index
            existingHobbies.splice(hobbyIndex, hobbyIndex + 1);                     // remove that hobby so that it will not repeat
            return hobby;
        });

        return <Hobbies[]>hobbiesArray;
    }
}
