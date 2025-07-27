import { Button } from "@/components/shadcn-ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/shadcn-ui/dialog"
import { Input } from "@/components/shadcn-ui/input"
import { Label } from "@/components/shadcn-ui/label"
import {Textarea} from "@/components/shadcn-ui/textarea"
import { Badge } from "@/components/shadcn-ui/badge"
import { useState } from "react"
import TimePicker from "@/components/ui/time-picker";



export default function DialogUI() {
    const [selectedBadge, setSelectedBadge] = useState<string | "outline">();
    const [disabledDatePicker, setDisableDatePicker] = useState<boolean>(false);

    const handleClickedBadge = (id: string) => {
        setSelectedBadge(prev => (prev === id ? "outline" : id));
        if(id === "special") {
            setDisableDatePicker(false);
        }
        else {
            setDisableDatePicker(true);
        }
    };

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="create" className="todo-button">일정 추가</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>일정 생성</DialogTitle>
                        <DialogDescription>
                            일정과 날짜를 저장하세요.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="to-do">일정 제목</Label>
                            <Input
                                id="to-do"
                                type="text"
                                placeholder="코딩 스터디 그룹 가기"
                                required
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="detail">세부사항</Label>
                            <Textarea
                                id="detail"
                                placeholder="장소 : 역삼역 2번 출구 카페"
                                className="resize-none"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="check">종류</Label>
                            <div className="flex">
                                {["everyday", "weekdays", "weekend", "special"].map((id) => (
                                    <Badge
                                        key={id}
                                        variant={id === selectedBadge ? id : "outline"}
                                        className="badge"
                                        onClick={() => handleClickedBadge(id)}
                                    >
                                        {id}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div className="grid gap-3">
                            <TimePicker
                                disabled = {disabledDatePicker}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">취소</Button>
                        </DialogClose>
                        <Button type="submit">저장하기</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
