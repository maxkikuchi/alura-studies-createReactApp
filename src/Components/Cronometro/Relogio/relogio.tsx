import style from './relogio.module.scss'
import React from 'react'

function Relogio1(){
    return(
        <React.Fragment>
            <span>00</span>
            <span>:</span>
            <span>00</span>
            <span>:</span>
            <span>00</span>
        </React.Fragment>
    )
}

function Relogio2(){
    return(
        <>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </>
    )
}

export default Relogio2