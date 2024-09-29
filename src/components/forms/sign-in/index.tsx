"use client"

import { FormGenerator } from "@/components/global/form-generator"
import { Button } from "@/components/ui/button"
import { GROUPLE_CONSTANTS } from "@/constants"
import { useAuthSignIn } from "@/hooks/authentication"
import { Loader } from "../../global/loader/index"

type Props = {}

const SignInForm = (props: Props) => {
    const { isPending, onAuthenticateUser, register, errors } = useAuthSignIn()

    return (
        <form
            onSubmit={onAuthenticateUser}
            className="flex flex-col gap-3 mt-10"
        >
            {GROUPLE_CONSTANTS.signInForm.map((field) => (
                <FormGenerator
                    {...field}
                    key={field.id}
                    register={register}
                    errors={errors}
                />
            ))}
            <Button type="submit" className="rounded-2xl">
                <Loader loading={isPending}>Sign in with Email</Loader>
            </Button>
        </form>
    )
}

export default SignInForm
