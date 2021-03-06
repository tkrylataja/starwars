import { Component, Inject } from "@angular/core";
import {
    MatSnackBarRef,
    MAT_SNACK_BAR_DATA
} from "@angular/material/snack-bar";

@Component({
    selector: "sw-alert",
    templateUrl: "./alert.component.html"
})
export class AlertComponent {
    message: string = "";

    constructor(
        public snackBarRef: MatSnackBarRef<AlertComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: number
    ) {
        switch (this.data) {
            case 0:
                this.message = "server is not available!";
                break;
            case 404:
                this.message = "Data is not available";
                break;
            default:
                this.message = "something going wrong";
        }
    }

    close() {
        this.snackBarRef.dismiss();
    }
}
