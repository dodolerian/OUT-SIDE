const Register = () => {
    return (
        <div>
            <form>
                <h1>Register</h1>
                <label>
                    <p>e-mail</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <label>
                    <p>Confirm Password</p>
                    <input type="password" />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Register;