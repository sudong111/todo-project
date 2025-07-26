import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn-ui/card"
import { Button } from "@/components/shadcn-ui/button"
import { Input } from '@/components/shadcn-ui/input'
import { Label } from "@/components/shadcn-ui/label"
import TimePicker from "@/components/ui/time-picker";

export default function TodoCard() {

    return(
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>To-do 입력</CardTitle>
                <CardDescription>
                    해야할 일과 약속을 날짜와 함께 기록해보세요.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="to-do">할 일</Label>
                            <Input
                                id="to-do"
                                type="text"
                                placeholder="코딩 스터디 그룹 가기"
                                required
                            />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            < TimePicker/>
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                    저장하기
                </Button>
            </CardFooter>
        </Card>
    )
}