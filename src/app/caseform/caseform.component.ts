import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClistService } from '../core/services/clist.service';
import { Icasel } from '../core/models/common.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-caseform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './caseform.component.html',
  styleUrl: './caseform.component.css'
})
export class CaseformComponent {
  [x: string]: any;
  cases: Icasel[]= [];
  caseForm !: FormGroup;
  expenseId = '';

  constructor(
    private fb: FormBuilder,
     private ClistService: ClistService, 
     private router: Router,
     private activatedRoute: ActivatedRoute
     ) {
    this.caseForm = this.fb.group({
      price: new FormControl("",[Validators.required]),
      title: new FormControl("",[Validators.required]),
      description: new FormControl(""),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(params) => {
        this.expenseId = params['id'];
        this.getExpense(this.expenseId);
      },
    });
  }

  

  OnSubmit(){
    if(this.caseForm.valid){
      if(this.expenseId != ''){
        this.ClistService.updateExpense(
          this.expenseId,
          this.caseForm.value
        );
      }
      else{
      this.ClistService.addCase(this.caseForm.value);
      }
      this.router.navigate(['../maininter']);
    }
    else{
      this.caseForm.markAllAsTouched();
    }
  }

  getExpense(key: string){
    this.ClistService.getCase(key).snapshotChanges().subscribe({
      next: (data) => {
        let expense = data.payload.toJSON() as Icasel;
        this.caseForm.setValue(expense);
      },
    });
  }
}
