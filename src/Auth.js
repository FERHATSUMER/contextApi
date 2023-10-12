import { useContext } from 'react';
import AuthContext from './context/auth-context';

export default function Auth() {
  const { isLoggedIn, onLogin } = useContext(AuthContext);

  return (
    <div>
      <h1>GİRİŞ YAPTIN MI ??</h1>
      {
        isLoggedIn ? <h4>OHHHOOO ÇOKTAN</h4> : <h4>YOK HENÜZ DEĞİL</h4>
      }
      <button onClick={onLogin}>GİRİŞ YAP</button>
    </div>
  )
}
