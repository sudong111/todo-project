import * as React from "react";
import {
    Tabs,
    TabsList,
} from "@/components/shadcn-ui/tabs";

interface TabProps {
    default_value: string;
    trigger: React.ReactNode;
    content: React.ReactNode;
}

export default function Tab({ default_value, trigger, content }: TabProps) {
    return(
        <Tabs defaultValue={default_value} className="tabs">
            <TabsList className="tab-list">
                {trigger}
            </TabsList>
            {content}
        </Tabs>
    )
}