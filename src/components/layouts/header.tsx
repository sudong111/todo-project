import { useDispatch } from 'react-redux'
import { setPage } from '@/ci/pages/slice'
import { Button } from '@/components/shadcn-ui/button'

export default function Header() {
    const dispatch = useDispatch()
    const handleClick = (page: string) => () => dispatch(setPage(page))

    return (
        <div className='header'>
            <Button variant="header" onClick={handleClick('home')}>Home</Button>
            <div>
                <Button variant="header" onClick={handleClick('calendar')}>Calendar</Button>
                <Button variant="header" onClick={handleClick('setting')}>setting</Button>
            </div>
        </div>

    )
}