import {type BaseHTMLAttributes, Children} from "react";

type ListProps = BaseHTMLAttributes<HTMLUListElement> & {
    liProps?: BaseHTMLAttributes<HTMLLIElement> | ((index: number) => BaseHTMLAttributes<HTMLLIElement>);
};

function List({
    children,
    ...props
}: ListProps) {
    return (
        <ul {...props}>
            {Children.toArray(children).map((child, i) => (
                <li key={i} {...(typeof props.liProps === 'function' ? props.liProps(i) : props.liProps)}>
                    {child}
                </li>
            ))}
        </ul>
    );
}

export { List };