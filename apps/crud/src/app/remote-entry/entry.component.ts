import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';

@Component({
  standalone: true,
  imports: [CommonModule, ListComponent],
  selector: 'pretest-crud-entry',
  template: `<pretest-list></pretest-list>`,
})
export class RemoteEntryComponent {}
