import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/shadcn-ui/button"
import { Calendar } from "@/components/shadcn-ui/calendar"
import { Input } from "@/components/shadcn-ui/input"
import { Label } from "@/components/shadcn-ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/shadcn-ui/popover"

export default function TimePicker() {

    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)

    return (
        <div className="flex flex-1 gap-4 mt-4">
            <div className="flex flex-col gap-3 basis-[70%]">
                <Label htmlFor="date-picker" className="w-full px-1">
                    Date
                </Label>
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            id="date-picker"
                            className="w-full justify-between font-normal"
                        >
                            {date ? date.toLocaleDateString() : "Select date"}
                            <ChevronDownIcon />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            captionLayout="dropdown"
                            onSelect={(date) => {
                                setDate(date)
                                setOpen(false)
                            }}
                        />
                    </PopoverContent>
                </Popover>
            </div>
            <div className="flex flex-col gap-3 basis-[30%]">
                <Label htmlFor="time-picker" className="px-1">
                    Time
                </Label>
                <Input
                    type="time"
                    id="time-picker"
                    step="60"
                    defaultValue="10:30"
                    className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
            </div>
        </div>
    )


}
