import { Component, OnInit } from "@angular/core";
import { FormControl, FormBuilder } from "@angular/forms";
import { Observable } from "rxjs";
import { startWith, map } from "rxjs/operators";
import { Router } from "@angular/router";
const basicCheckboxes = {
	beforeCodeTitle: 'Basic checkboxes',

	tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic checkboxes
*/
@Component({
  selector: 'checkbox-overview-example',
  templateUrl: 'checkbox-overview-example.html',
  styleUrls: ['checkbox-overview-example.css'],
})
export class CheckboxOverviewExample {}`,
	cssCode: ``,
	viewCode: ``,
	isCodeVisible: false
};


@Component({
	selector: 'addbooking',
	templateUrl: './addbooking.html',
	styleUrls: ['./addbooking.scss']
})

export class AddBooking implements OnInit {
	exampleBasicCheckboxes;
	stateCtrl: FormControl;
	filteredStates: Observable<any[]>;
	states: State[] = [
		{
			name: 'Arkansas',
			population: '2.978M',
			// https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
			flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
		},
		{
			name: 'California',
			population: '39.14M',
			// https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
			flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
		},
		{
			name: 'Florida',
			population: '20.27M',
			// https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
			flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
		},
		{
			name: 'Texas',
			population: '27.47M',
			// https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
			flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
		}
	];

	modelFirst: any = {
		left: true,
		middle: false,
		right: false
	}; 1
	constructor(private fb: FormBuilder, private route: Router) {
		this.stateCtrl = new FormControl();
		this.filteredStates = this.stateCtrl.valueChanges
			.pipe(
				startWith(''),
				map(state => state.length > 1 ? this.filterStates(state) : this.states.slice())
			);
	}

	filterStates(name: string) {
		return this.states.filter(state =>
			state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
	}
	ngOnInit() {
		this.exampleBasicCheckboxes = basicCheckboxes;
	}

	searchHotel() {
		this.route.navigate(['/default/booking/hotels']);
	}
}

export class State {
	constructor(public name: string, public population: string, public flag: string) { }
}
