import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatCardModule, MatInputModule, MatButtonModule, MatTableModule, MatSnackBarModule,
    MatProgressSpinnerModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatSnackBarModule,
        MatProgressSpinnerModule
    ]
})
export class MaterialComponents {}
