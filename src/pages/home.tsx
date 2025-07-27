import Schedule from "@/components/ui/schedule";
import {Label} from "@/components/shadcn-ui/label";
import {Accordion, AccordionItem, AccordionTrigger} from "@/components/shadcn-ui/accordion";
import { AccordionContent } from "@radix-ui/react-accordion";
import {scheduleDto} from "@/dto/schedule.dto";

interface scheduleProps {
    dataParams: scheduleDto;
}

export default function Home({dataParams} : scheduleProps) {
    console.log("dateParams : " + dataParams);
    return (
        <div className='home'>
            <div className='days'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="mr-2">
                            <Label className='label'>everyday</Label>
                        </AccordionTrigger>
                        <AccordionContent>
                            <Schedule
                                title="운동가기"
                                detail="장소 : 피트니스 GYM"
                                time="19:00 - 20:00"
                            />
                            <Schedule
                                title="자기 전 생각 정리 및 산책"
                                detail="장소 : 집 근처 공원"
                                time="23:00 - 23:30"
                            />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className='days'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="mr-2">
                            <Label className='label'>weekdays</Label>
                        </AccordionTrigger>
                        <AccordionContent>
                            <Schedule
                                title="출근!"
                                detail="장소 : 회사"
                                time="08:00 - 18:00"
                            />
                            <Schedule
                                title="코딩 테스트 연습"
                                detail="프로그래머스 LEVEL 2"
                                time="20:00 - 22:00"
                            />
                            <Schedule
                                title="개인 프로젝트 구현"
                                detail="프로젝트 명 : Todo-project"
                                time="22:00 - 23:00"
                            />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className='days'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="mr-2">
                            <Label className='label'>weekend</Label>
                        </AccordionTrigger>
                        <AccordionContent>
                            <Schedule
                                title="팀 프로젝트 구현"
                                detail="프로젝트 명 : i-am-ok"
                                time="12:00 - 18:00"
                            />
                            <Schedule
                                title="팀 프로젝트 미팅"
                                detail="discord 를 통한 미팅"
                                time="20:00 - 21:00"
                            />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className='days'>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="mr-2">
                            <Label className='label'>special</Label>
                        </AccordionTrigger>
                        <AccordionContent>
                            <Schedule
                                title="대학 친구들 약속"
                                detail="장소 : 강남역 맛집포차"
                                time="2025-08-16 / 18:30"
                            />
                            <Schedule
                                title="React 특강 강의"
                                detail="장소 : 강의 사이트"
                                time="2025-08-17 / 12:00"
                            />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    );
}