//import './style.scss'
import style from './list.module.scss'
import Item from './Item'

function List(){
    const tarefas = [
        {
            tarefa: "React",
            tempo: "02:00:00"
        },
        {
            tarefa: "Javascript",
            tempo: "01:00:00"
        },
        {
            tarefa: "Typescript",
            tempo: "03:00:00"
        }
    ]

    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </ul>
        </aside>
    )
}

function List2(){
    const tarefas = [
        {
            tarefa: "React",
            tempo: "02:00:00"
        },
        {
            tarefa: "Javascript",
            tempo: "01:00:00"
        },
        {
            tarefa: "Typescript",
            tempo: "03:00:00"
        }
    ]

    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia 2</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} tarefa={item.tarefa} tempo={item.tempo}  />
                ))}
            </ul>
        </aside>
    )
}

export default List2