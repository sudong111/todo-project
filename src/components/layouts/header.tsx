import { useDispatch } from 'react-redux'
import { setPage } from '../../ci/pages/slice'

export default function Header() {
    const dispatch = useDispatch()
    const handleClick = (page: string) => () => dispatch(setPage(page))

    return (
        <div className='header'>
            <button className='title' onClick={handleClick('home')}>업무관리</button>
            <div>
                <button className='button' onClick={handleClick('work')}>나의 업무</button>
                <button className='button' onClick={handleClick('projects')}>프로젝트</button>
                <button className='button' onClick={handleClick('dashboard')}>대시보드</button>
            </div>
        </div>

    )
}