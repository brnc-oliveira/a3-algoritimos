import { Fragment, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export default function PageContainer({ children }: Props) {
    return <Fragment>{children}</Fragment>;
}
