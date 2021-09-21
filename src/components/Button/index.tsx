import { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>


export function Button({children, ...rest}: PropsWithChildren<ButtonProps>) {
    return(
        <S.Button {...rest}>
            {children}
        </S.Button>
    );
}