import { useForm } from "@inertiajs/react";

export default function LoginPage() {
    const { data, setData, post, errors } = useForm({
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const LoginSubmit = (e) => {
        e.preventDefault();
        post(route('loginSubmit'));
    }

    return (
        <>
            <form onSubmit={LoginSubmit}>
                <input type="text" value={data.username} onChange={(e) => setData('username', e.target.value)} />
                <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                <input type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} />
                <input type="password" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}