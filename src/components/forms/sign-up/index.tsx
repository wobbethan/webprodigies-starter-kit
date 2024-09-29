"use client"

import { useAuthSignUp } from "@/hooks/authentication"

type Props = {}

const SignUpForm = (props: Props) => {
    const { register } = useAuthSignUp()
    return <div>SignUpForm</div>
}

export default SignUpForm
