import { Injectable } from '@angular/core';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    new User(1, 'Surya Mishra', 'sm', '12345'),
    new User(2, 'Sameer Sarkate', 'ss', '12345'),
    new User(3, 'Divya Chaudhari', 'dc', '12345'),
    new User(4, 'Prince Yadav', 'py', '12345')
]
}
