
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

class Account {
  code: string;

  pass: string;
}

const accountArray: Account[] = [];

export class AccountsService {
  static accountExists(code: string): Observable<boolean> {
    /* TODO Datenbank */
    return Observable.of(false);
  }

  static joinCodeExists(code: string): Observable<boolean> {
    /* TODO Datenbank */
    return Observable.of(false);
  }

  static createAccount(code: string, pass: string): Observable<Account> {
    /* TODO Datenbank */
    const account = { code, pass };
    accountArray.push(account);
    /* END */
    return Observable.of(account);
  }

  static getAllAccounts(): Observable<Account[]> {
    /* TODO Datenbank */
    return Observable.of(accountArray);
  }

  static editAccount(code: string, pass: string): Observable<Account | undefined> {
    /* TODO Datenbank */
    const account = accountArray.find(account => account.code === code);
    if (!account) return Observable.of(undefined);
    account.pass = pass;
    /* END */
    return Observable.of(account);
  }

  static deleteAccount(code: string): Observable<boolean> {
    /* TODO Datenbank */
    const account = accountArray.find(acc => acc.code === code);
    if (!account) return Observable.of(false);
    accountArray.splice(accountArray.indexOf(account), 1);
    return Observable.of(true);
  }
}