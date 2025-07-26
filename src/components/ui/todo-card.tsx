import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn-ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/shadcn-ui/accordion"
import { Button } from "@/components/shadcn-ui/button"
import { Input } from '@/components/shadcn-ui/input'
import { Label } from "@/components/shadcn-ui/label"
import TimePicker from "@/components/ui/time-picker";

export default function TodoCard() {

    return(
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
        >
            <AccordionItem value="item-1">
                <Card className="w-full max-w-sm">

                    <CardHeader>
                        <div className="flex justify-between pb-2">
                        <CardTitle>To-do 저장</CardTitle>
                        <AccordionTrigger></AccordionTrigger>
                        </div>
                        <CardDescription>
                            To-do 와 일정을 저장하세요
                        </CardDescription>
                    </CardHeader>
                    <AccordionContent>
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
                    </AccordionContent>
                </Card>
            </AccordionItem>
        </Accordion>
    )
}