import React, {useEffect, useState} from 'react';
import Popup, {PopupProps} from './components/Popup';
import Card from './components/Card';
import UserList from './components/UserList';
import {ITodo, IUser} from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import EventExample from './components/EventExample';

function App() {
    const [showModal, setShowModal] = useState(false);

    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchUsers();
        fetchTodos();
    }, []);

    const handleShowModal = () =>{
        setShowModal(true)
    }

    const handleCloseModal = (e:any) => {
            if(e.target.id === 'container')
                setShowModal(false)
    }

    const fetchUsers = async () => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (e) {
            alert(e);
        }
    };

    const fetchTodos = async () => {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data);
        } catch (e) {
            alert(e);
        }
    };



    return (
        <div className="h-screen bg-amber-50 bg-opacity-90">
            {/*<EventExample/>*/}
            <div className="max-w-3xl mx-auto">
                <div className="text-center py-3">
                    <button onClick={handleShowModal}
                            className=" bg-red-400 text-white font-bold px-4 py-2 rounded select-none shadow-lg">Open
                    </button>
                </div>

            </div>

         <Popup showModal={showModal} handleCloseModal={handleCloseModal} />




        </div>
    );
}

export default App;
