import Button from '../Button'
import Relogio from './Relogio/relogio'
import style from './cronometro.module.scss'

function Cronometro1(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Button texto=''>
                Começar!
            </Button>
        </div>
    )
}

export default Cronometro1