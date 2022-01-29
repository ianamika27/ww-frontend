export default class AuthServices {
    constructor(api) {
        this.api = api;
    }

    async register(name, email, password) {
        return this.api.postJSON('/api/v1/auth/register', { name, email, password });
    }

    async login(email, password) {
        return this.api.postJSON('/api/v1/auth/login', { email, password });
    }

    logout() {
        localStorage.setItem('user', '');
    }
    
    async me() {
        return this.api.getJSON('/api/v1/auth/me');
    }
}