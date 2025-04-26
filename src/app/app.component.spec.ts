import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new todo item', () => {
    component.currentToDo = 'Test Todo';
    component.addToDo();
    expect(component.todoList.length).toBe(1);
    expect(component.todoList[0].name).toBe('Test Todo');
  });

  it('should remove a todo item', () => {
    component.currentToDo = 'Test Todo';
    component.addToDo();
    const id = component.todoList[0].id;
    component.remove(id);
    expect(component.todoList.length).toBe(0);
  });

 it('should not add an empty todo item', () => {
    component.currentToDo = '';
    component.addToDo();
    expect(component.todoList.length).toBe(0);
  });

  it('should mark a todo item as completed', () => {
    component.currentToDo = 'Test Todo';
    component.addToDo();
    const id = component.todoList[0].id;
    component.markAsCompleted(id);
    expect(component.todoList[0].isComplete).toBe(true);
  });

  it('should render the correct greeting in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('To Do App');
  });

});
