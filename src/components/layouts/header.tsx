import { useDispatch } from 'react-redux'
import { setPage } from '../../ci/pages/slice'

export default function Header() {
    const dispatch = useDispatch()

    return (
        <div className='header'>
            <div className='title'>업무관리</div>
            <div>
                <button className='button' onClick={() => dispatch(setPage('work'))}>나의 업무</button>
                <button className='button' onClick={() => dispatch(setPage('home'))}>프로젝트</button>
                <button className='button'>대시보드</button>
            </div>
        </div>

    )
}