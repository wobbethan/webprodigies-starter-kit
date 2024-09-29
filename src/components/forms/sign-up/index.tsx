"use client"

import { FormGenerator } from "@/components/global/form-generator"
import { Button } from "@/components/ui/button"
import { GROUPLE_CONSTANTS } from "@/constants"
import { useAuthSignUp } from "@/hooks/authentication"
import dynamic from "next/dynamic"
import { Loader } from "../../global/loader/index"

type Props = {}

const OtpInput = dynamic(
    () =>
        import("@/components/global/otp-input").then(
            (component) => component.default,
        ),
    { ssr: false },
)
const SignUpForm = (props: Props) => {
    const {
        register,
        errors,
        code,
        creating,
        getValues,
        onGenerateCode,
        onInitiateUserRegistration,
        setCode,
        verifying,
    } = useAuthSignUp()
    return (
        <form
            onSubmit={onInitiateUserRegistration}
            className="flex flex-col gap-3 mt-10"
        >
            {verifying ? (
                <div className="flex justify-center mb-5">
                    <OtpInput otp={code} setOtp={setCode} />
                </div>
            ) : (
                GROUPLE_CONSTANTS.signUpForm.map((field) => (
                    <FormGenerator
                        {...field}
                        key={field.id}
                        register={register}
                        errors={errors}
                    />
                ))
            )}
            {verifying ? (
                <Button className="rounded-2xl" type="submit">
                    <Loader loading={creating}>Sign Up with Email </Loader>
                </Button>
            ) : (
                <Button
                    className="rounded-2xl"
                    type="button"
                    onClick={() =>
                        onGenerateCode(
                            getValues("email"),
                            getValues("password"),
                        )
                    }
                >
                    <Loader loading={creating}>Generate Code</Loader>
                </Button>
            )}
        </form>
    )
}

export default SignUpForm
