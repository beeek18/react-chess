import React from 'react'
import { Figure } from '../models/figures/Figure';

interface LostFiguresProps {
  title: string;
  figures: Figure[]
}

const LostFigures: React.FC<LostFiguresProps> = ({ title, figures }) => {
  return (
    <div className="lost">
      <h3 className='lostText'>{title}</h3>
      {figures.map(figure =>
        <div className='lostTextFigure' key={figure.id}>
          {figure.name} {figure.logo && <img width={18} height={18} src={figure.logo} />}
        </div>
      )}
    </div>
  )
}

export default LostFigures