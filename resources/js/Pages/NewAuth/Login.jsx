import { useForm } from "@inertiajs/react";

export default function LoginPage() {
    const { data, setData, post, errors } = useForm({
        email: '',
        password: '',
    });

    const LoginSubmit = (e) => {
        e.preventDefault();
        post(route('loginSubmit'));
    }

    return (
        <>
            <form onSubmit={LoginSubmit}>
                <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                <input type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}