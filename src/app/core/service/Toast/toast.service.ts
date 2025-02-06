import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}
  showToast(severity: string, summary: string, detail: string) {
    console.log(severity, summary, detail);
    this.messageService.add({
      severity,
      summary,
      detail,
    });
  }
}
