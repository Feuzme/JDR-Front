import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    private readonly baseUrl = 'http://localhost:8080/users';

    getAll = (): Observable<User[]> => {
        return this.http.get<User[]>(this.baseUrl);
    }

    create = (user: User): Observable<User> => {
        return this.http.post<User>(this.baseUrl, user);
    }

    save(user: User): Observable<any> {
        return this.http.post(this.baseUrl, user);
    }


    delete = (user: User): Observable<User> => {
        return this.http.request<User>('delete', `${environment.urlSpring}/users`, {body: user});
    }

    deleteById(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }


    getByid = (id: string): Observable<User> => {
        return this.http.get<User>(`${environment.urlSpring}/users/${id}`);

    }


    update = (user: User): Observable<User> => {
        return this.http.patch<User>(`${environment.urlSpring}/users`, user);
    }


    ajoutAmi = (idAmi: string, myId: string): Observable<User> => {
        return this.http.post<User>(`${this.baseUrl}/ami`, {idAmi, myId});
    }

    findByIdDetail(id: string): Observable<object> {
        const url = `${this.baseUrl}/${id}/detail`;
        console.log(url);
        return this.http.get(url);
    }

    findByIdWithoutPassword(id: string): Observable<User> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<User>(url);
    }

    getCustomersLarge(): Promise<User[]> {
        return this.http.get<any>('assets/customers-large.json')
            .toPromise()
            .then(res => res.data as User[])
            .then(data => {
                return data;
            });
    }

    /*getProducts() {
      return this.http.get<any>('assets/products.json')
      .toPromise()
      .then(res => <User[]>res.data)
      .then(data => { return data; });
    }

    */

    getProducts() {
        return this.http.get<any>('http://localhost:8080/users')
            .toPromise()
            .then(res => <User[]>res.data)
            .then(data => {
                return data;
            });
    }

    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    deleteFriend(my: string, user: User): Observable<User> {
        return this.http.patch<User>(this.baseUrl + '/ami', {
            idAmi: user.id,
            myId: my
        });
    }
}
