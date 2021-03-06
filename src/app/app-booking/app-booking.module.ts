import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
	MatAutocompleteModule,
	MatNativeDateModule,

	MatInputModule,
	MatRadioModule,
	MatButtonModule,
	MatCardModule,
	MatChipsModule,
	MatSelectModule,
	MatProgressBarModule,
	MatProgressSpinnerModule,
	MatIconModule,
	MatSliderModule,
	MatPaginatorModule,
	MatSortModule,
	MatSidenavModule,
	MatSnackBarModule,
	MatStepperModule,
	MatToolbarModule,
	MatDividerModule,
	MatTabsModule,
	MatTableModule,
	MatTooltipModule,
	MatListModule,
	MatGridListModule,
	MatButtonToggleModule,
	MatBottomSheetModule,
	MatExpansionModule,
	_MatChipListMixinBase,
	MatMenuModule,
	MatTreeModule,
	MAT_BOTTOM_SHEET_DATA,
	MatBottomSheetRef,
	MAT_DATE_LOCALE,
	MAT_DATE_FORMATS


} from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field'
import { PortletModule } from '../views/partials/content/general/portlet/portlet.module';

// Form controls

import { AppBookingComponent } from './app-booking.component';
import { AddBooking } from './AddBooking/addbooking'
// Navigation
// Layout
// Buttons & indicators
// Popups & modals


import { from } from 'rxjs';
import { MaterialPreviewModule } from '../views/partials/content/general/material-preview/material-preview.module';
import { HotelsComponent } from '../hotels/hotels.component';
import { HotelComponent } from '../hotels/hotel/hotel.component';
import { HotelFilterComponent } from '../hotels/hotel-filter/hotel-filter.component';
// import { UserCartComponent } from '../user-cart/user-cart.component';


const routes: Routes = [
	{
		path: 'addbooking',
		component: AddBooking
	},
	{
		path: '',
		component: AppBookingComponent
	},
	{ path: 'hotels', component: HotelsComponent }
];

@NgModule({
	imports: [
		// material modules
		MatInputModule,
		MatFormFieldModule,
		MatDatepickerModule,
		MatAutocompleteModule,
		MatListModule,
		MatSliderModule,
		MatCardModule,
		MatSelectModule,
		MatButtonModule,
		MatIconModule,
		MatNativeDateModule,
		MaterialPreviewModule,
		MatMenuModule,
		MatTabsModule,
		MatTooltipModule,
		MatSidenavModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatTableModule,
		MatGridListModule,
		MatToolbarModule,
		MatBottomSheetModule,
		MatExpansionModule,
		MatDividerModule,
		MatSortModule,
		MatStepperModule,
		MatChipsModule,
		MatPaginatorModule,
		MatCheckboxModule,
		CommonModule,
		MatRadioModule,
		MatTreeModule,
		MatButtonToggleModule,
		PortletModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		RouterModule.forChild(routes)

	],
	exports: [RouterModule],


	declarations: [
		AppBookingComponent,
		AddBooking,
		HotelsComponent,
		// UserCartComponent,
		HotelComponent,
		HotelFilterComponent
	]
})
export class AppBookingModule { }
