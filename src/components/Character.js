const Character = ({character}) => {
    const {name, status, species, gender, image} = character;
    return (

        <main>
            <div>
                <img src={image} alt={name}/>
            </div>
            <section>
                <h2>{name}</h2>
                <p>{status}</p>
                <p>{species}</p>
                <p>{gender}</p>
            </section>
        </main>
    );
};

export {Character};