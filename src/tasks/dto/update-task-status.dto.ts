import { TaskStatus } from '../task-status.enum';
import { IsEnum } from 'class-validator';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus, { message: `Status must be DONE, IN_PROGRESS, OPEN` })
  status: TaskStatus;
}
