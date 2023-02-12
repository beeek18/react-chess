import React from 'react'

import { Colors } from '../models/Colors'
import { Player } from '../models/Player'

interface TimerProps {
  currentPlayer: Player | null
  restart: () => void
}

const Timer: React.FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = React.useState(600)
  const [whiteTime, setWhiteTime] = React.useState(600)
  const timer = React.useRef<null | ReturnType<typeof setInterval>>(null)

  React.useEffect(() => {
    startTimer()
  }, [currentPlayer])

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current)
    }

    const callback = currentPlayer?.color === Colors.WHITE
      ? decrementWhiteTimer : decrementBlackTimer

    timer.current = setInterval(callback, 1000)
  }

  const decrementBlackTimer = () => {
    setBlackTime(prev => prev - 1)
  }

  const decrementWhiteTimer = () => {
    setWhiteTime(prev => prev - 1)
  }

  const handleRestart = () => {
    setWhiteTime(600)
    setBlackTime(600)
    restart()
  }

  return (
    <div className='timerBlock'>
      <h2 className='timeof'>Black - {(blackTime / 60).toFixed(0)} min</h2>
      <h2 className='timeof'>White - {(whiteTime / 60).toFixed(0)} min</h2>
      <div>
        <button className='buttonRestart' onClick={handleRestart}>
          <svg className='logoRestart' fill="#666463" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="-300.66 -300.66 1094.20 1094.20" stroke="#666463"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="4.92883"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M122.941,374.241c-20.1-18.1-34.6-39.8-44.1-63.1c-25.2-61.8-13.4-135.3,35.8-186l45.4,45.4c2.5,2.5,7,0.7,7.6-3 l24.8-162.3c0.4-2.7-1.9-5-4.6-4.6l-162.4,24.8c-3.7,0.6-5.5,5.1-3,7.6l45.5,45.5c-75.1,76.8-87.9,192-38.6,282 c14.8,27.1,35.3,51.9,61.4,72.7c44.4,35.3,99,52.2,153.2,51.1l10.2-66.7C207.441,421.641,159.441,407.241,122.941,374.241z"></path> <path d="M424.941,414.341c75.1-76.8,87.9-192,38.6-282c-14.8-27.1-35.3-51.9-61.4-72.7c-44.4-35.3-99-52.2-153.2-51.1l-10.2,66.7 c46.6-4,94.7,10.4,131.2,43.4c20.1,18.1,34.6,39.8,44.1,63.1c25.2,61.8,13.4,135.3-35.8,186l-45.4-45.4c-2.5-2.5-7-0.7-7.6,3 l-24.8,162.3c-0.4,2.7,1.9,5,4.6,4.6l162.4-24.8c3.7-0.6,5.4-5.1,3-7.6L424.941,414.341z"></path> </g> </g> </g>
          </svg>
          Restart
        </button>
      </div>
    </div>

  )
}

export default Timer