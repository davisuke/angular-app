import { Comment } from 'app/Comment';

export class User {
	public name: string;
	public password: string;
	public birthdate: string;
	public comments: Comment[];
}
