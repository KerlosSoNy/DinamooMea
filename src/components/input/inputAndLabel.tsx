
type InputAndLabelProps = {
    label?: string;
    error?: string;
    placeholder?: string;
    type?: React.ComponentProps<"input">["type"];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<"input">;

export default function InputAndLabel({
    label,
    error,
    placeholder,
    required,
    type,
    onChange,
    ...props
}: InputAndLabelProps) {
    return (
        <div
            className={`flex flex-col my-2 relative font-semibold text-[#0E4E5D] dark:text-white w-full `}
        >
            <div className="flex flex-row text-[#0E4E5D]">
                <label
                    id={label}
                    htmlFor={label}
                    className={`mb-[6px] text-[#0E4E5D] font-medium text-base flex flex-row items-center dark:text-shadow_blue `}
                >
                    {label && <span className="ms-2">{label}</span>}
                    <div className="ms-1"> : </div>
                </label>
            </div>
            <div className="relative w-[100%]">
                <input
                    placeholder={placeholder}
                    id={label}
                    type={type}
                    min={type === "number" ? 1 : undefined}
                    onChange={onChange}
                    {...props}
                    className={`text-black outline-none  mb-1 focus:outline-none
                    w-full h-12 p-3 rounded-lg border ${error ? "border-[#F55157]" : "border-gray-200 dark:border-[#5c5c5c]"
                        } w-full px-3 py-3 text-base font-normal  bg-inherit `}
                />
                {error && <span className="ps-3 pt-2  font-semibold text-[#F55157]">{error}</span>}
            </div>
        </div>
    );
}