// import { EntityRepository, Repository } from 'typeorm';
// import { Task } from './dto/task.entity';
// import { CreateTaskDto } from './dto/create-task.dto';
// import { TaskStatus } from './task-status.enum';
//
// @EntityRepository(Task)
// export class TasksRepository extends Repository<Task> {
//   async createTask(createTaskDto: CreateTaskDto):
//     Promise<Task> {
//     const { title, description } = createTaskDto;
//
//     const task = await this.create({
//       title,
//       description,
//       status: TaskStatus.OPEN,
//     })
//     await this.taskRepository.save(task);
//     return task;
//   }
// }