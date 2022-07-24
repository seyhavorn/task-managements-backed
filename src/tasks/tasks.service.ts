import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './dto/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  //
  // getTaskWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((tasks) => tasks.status === status);
  //   }
  //
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  //   return tasks;
  // }
  //
  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Task with ID "${ id } " not found`)
    }
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto):
    Promise<Task> {
    const { title, description } = createTaskDto;

    const task = await this.taskRepository.create({
      title,
      description,
      status: TaskStatus.OPEN,
    })
    await this.taskRepository.save(task);
    return task;
  }

  // async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
  //   const { title, description } = createTaskDto;
  //
  //   const task = this.taskRepository.create()
  // }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  //
  // deleteTask(id: string): void {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }
  //
  // updateTaskStatus(id: string, status: TaskStatus) {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
}
