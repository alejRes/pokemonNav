import React, {useContext, useState} from 'react'
import { pokeContext } from '../../context/pokeContext'
import Card from '../../components/Card/Card'
const List =()=> {
    const[visible, setVisible] = useState(false)
    const{List} = useContext(pokeContext)

    const paintList = () =>{
        if(List.lenght !== 0){
            List.map((pokemon)=><Card key={pokemon.id} data={pokemon}/>)
        }
    }
    return (
        <div>
            <h1>Lista de pokemon buscados</h1>
            {visible?paintList():<p>Tu lista esta vacia busca un pokemon</p> }
        </div>
    )
}
export default List