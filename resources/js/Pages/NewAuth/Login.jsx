import { useForm } from "@inertiajs/react";

export default function LoginPage(){
    const {data, setData, post, errors} = useForm({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const LoginSubmit = () => {
        e.preventDefault();
        post(route('loginSubmit'));
    }

    return (
        <>
        Hello login
        </>
    );
}