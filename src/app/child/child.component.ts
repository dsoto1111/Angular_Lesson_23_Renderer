import { Component, Input, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { Character } from '../character';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css'],
})

export class ChildComponent implements AfterViewInit {
    @Input() get person() {
        return this._person;
    } set person(obj: Character) {    
        obj.name = obj.name.trim() || "There is no name present";
        if (obj.name === 'There is no name present') {
            this.setClass = false;
        } else {
            this.setClass = true;        
        }
        this._person = obj;       
    }

    private _person!: Character;

    thenBlock!: TemplateRef<any>;
    @ViewChild('healer') healer!: TemplateRef<any>;
    @ViewChild('rogue') rogue!: TemplateRef<any>;

    position: string = 'relative';
    left: string = '2';

    setClass: boolean = true;
    showStrengths: Boolean = false;

    multipleClassesOne = {setAlignment: true, changeColor: true};
    multipleClassesTwo = ['setAlignment', 'changeColor'];    
    multipleClassesThree = 'setAlignment changeColor';  

    constructor() { }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.thenBlock = this.healer;            
        }, 0)
    }

    switchArchetypes() {
        this._person.archetype = this._person.archetype === "shaman" ? "scout" : "shaman";
        this.thenBlock = this._person.archetype === "shaman" ? this.healer : this.rogue;
    }
}