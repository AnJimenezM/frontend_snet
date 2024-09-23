import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { PublicLayout } from '../components/layouts/public/PublicLayout'
import { Login } from '../components/user/Login'
import { Register } from '../components/user/Register'
import {PrivateLayout} from '../components/layouts/private/PrivateLayout'
import { Feed } from '../components/publication/Feed'
import { Error404 } from '../components/layouts/Error404'
import { AuthProvider } from '../context/AuthProvider'
import { Following } from '../components/follow/Following'
import { Followers } from '../components/follow/Followers'
import { People } from '../components/user/People'
import { Config } from '../components/user/Config'
import { Logout } from '../components/user/Logout'
import { Profile } from '../components/user/Profile'
import {MyPublications} from '../components/publication/MyPublications'
export const Routing = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
        {/*cargar los componentes de la ruta publica*/}
        <Route path='/' element={<PublicLayout/>}>
        <Route index element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registro' element={<Register/>}/>
        </Route>


        {/*cargar los componentes de la ruta privada*/}
        <Route path='/rsocial' element={<PrivateLayout/>}>
        <Route index element={<Feed/>}/>
        <Route path='feed' element={<Feed/>}/>
        <Route path='siguiendo/:userId' element={<Following/>}/>
        <Route path='gente' element={<People/>}/>
        <Route path='ajustes' element={<Config/>}/>
        <Route path='logout' element={<Logout/>} />
        <Route path='siguiendo/:userId' element={<Following/>}/>
        <Route path='seguidores/:userId' element={<Followers/>}/>
        <Route path='perfil/:userId' element={<Profile/>}/>
        <Route path='mis-pubicaciones' element={<MyPublications/>}/>
        </Route>
        {/* Configurar la ruta para la página de error 404 */}
        <Route path="*" element={<Error404/>} />

    </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}
