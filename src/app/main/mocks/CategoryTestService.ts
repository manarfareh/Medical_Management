import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Service from "../interfaces/Service";

@Injectable({
    providedIn: 'root'
})
export default class CategoryTestService implements Service {
    public ID = new BehaviorSubject<string>(null);

    _category = []

    static id = 0

    public getAll() {
        return this._category;
    }

    public get(id) {
        return this._category.find(item => item.id === id);
    };

    public create(data) {
        data["id"] = CategoryTestService.id
        this._category.push(data);
        CategoryTestService.id++
    };

    public update(data) {

        var foundIndex = this._category.findIndex(item => item.id === parseInt(data.id));
        this._category[foundIndex] = data;
    };

    public remove(id) {
        var client = this.get(id)
        this._category.splice(this._category.indexOf(client), 1);
    };


}