import React from "react";
import classNames from "classnames";

interface TextAreaInputProps {
    initial?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
    inputClassName?: string;
    autoFocus?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    readOnly?: boolean;
}

export const TextAreaInput: React.FC<TextAreaInputProps> = ({ initial, onChange, readOnly, placeholder, autoFocus, className, inputClassName, prefix, suffix }) => {
    const [value, setValue] = React.useState<string>("");

    React.useEffect(() => {
        setValue(initial || "");
    }, [initial]);

    React.useEffect(() => {
        onChange && onChange(value);
    }, [onChange, value]);

    return (
        <div className={classNames("flex appearance-none flex-row items-center gap-2 p-2", className)}>
            {prefix}
            <textarea autoFocus={autoFocus} className={classNames("border-none focus:ring-0 bg-transparent p-0 w-full", inputClassName)} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} readOnly={readOnly} />
            {suffix}
        </div>
    );
};
