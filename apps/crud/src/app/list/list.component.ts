import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTPService } from '@pretest/http';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'pretest-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public list_item: any;
  public is_form:boolean = false;
  public item_form: FormGroup;
  private type_submit: string = '';

  constructor(private http_service:HTTPService, private formBuilder: FormBuilder) {
    this.item_form = this.formBuilder.group({
      id: new FormControl(''),
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl(''),
    });
  }

  ngOnInit() {
    this.http_service.get('/posts')
    .subscribe({
      next: (response) => {
        this.list_item = response;
        console.log(this.list_item)
      },
      error: (error) => {

      }
    })
  }

  onSubmit() {
    if(this.type_submit == "update") {
      this.http_service.put('/posts/'+this.item_form.value.id, this.item_form.value)
      .subscribe({
        next: (response) => {
          console.log(response)
          this.list_item[response.id - 1] = this.item_form.value
          this.is_form = false;
        },
        error: (error) => {
  
        }
      })
    } else if(this.type_submit == "create") {
      this.http_service.post('/posts', this.item_form.value)
      .subscribe({
        next: (response) => {
          console.log(response)
          this.list_item.push(this.item_form.value)
          this.is_form = false;
        },
        error: (error) => {
  
        }
      })
    }
  }

  create() {
    this.type_submit = "create";
    this.is_form = true;
    this.item_form.reset();
  }

  update(index:number) {
    this.type_submit = "update";
    this.is_form = true;

    this.item_form.patchValue({
      id: this.list_item[index].id,
      title : this.list_item[index].title,
      body : this.list_item[index].body,
      userId : this.list_item[index].userId
    })
  }

  delete(index:number) {
    this.http_service.delete('/posts/'+(index + 1))
    .subscribe({
      next: (response) => {
        console.log(response)
        this.list_item.splice(index, 1);
      },
      error: (error) => {

      }
    })
  }
}
