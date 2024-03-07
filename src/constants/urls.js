const baseURL = 'https://rickandmortyapi.com/api'

const episodes = '/episode'
const characters='/character'

const urls ={
    episodes,
    character:{
        byIds:(ids)=>`${characters}/${ids}`
    }
}

export {
    baseURL,
    urls
}