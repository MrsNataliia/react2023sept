import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../services/CarService";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {reset, register, handleSubmit, formState: {isValid, errors}, setValue} = useForm({mode: "all"});

    useEffect(() => {
        if (carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue]);

    const save = async (car) => {
        await carService.create(car)
        setTrigger(prev=>!prev)
        reset()
    }

    const update = async (car) =>{
        await carService.updateById(carForUpdate.id, car)
        setTrigger (prev=>!prev)
        setCarForUpdate(null)
        reset()
    }

    return (

        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type='text' placeholder={'brand'} {...register('brand', {
                pattern: {
                    value: /^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
                    message: 'incorrect entry'
                }
            })}/>
            <input type='text' placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                min: {value: 0, message: 'min 0'},
                max: {value: 1000000, message: 'max 1000000'}
            })}/>
            <input type='text' placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                min: {value: 1990, message: 'min 1990'},
                max: {value: 2024, message: 'max 2024'}
            })}/>
            <button disabled={!isValid}>{carForUpdate ? 'update' : 'save'}</button>

            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price&&<div>{errors.price.message}</div>}
            {errors.year&&<div>{errors.year.message}</div>}

        </form>

    );
};

export {CarForm};