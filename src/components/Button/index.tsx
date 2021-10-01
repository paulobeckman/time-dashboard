import { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import * as S from './styles';

type ButtonProps =
    ButtonHTMLAttributes<HTMLButtonElement>
    & AnchorHTMLAttributes<HTMLAnchorElement>
    & { valueSelected: boolean }


export function Button({children, valueSelected, ...rest}: PropsWithChildren<ButtonProps>) {
    return(
        <S.Button {...rest} className={`${valueSelected && 'active'}`}>
            {children}
        </S.Button>
    );
}