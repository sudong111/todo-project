import { useDispatch } from 'react-redux'
import { setPage } from '@/ci/pages/slice'
import { Button } from '@/components/shadcn-ui/button'

export default function Header() {
    const dispatch = useDispatch()
    const handleClick = (page: string) => () => dispatch(setPage(page))

    return (
        <div className='header'>
            <Button variant="ghost" className="title" onClick={handleClick('home')}>Home</Button>
            <div>
                <Button variant="ghost" className="button" onClick={handleClick('calendar')}>Calendar</Button>
                <Button variant="ghost" className="button" onClick={handleClick('dashboard')}>Dashboard</Button>
                <Button variant="ghost" className="button" onClick={handleClick('setting')}>setting</Button>
            </div>
        </div>

    )
}