import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ClistService } from '../core/services/clist.service';
import { Icasel } from '../core/models/common.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseService } from '../units/navbar/servicess/case.service'; // Correct path to CaseService
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-caseform',
  templateUrl: './caseform.component.html',
  styleUrls: ['./caseform.component.css'],

  standalone: true,
  imports: [ ReactiveFormsModule]
})
export class CaseformComponent implements OnInit {
  cases: Icasel[] = [];
  caseForm !: FormGroup;
  CaseId = '';

  constructor(
    private fb: FormBuilder,
    private ClistService: ClistService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private caseService: CaseService // Inject CaseService
  ) {
    this.caseForm = this.fb.group({
      Case_no: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      assign: "NO",
      comp: "NO",
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.CaseId = params['id'];
        this.getCase(this.CaseId);
      },
    });
  }

  OnSubmit() {
    if (this.caseForm.valid) {
      if (this.CaseId !== '') {
        this.ClistService.updateCase(
          this.CaseId,
          this.caseForm.value
        );
      } else {
        this.ClistService.addCase(this.caseForm.value);
        this.caseService.incrementTotalCases(); // Increment total cases when adding a new case
      }
      this.router.navigate(['../maininter']);
    } else {
      this.caseForm.markAllAsTouched();
    }
  }

  getCase(key: string) {
    this.ClistService.getCase(key).snapshotChanges().subscribe({
      next: (data) => {
        let expense = data.payload.toJSON() as Icasel;
        this.caseForm.setValue(expense);
      },
    });
  }
}
