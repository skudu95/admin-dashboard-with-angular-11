import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmationDialog(msg) {
    return this.dialog.open(ConfirmationDialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: false,
      position: { top: '10px' },
      data: {
        message: msg
      }
    });
  }
}
