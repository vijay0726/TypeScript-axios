import hrequest from '../index'
import { Account, LoginInfo } from './types'



export function accountLoginRequest(account: Account) {
    return hrequest.post<LoginInfo>({
        url: '/login',
        data: account
    })
}

export function getUserInfo(id: number) {
    return hrequest.get({
        url: '/user/' + id
    })
}

export function getUserEventList(id: number) {
  return hrequest.get({
    url: '/user/eventlist/' + id,
  });
}