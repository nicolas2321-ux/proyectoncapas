import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import UserService from '../../services/Users/UsersService';

export const UserManagement = () => {
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

    const activateUser = async (userId) => {
        try {
            // Realizar la solicitud POST para activar el usuario
            const response = await fetch(`http://localhost:8080/user/activarUsuario?id=${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Verificar si la solicitud fue exitosa
            if (response.ok) {
                console.log('Usuario activado con éxito');
            } else {
                console.error('Error al activar usuario:', response.statusText);
            }
        } catch (error) {
            console.error('Error al activar usuario:', error);
        }
    };

    const deactivateUser = async (userId) => {
        try {
            // Realizar la solicitud POST para desactivar el usuario
            const response = await fetch(`http://localhost:8080/user/desactivarUsuario?id=${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Verificar si la solicitud fue exitosa
            if (response.ok) {
                console.log('Usuario desactivado con éxito');
            } else {
                console.error('Error al desactivar usuario:', response.statusText);
            }
        } catch (error) {
            console.error('Error al desactivar usuario:', error);
        }
    };

    return (
        <>
            <div className='flex flex-col items-center'>
                <h1 className='m-5 font-bold text-xl md:text-3xl'>Gestión de Usuarios</h1>

                <div className='m-5'></div>

                <div className='border-locations-gray border-2 rounded-2xl w-11/12 p-2 h-auto'>
                    <table className='table-fixed w-full'>
                        <thead className='border-b-2 border-b-locations-gray'>
                            <tr className='text-stone-600 text-xs md:text-lg lg:text-2xl text-center'>
                                <th className='p-4 font-bold'>Usuario</th>
                                <th className='p-4 font-bold'>Email</th>
                                <th className='p-4 font-bold'>Activo</th>
                                <th className='p-4 font-bold'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody className='text-center text-xs md:text-lg'>
                            {users.map((user) => (
                                <tr key={user.id} className='border-b-2 border-b-locations-gray'>
                                    <td className='p-4 text-black font-semibold'>{user.nombre}</td>
                                    <td className='p-4 text-black font-semibold' style={{ maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.email}</td>
                                    <td className='p-4 text-black font-semibold'>{user.estado}</td>
                                    <td className='p-4 flex'>
                                        <button onClick={() => activateUser(user.id)} className='hover:bg-black hover:text-white text-black border-2 font-bold py-2 px-4 rounded'>
                                            Activar Usuario
                                        </button>
                                        <button onClick={() => deactivateUser(user.id)} className='bg-black hover:bg-slate-800 text-white font-bold py-2 px-2 ml-2 rounded'>
                                            Desactivar Usuario
                                        </button>
                                    </td>
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