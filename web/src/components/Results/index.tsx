import React from 'react'

import heart from '../../assets/images/icon/heart.svg'

import './style.css'

function Results() {
    return(
        <article className="tweet-item">
            <header>
                <img src="https://scontent.fcgh27-1.fna.fbcdn.net/v/t1.0-9/s960x960/45865675_1941355725940635_7343525831341244416_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_eui2=AeHyLg85iWTyMmzyQ1VZAj4rt6lPAi5cPfa3qU8CLlw99mJmPUi4QEk2j9EZEvzfxQWRhcO29uDzwlqVqXvraPBf&_nc_ohc=LRHsCeaJigwAX9O3yzt&_nc_ht=scontent.fcgh27-1.fna&_nc_tp=7&oh=0512824895d223f6ab7620338719aca9&oe=5F61AA19" alt="Carla"/>
                <div>
                    <strong>Carla Sousa</strong>
                    <span>14 de Agosto 2020</span>
                </div>
            </header>
            <p>
                Este é um Tweet.
            </p>
            <footer>  
                <button type='button'>
                  <img src={heart} alt="Adicionar a Coleção"/> Adicione a sua Coleção
                </button>
            </footer>
        </article>
    );
}

export default Results;
