import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/shadcn-ui/table"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/shadcn-ui/select"
import { Button } from "@/components/shadcn-ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import {useState, useEffect} from "react";

export function CalendarUI() {
    const [date, setDate] = useState<Date>(new Date())
    const [calendarDate, setCalendarDate] = useState<string[][]>([[], [], []])
    const [selectedValue, setSelectedValue] = useState<number[]>([date.getFullYear(), date.getMonth() + 1])
    const [firstDayIndex, setFirstDayIndex] = useState<number>(0);
    const [lastDayIndex, setLastDayIndex] = useState<number>(0);
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    // 윤달 계산
    function isLeapYear(year: number) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // year-month 의 마지막 날짜
    function getDaysInMonth(year: number, month: number) {
        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let result;

        if (month === 2) {
            result = isLeapYear(year) ? 29 : 28;
        } else {
            result = daysInMonth[month - 1];
        }
        return result;
    }

    function getDays(year: number, month: number) {
        const days = [];
        const lastMonth = month === 1 ? 12 : month;

        // 전 달 마지막 날짜
        const lastMonthDay = getDaysInMonth(year, lastMonth);
        // 이번 달 마지막 날짜
        const thisMonthDay = getDaysInMonth(year, month);
        // 이번달 첫번째 요일 인덱스
        const firstDayIndex = new Date(year + "-" + month + "-" + 1).getDay();
        // 이번달 마지막 요일 인덱스
        const lastDayIndex = new Date(year + "-" + month + "-" + thisMonthDay).getDay();
        // 캘린더에 표시될 날짜
        let day = lastMonthDay - firstDayIndex + 1;
        for (let i = 0; i < 35; i++) {
            // 반복횟수가 이번달 첫번째 요일 인덱스와 같다면 전 달 날짜 마지막이니까 초기화
            // 현재 캘린더에 들어가는 날짜가 이번 달 날짜 마지막과 같다면 초기화
            if (i === firstDayIndex || day === thisMonthDay + 1) {
                day = 1;
            }
            days.push(String(day))
            day++
        }
        setFirstDayIndex(firstDayIndex);
        setLastDayIndex(lastDayIndex);
        return days;
    }

    function getCalendarDate() {
        const years = [];
        const months = [];
        for (let i = 1; i <= 12; i++) {
            months.push(`${i}월`);
        }
        for (let i = date.getFullYear() - 25; i <= date.getFullYear() + 25; i++) {
            years.push(`${i}년`);
        }
        setCalendarDate([months, years, getDays(selectedValue[0], selectedValue[1])])
    }

    function handleClickedDatePickButton(prev: boolean) {
        console.log("here " + selectedValue)
        setSelectedValue(
            prev && selectedValue[1] === 1 ? [selectedValue[0] - 1, 12] :
                prev ? [selectedValue[0], selectedValue[1] - 1] :
                    !prev && selectedValue[1] === 12 ? [selectedValue[0] + 1, 1] :
                        [selectedValue[0], selectedValue[1] + 1]
        )

    }

    console.log(selectedValue)

    useEffect(() => {
        getCalendarDate();
    }, selectedValue);

    return (
        <div className="calendar">
            <div className="date-picker">
                <Button
                    disabled={
                        (selectedValue[0] === date.getFullYear() - 25 && selectedValue[1] === 1)
                    }
                    className="date-picker-button"
                    onClick={() => {
                        handleClickedDatePickButton(true);
                    }}
                ><ArrowLeft className="text-gray-400"/></Button>
                <Select defaultValue={String(selectedValue[1]) + "월"}
                        value={String(selectedValue[1]) + "월"}
                        onValueChange={(month) => {
                            setSelectedValue([selectedValue[0], Number(month.slice(0, -1))])
                        }
                        }>
                    <SelectTrigger className="w-30">
                        <SelectValue/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {calendarDate[0].map((month) => (
                                <SelectItem key={Number(month.replace("월", ""))} value={month}>{month}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select defaultValue={String(selectedValue[0]) + "년"}
                        value={String(selectedValue[0]) + "년"}
                        onValueChange={(year) => {
                            setSelectedValue([Number(year.slice(0, -1)), selectedValue[1]])
                        }
                        }>
                    <SelectTrigger className="w-30 ml-2">
                        <SelectValue/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {calendarDate[1].map((year) => (
                                <SelectItem key={Number(year.replace("년", ""))} value={year}>{year}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button
                    disabled={
                        (selectedValue[0] === date.getFullYear() + 25 && selectedValue[1] === 12)
                    }
                    className="date-picker-button"
                    onClick={() => {
                        handleClickedDatePickButton(false);
                    }}
                ><ArrowRight className="text-gray-400"/></Button>
            </div>
            <div className="h-full">
                <Table>
                    <TableHeader>
                        <TableRow>
                            {
                                dayOfWeek.map((day) => (
                                    <TableHead key={day}>{day}</TableHead>
                                ))
                            }
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.from({ length: 5 }).map((_, rowIndex) => (
                            <TableRow key={rowIndex}>
                                {calendarDate[2]
                                    .slice(rowIndex * 7, rowIndex * 7 + 7)
                                    .map((day, colIndex) => {
                                        const isGray =
                                            (rowIndex === 0 && firstDayIndex > colIndex) ||
                                            (rowIndex === 4 && lastDayIndex < colIndex);
                                        const textColor =
                                            colIndex === 0
                                                ? "text-red-500"
                                                : colIndex === 6
                                                    ? "text-blue-500"
                                                    : "";

                                        return (
                                            <TableCell
                                                key={colIndex}
                                                className={`cell ${textColor} ${isGray ? "cell-gray" : ""}`}
                                            >
                                                {/* 날짜 표시 */}
                                                <div className="font-bold">{day}</div>

                                                {/* 일정 5칸 구성 */}
                                                <div className="flex flex-col space-y-1 mt-1">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className="w-full"
                                                        >
                                                            {/* 여기에 일정 텍스트 or 컴포넌트 넣을 수 있음 */}
                                                        </div>
                                                    ))}
                                                </div>
                                            </TableCell>
                                        );
                                    })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}