
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/shadcn-ui/accordion"
import Tab from "@/components/ui/tab";
import {TabsContent, TabsTrigger} from "@/components/shadcn-ui/tabs";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/shadcn-ui/card";
import {Label} from "@/components/shadcn-ui/label";
import {Input} from "@/components/shadcn-ui/input";
import {Textarea} from "@/components/shadcn-ui/textarea";
import TimePicker from "@/components/ui/time-picker";
import {Button} from "@/components/shadcn-ui/button";


export default function Schedule() {
    return(
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue=""
        >
            <AccordionItem value="item-1">
                <Tab
                    default_value={"to-do"}
                    trigger={
                    <>
                        <div>
                            <TabsTrigger value="to-do">To-do</TabsTrigger>
                            <TabsTrigger value="project">Project</TabsTrigger>
                        </div>
                        <AccordionTrigger></AccordionTrigger>
                    </>
                }
                    content={
                    <AccordionContent>
                        <Card className="card">
                            {/* card */}
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
                            {/* project */}
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
                                                placeholder=""
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
                    </AccordionContent>
                }
                />
            </AccordionItem>
        </Accordion>
    )
}