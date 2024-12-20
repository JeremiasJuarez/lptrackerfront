import React from 'react'

export const EmptyLPTBody = () => {
  return (
    <>
      <div className='emptyBody'>

          <div className='emptyLeft'>
            <div>
                <span>Search your profile</span>
            </div>
            <div>
                <span>Find how much league points have you earn in your latest games</span>
            </div>
            <div>
                <span>See your recent matchs</span>
            </div>
          </div>

          <div className='emptyRight'>
            <img src="src/imgs/LPTdemo.png" alt="lptdemo" />
          </div>

      </div>

      <div className='famousProfiles'>
        <div>
          <p>See some famous streamers profiles</p>
        </div>
        <div className='profiles'>
          <div> 
            <p>Trick2g</p> 
            <img src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Udyr.png" alt="udyrIcon" />
          </div>
          <div>
            <p>KayPea</p>
            <img src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Lux.png" alt="luxIcon" />
          </div>
          <div> 
            <p>Tyler1</p> 
            <img src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Draven.png" alt="dravenIcon" />
          </div>
          <div>
            <p>Annie</p>
            <img src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Akali.png" alt="akaliIcon" />
          </div>
          <div>
            <p>TFBlade</p>
            <img src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Jax.png" alt="jaxIcon" />
          </div>
        </div>
      </div>
    
    </>
  )
}

//*Guardar puuid de famousprofiles en caso de que cambien su nombre de cuenta
//* https://www.op.gg/summoners/euw/Peatri-Pea kaypea
//* https://www.op.gg/summoners/lan/MindCrzy-LAN?hl=es_ES annie
