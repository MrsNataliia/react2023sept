import React from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../services/userService";

const UserForm = ({setUsers}) => {
    const {reset,register, handleSubmit} =useForm();

    const save = (item)=>{
        userService.create(item).then(({data}) => setUsers (prev=>[...prev, data]));
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'username'} {...register('username')}/>
            <input type='text' placeholder={'email'} {...register('email')}/>
            <button>create</button>
        </form>
    );
};

export {UserForm};