import React from 'react'
import { ChartContainer } from './style'

interface IChart {
  data?: any
}

const Chart: React.FC<IChart> = () => {
  return (
        <ChartContainer>
          <p className='margin-auto text-center py-4 color-light font-small'>No Data</p>
        </ChartContainer>
  )
}

export default Chart
