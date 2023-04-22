import React from "react";
import classNames from "classnames";

interface TextInputProps {
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
    inputClassName?: string;
    autoFocus?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
}

export const TextInput: React.FC<TextInputProps> = ({ onChange, placeholder, autoFocus, className, inputClassName, prefix, suffix }) => {
    const [value, setValue] = React.useState<string>("");

    React.useEffect(() => {
        onChange && onChange(value);
    }, [onChange, value]);

    return (
        <div className={classNames("flex appearance-none flex-row items-center gap-2 p-2", className)}>
            {prefix}
            <input type="text" autoFocus={autoFocus} className={classNames("border-none focus:ring-0 bg-transparent p-0 w-full", inputClassName)} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
            {suffix}
        </div>
    );
};
