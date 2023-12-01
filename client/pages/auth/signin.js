import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { doRequest, errors } = useRequest({
        url: '/api/users/signin',
        method: 'post',
        body: {
            email, password
        },
        onSuccess: () => Router.push('/')
    });

    const onSubmit = async (event) => {
        event.preventDefault();

        await doRequest();
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Signin</h1>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control"
                       id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password"
                       className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            {errors}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    );
}

export default Signin;