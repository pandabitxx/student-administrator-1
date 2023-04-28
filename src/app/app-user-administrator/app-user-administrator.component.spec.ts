import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserAdministratorComponent } from './app-user-administrator.component';

describe('AppUserAdministratorComponent', () => {
  let component: AppUserAdministratorComponent;
  let fixture: ComponentFixture<AppUserAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserAdministratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppUserAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
