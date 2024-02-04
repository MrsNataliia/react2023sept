const Simpson = ({name, surname, age, photo, info}) => {
    return (
        <div>
            <h1>{name} {surname}</h1>
            <h3>Возраст: {age} лет</h3>
            <img src={photo} alt={name}/>
            <p>{info}</p>
        </div>
    );
};

export {Simpson};