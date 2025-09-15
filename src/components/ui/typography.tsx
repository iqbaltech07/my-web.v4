import * as React from "react"
import { cn } from "~/lib/utils"

type TypographyVariant =
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "p"
    | "blockquote"
    | "inlineCode"
    | "lead"
    | "large"
    | "small"
    | "muted"

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant: TypographyVariant
}

export function Typography({ variant, className, ...props }: TypographyProps) {
    const baseStyles: Record<TypographyVariant, string> = {
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
        h4: "scroll-m-20 text-xl font-semibold tracking-tight",
        p: "leading-7 [&:not(:first-child)]:mt-4",
        blockquote: "mt-6 border-l-2 pl-6 italic",
        inlineCode:
            "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        lead: "text-xl text-muted-foreground",
        large: "text-lg font-semibold",
        small: "text-sm font-medium leading-none",
        muted: "text-sm text-muted-foreground",
    }

    const ComponentMap: Record<TypographyVariant, any> = {
        h1: "h1",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        p: "p",
        blockquote: "blockquote",
        inlineCode: "code",
        lead: "p",
        large: "div",
        small: "small",
        muted: "p",
    }

    const Component = ComponentMap[variant]

    return (
        <Component className={cn(baseStyles[variant], className)} {...props} />
    )
}
