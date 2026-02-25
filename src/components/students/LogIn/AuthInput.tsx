
type AuthInputProps = {
    label: string,
    name: string,
    type: string,
    value: string,
    formChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AuthInput = ({ label, name, type, value, formChangeHandler }: AuthInputProps) => {
    return (
        <div className="flex flex-col items-end gap-2">
            <label className=" text-[12px]">{label}</label>
            <input
                name={name}
                className=" w-[70%] h-8 bg-slate-200 text-slate-600 outline-none rounded-md text-right"
                type={type}
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => formChangeHandler(e)} />
        </div>
    )
}

export default AuthInput