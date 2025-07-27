import {Card, CardContent, CardHeader, CardTitle} from "@/components/shadcn-ui/card";
import {Label} from "@/components/shadcn-ui/label";

interface scheduleProps {
    title : string;
    detail : string;
    time : string;
    color : string;
}

export default function Schedule({title, detail, time, color} : scheduleProps) {
    return(
        <Card className={"card " + color}>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <Label>{detail}</Label> <br />
                <Label>{time}</Label>
            </CardContent>
        </Card>
    )
}