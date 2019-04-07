import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLoading: boolean = false; // loading动画效果
  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm({ value, valid }, e: Event): void {
    e.preventDefault();
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (valid) {
      console.log(value);
      this.isLoading = true;
      this.msg.loading('登录中，请稍后...');
      // 模拟登录接口
      setTimeout(() => {
        this.isLoading = false;
        this.msg.success('登录成功');
      }, 2000);
    }

  }
}
