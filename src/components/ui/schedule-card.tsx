import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/shadcn-ui/card"
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/shadcn-ui/tabs";
import { Button } from "@/components/shadcn-ui/button"
import { Input } from '@/components/shadcn-ui/input'
import { Label } from "@/components/shadcn-ui/label"
import TimePicker from "@/components/ui/time-picker";
import { Textarea } from "../shadcn-ui/textarea"

export default function ScheduleCard() {
    return(
        <Tabs defaultValue="to-do" className="tabs">
            <TabsList>
                <TabsTrigger value="to-do">To-do</TabsTrigger>
                <TabsTrigger value="project">Project</TabsTrigger>
            </TabsList>
            <Card className="card">
                <TabsContent value="to-do" className="tab-content">
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
                </TabsContent>
                <TabsContent value="project" className="tab-content">
                    <CardHeader>
                        <CardTitle>프로젝트 저장</CardTitle>
                        <CardDescription>
                            프로젝트를 저장하세요.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="card-form">
                            <div className="card-input">
                                <Label htmlFor="project-title">프로젝트 제목</Label>
                                <Input
                                    id="project-title"
                                    type="text"
                                    placeholder="shadcn을 활용한 영화 소개 웹페이지 구현"
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
                </TabsContent>
            </Card>
        </Tabs>
    )
}