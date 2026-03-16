import { useForm } from "@inertiajs/react";

export default function RegisterPage() {
    const { data, setData, post, errors } = useForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const registerSubmit = (e) => {
        e.preventDefault();
        post(route('registerSubmit'));
    }

    return (
        <>
            <form onSubmit={registerSubmit}>
                <input type="text" value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} />
                <input type="text" value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} />
                <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
                <input type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} />
                <input type="password" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}