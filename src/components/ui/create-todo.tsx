import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/shadcn-ui/card";
import {Label} from "@/components/shadcn-ui/label";
import {Input} from "@/components/shadcn-ui/input";
import {Textarea} from "@/components/shadcn-ui/textarea";
import TimePicker from "@/components/ui/time-picker";
import {Button} from "@/components/shadcn-ui/button";

export default function CreateTodo() {
    return (
        <Card className="card">
            <CardHeader>
                <CardTitle>To-do 저장</CardTitle>
                <CardDescription>
                    To-do 와 날짜를 저장하세요.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="card-form">
                    <div className="card-input">
                        <Label htmlFor="to-do">To-do</Label>
                        <Input
                            id="to-do"
                            type="text"
                            placeholder="코딩 스터디 그룹 가기"
                            required
                        />
                    </div>
                    <div className="card-input">
                        <Label htmlFor="detail">세부사항</Label>
                        <Textarea
                            id="detail"
                            placeholder="장소 : 역삼역 2번 출구 카페"
                            className="resize-none"
                        />
                    </div>
                    <div className="card-input">
                        <TimePicker />
                    </div>
                </form>
            </CardContent>
            <CardFooter className="card-footer">
                <Button type="submit" className="w-full">
                    저장하기
                </Button>
            </CardFooter>
        </Card>
    )
}