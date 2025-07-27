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

export default function CalendarUI() {
    const [date, setDate] = useState<Date>(new Date())
    const [days, setDays] = useState<string[]>([]);
    const [months, setMonths] = useState<string[]>([]);
    const [years, setYears] = useState<string[]>([])
    const [daysInMonth, setDaysInMonth] = useState<number>();

    function isLeapYear(year: number) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    function getDaysInMonth(month: number, year: number): Promise<number> {
        return new Promise((resolve) => {
            const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            let result;

            if (month === 2) {
                result = isLeapYear(year) ? 29 : 28;
            } else {
                result = daysInMonth[month - 1];
            }

            setDaysInMonth(result);
            resolve(result);
        });
    }

    function createYears() {
        const years = [];
        for(let i = date.getFullYear() - 100 ; i <= date.getFullYear() ; i++) {
            years.push(`${i}년`);
        }
        setYears(years);
    }

    function createMonths() {
        const months = [];
        for(let i = 1 ; i <= 12 ; i++) {
            months.push(`${i}월`);
        }
        setMonths(months);
    }

    function createDays(month : number) {
        const days = [];
        for(let i = 1 ; i <= month ; i++) {
            days.push(`${i}일`)
        }
        setDays(days);
    }



    useEffect(() => {
        (async () => {
            createMonths();
            createYears();
            // const day = await getDaysInMonth(date.getMonth() + 1, date.getFullYear());
            // createDays(day);
        })();
    }, []);

    return (
        <div className="calendar">
            <div className="date-picker">
                <Button className="bg-white mr-2 hover:bg-gray-100"> <ArrowLeft className="text-gray-400"/> </Button>
                <Select defaultValue={date.getMonth() + 1 + "월"}>
                    <SelectTrigger className="w-30">
                        <SelectValue  />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {months.map((month) => (
                                <SelectItem key={Number(month.replace("월", ""))} value={month}>{month}</SelectItem>
                            ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select defaultValue={date.getFullYear() + "년"}>
                    <SelectTrigger className="w-30 ml-2">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {years.map((year) => (
                                <SelectItem key={Number(year.replace("년", ""))} value={year}>{year}</SelectItem>
                            ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button className="bg-white ml-2 hover:bg-gray-100"> <ArrowRight className="text-gray-400"/> </Button>
            </div>
            <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Sun</TableHead>
                        <TableHead>Mon</TableHead>
                        <TableHead>Tue</TableHead>
                        <TableHead>Wed</TableHead>
                        <TableHead>Thu</TableHead>
                        <TableHead>Fri</TableHead>
                        <TableHead>Sat</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>4</TableCell>
                        <TableCell>5</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </div>
        </div>
    )
}