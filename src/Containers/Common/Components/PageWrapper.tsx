import { ReactNode } from "react";
import { HeadingElement, PageWrapperElement } from "../Assets/styles";

interface IPageWrapperProps {
    children: ReactNode;
    headingText?: string;
}

interface IHeadingProps {
    text: string;
}

export const PageWrapper = (props: IPageWrapperProps) => {
    return (
        <PageWrapperElement>
            {props.headingText && (<Heading text={props.headingText} />)}
            {props.children}
        </PageWrapperElement>
    );
};

const Heading = ({ text }: IHeadingProps) => {
    return <HeadingElement>{text}</HeadingElement>;
};;;