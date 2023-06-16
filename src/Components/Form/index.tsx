import React from 'react';
import Button from '../Button'
//import './style.scss'
import style from './form.module.scss'
import { ITarefa } from '../../types/tarefa';
import {v4 as uuidv4} from 'uuid'

class Form extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>}>{
    
    //class é um state full component, por isso o state já faz parte do escopo. ** 'state' é palavra reservada
    state = { tarefa : "", tempo: "00:00:00"}

    AdicionarEstudo(evento : React.FormEvent<HTMLFormElement>){
        //previne formulário de atualizar, desta forma não reiniciando os valores dos inputs
        evento.preventDefault()
        //console.log('add estudo: ', this.state)
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                },
            ])

        this.setState({tarefa : "", tempo: "00:00:00"})
    }

    render(){
        return(
            //Em component class dentro de funções neste exemplo "AdicionarEstudo" 
            //o this não é reconhecido, por isso devemos dar um bind para ser reconhecido dentro da função
            <form className={style.novaTarefa} onSubmit={this.AdicionarEstudo.bind(this)}>
                <div className={style["inputContainer"]} >
                    <label htmlFor="tarefa">
                        Adicione um novo estudo   
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        id="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                        placeholder="O que você quer estudar"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input
                        type="time"
                        //é utilizado apra definir incrementos de uma entrada
                        step="1" 
                        name="tempo"
                        id="tempo"
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button texto=' Estudo' type='submit'>Adicionar</Button>
            </form>
        )
    }
}

export default Form