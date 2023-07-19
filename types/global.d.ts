// types /global.d.ts

export { };

declare global {
    interface WrapperProps {
        id?: string;
        baseProps?: string;
        secondProps?: string;
        row?: boolean;
        children?: React.ReactNode;
        center?: boolean;
    }

    interface SectionProps {
        id?: string;
        background?: string;
        children?: React.ReactNode;
    }
}