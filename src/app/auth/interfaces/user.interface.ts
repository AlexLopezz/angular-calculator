export interface UserAuthRequest {
    username: string;
    password: string;
}

export interface UserAuthResponse {
    userId:    number;
    sessionId: string;
    mensaje:   string;
}