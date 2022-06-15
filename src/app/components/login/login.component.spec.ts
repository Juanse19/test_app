import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { FormGroup, ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe de existir'), () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance
    expect(login).toBeTruthy();
  }



  it('No debe iniciar sesión si el formulario no es válidoo',() => {

    const mockCredentials ={
      email: '0x0x0x0x0x0x0x0',
      password: '1111111111111',
      rememberMe: false
    }

    const emailFom: any = component.loginForm.get('email')
    const passwordFom: any = component.loginForm.get('password')
    const rememberFom: any = component.loginForm.get('rememberMe')

    emailFom.setValue(mockCredentials.email)
    passwordFom.setValue(mockCredentials.password)
    rememberFom.setValue(mockCredentials.rememberMe)

    expect(component.loginForm.invalid).toEqual(true);

  });

  it('Deberia de retornar "valido" el formulario',() => {

    const mockCredentials ={
      email: 'test@test.com',
      password: 'Test22*',
      rememberMe: true
    }

    const emailFom: any = component.loginForm.get('email')
    const passwordFom: any = component.loginForm.get('password')
    const rememberFom: any = component.loginForm.get('rememberMe')

    emailFom.setValue(mockCredentials.email)
    passwordFom.setValue(mockCredentials.password)
    rememberFom.setValue(mockCredentials.rememberMe)

    const btnElement = fixture.debugElement.query(By.css('button'))
    btnElement.nativeElement.click()

    expect(component.loginForm.invalid).toEqual(false);

  });

  it('El boton deberia de tener la palabra "Acceder"',() => {

    const elementRef = fixture.debugElement.query(By.css('button'))
    const getInnerText = elementRef.nativeElement.innerText
    expect(getInnerText).toEqual('Acceder');
  });

  it('El texto deberia de tener la palabra "Prueba técnica"',() => {

    const elementRef = fixture.debugElement.query(By.css('h4'))
    const getInnerText = elementRef.nativeElement.innerText
    expect(getInnerText).toEqual('Prueba técnica');
  });

  it('Deberia de retornar invalido',() => {

    const mockCredentials ={
      email: 'test.test.com',
      password: 'Test2',
      rememberMe: true
    }

    const emailFom: any = component.loginForm.get('email')
    const passwordFom: any = component.loginForm.get('password')
    const rememberFom: any = component.loginForm.get('rememberMe')

    emailFom.setValue(mockCredentials.email)
    passwordFom.setValue(mockCredentials.password)
    rememberFom.setValue(mockCredentials.rememberMe)

    const btnElement = fixture.debugElement.query(By.css('button'))
    btnElement.nativeElement.click()

    expect(component.loginForm.invalid).toEqual(true);

  });

});
