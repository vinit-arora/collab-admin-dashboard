import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsTopPostsComponent } from './widgets-top-posts.component';

describe('WidgetsTopPostsComponent', () => {
  let component: WidgetsTopPostsComponent;
  let fixture: ComponentFixture<WidgetsTopPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsTopPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetsTopPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
