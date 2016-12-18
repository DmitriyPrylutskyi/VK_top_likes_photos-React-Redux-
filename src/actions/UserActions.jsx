/**
 * Created by Dmitriy Prilutsky on 16.12.2016.
 */
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_OUT,
  LOGIN_FAIL
} from '../constants/User.jsx'

export function handleLogin(e) {
  const bntpress = e.target.textContent
  console.log(bntpress)
  switch(bntpress) {
    case 'Войти':
      return function (dispatch) {

        dispatch({
          type: LOGIN_REQUEST
        })

        window.VK.Auth.login((r) => {
          if (r.session) {
            let username = r.session.user.first_name;

            dispatch({
              type: LOGIN_SUCCESS,
              payload: username
            })

          } else {
            dispatch({
              type: LOGIN_FAIL,
              error: true,
              payload: new Error('Ошибка авторизации')
            })
          }
        }, 4); // запрос прав на доступ к photo
      }
    case 'Выйти':
      return function (dispatch) {
        window.VK.Auth.logout(() => {
          dispatch({
            type: LOGIN_OUT,
            payload: ''
          })
          window.location.reload()
        }, 4); // запрос прав на доступ к photo
      }
  }
}
