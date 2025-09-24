import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

@Component({
  selector: 'app-contact',
  standalone: true, // ✅ Explicitly mark as standalone (good practice)
  imports: [
    CommonModule,
    FormsModule, // ✅ Add FormsModule here
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.submitSuccess = true;
      this.isSubmitting = false;

      setTimeout(() => {
        this.formData = { name: '', email: '', message: '' };
        this.submitSuccess = false;
      }, 3000);
    }, 1000);
  }
}
