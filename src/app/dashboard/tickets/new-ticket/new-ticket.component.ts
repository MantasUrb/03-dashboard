import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  @Output() add = new EventEmitter<{ title: string; text: string }>();

  ngOnInit() {
    // console.log("ONINIT");
    // console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    // console.log("AFTER VIEW INIT");
    // console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: string) {
    // console.log(title);
    // console.log(ticketText);
    this.add.emit({ title: title, text: ticketText });
    this.form?.nativeElement.reset();
  }
}
