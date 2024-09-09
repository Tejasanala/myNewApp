import { IExcercise } from './src/app/app.component';
import { challenges } from './src/app/app.component';
export type Newout = Omit<IExcercise, 'id'>;
export type chalout = Omit<challenges, 'id'>;
