import { useDispatch } from 'react-redux'
import { setPage } from '../../ci/pages/slice'
import { Button } from '@/components/shadcn-ui/button'

export default function Header() {
    const dispatch = useDispatch()
    const handleClick = (page: string) => () => dispatch(setPage(page))

    return (
        <div className='header'>
            <Button variant="ghost" className="title" onClick={handleClick('home')}>To-Do</Button>
            <div>
                <Button variant="ghost" className="button" onClick={handleClick('home')}>나의 업무</Button>
                <Button variant="ghost" className="button" onClick={handleClick('home')}>프로젝트</Button>
                <Button variant="ghost" className="button" onClick={handleClick('home')}>대시보드</Button>
            </div>
        </div>

    )
}