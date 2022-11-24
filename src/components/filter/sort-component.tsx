import React from 'react'
import { SortIconTag, SortText } from './styled'

export interface ISortParam {
  id: string
  title: string
}

interface ISortComponent {
  sortParams: ISortParam[]
  isSort: boolean
  setSortInfo: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>
  setCheckId: React.Dispatch<React.SetStateAction<string>>
  sortInfo: { [key: string]: any }
  sendQuery: (state: { [key: string]: string }) => void
  checkId: string
}

const SortComponent: React.FC<ISortComponent> = ({
  isSort,
  sendQuery,
  setSortInfo,
  sortInfo,
  sortParams,
  checkId,
  setCheckId
}) => {
//   const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, name, value } = target
//     setCheckId(id === checkId ? '' : id)
//     setSortInfo({ ...sortInfo, [name]: value })
//     sendQuery({ ...sortInfo })
//   }
  return (
    <div className='w-100'>
        {isSort &&
        <div className='bg-white py-2' style={{ overflow: 'auto' }}>
            <div className='w-100 fml-grid justify-content-center justify-content-md-between'>
                {sortParams.map((i) => (
                    <div key={i.id} className='d-flex justify-content-start align-items-center px-3'>
                        {/* <TypeCheckbox
                          onChange={onHandleChange}
                          checked={checkId === i.title}
                          id={i.title}
                        /> */}
                        <SortText className='m-0 mx-3'>{i.title}</SortText>
                        <div>
                            <SortIconTag className='fas fa-arrow-up mx-3 p-2 rounded' background='#D2E9D9' color='#286439' />
                            <SortIconTag className='fas fa-arrow-down mx-3 p-2 rounded' background='#D2E9D9' color='#286439' />
                        </div>
                    </div>
                ))}
            </div>
        </div>}
    </div>
  )
}

export default SortComponent
