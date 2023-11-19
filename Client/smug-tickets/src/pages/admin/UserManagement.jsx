import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import UserService from '../../services/Users/UsersService';
//import SearchBox from '../../components/SearchBoxTicket';
//import { Alert, MessageSuccess} from '../../utils/Alert';

export const UserManagement = () => {

    const handleCloseServer = () => {
        //Mostar alerta de confirmación
        {/* Alert({
            message: 'Todos los procesos se cerrarán',
            messageConfirmed: 'El servidor se ha cerrado correctamente'
        });*/}
    }

    const handleActive = () => {
        //MessageSuccess('El usuario se ha activado correctamente');
    }

    const handleInactive = () => {
        //MessageSuccess('El usuario se ha desactivado correctamente');
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Llamar a la API al cargar el componente
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await UserService.getAllUsers();

            // Actualizar el estado con los datos de la API
            setUsers(response);
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
        }
    };
    return (
        <>

            {/* <SearchBox />    aqui ocupo un componente que debe subir omar xD*/}
            <div className='flex flex-col items-center'>
                <h1 className='m-5 font-bold text-xl md:text-3xl'>Gestión de Usuarios</h1>

                <div className='m-5'>
                    {/*<SearchBox />*/}
                </div>

                <div className='border-locations-gray border-2 rounded-2xl w-11/12 p-2 h-auto'>
                    <table className='table-fixed w-full'>
                        <thead className='border-b-2 border-b-locations-gray'>
                            <tr className='text-stone-600  text-xs md:text-lg  lg:text-2xl text-center'>
                                <th className='p-4 font-bold'>Usuario</th>
                                <th className='p-4 font-bold'>Email</th>
                                <th className='p-4 font-bold'>Estado</th>
                            </tr>
                        </thead>
                        <tbody className='text-center text-xs md:text-lg'>
                            {users.map((user) => (
                                <tr key={user.id} className='border-b-2 border-b-locations-gray'>
                                    <td className='p-4 text-black font-semibold'>{user.nombre}</td>
                                    <td className='p-4 text-black font-semibold'
                                    style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.email}</td>
                                    <td className='p-4 text-black font-semibold'>{user.estado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default UserManagement;