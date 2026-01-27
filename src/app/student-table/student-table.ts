import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './student-table.html',  
  styleUrl: './student-table.css',
})
export class StudentTable {
  showNewForm = false;
  students = [
    { rollNo: 1, name: "Akash", status: "absent" },
    { rollNo: 2, name: "Manish", status: "present" },
    { rollNo: 3, name: "Vashu", status: "absent" },
    { rollNo: 4, name: "Abhay", status: "absent" },
    { rollNo: 5, name: "Tanishq", status: "present" },
  ]

  newStudentRollNo = 0;
  newStudentName = ""
  newStudentStatus = ""


  showHideNewForm() {
    this.showNewForm = !this.showNewForm;
  }

  createNewStudent() {
    this.students.push(
      {
        rollNo: this.newStudentRollNo,
        name: this.newStudentName,
        status: this.newStudentStatus
      }
    )

    this.showNewForm = false;
  }
  
  deleteStudent(rollNo: number) {
    this.students = this.students.filter(student => student.rollNo !== rollNo);
  }
  editStudent(student: any, index: number) {
    const editedName = prompt("Edit Name:", student.name);
    const editedStatus = prompt("Edit Status:", student.status);
    this.students[index] = { ...student, name: editedName, status: editedStatus };
  }
  }