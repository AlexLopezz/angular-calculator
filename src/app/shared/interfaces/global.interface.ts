export interface HeaderRequest {
    userID:     number;
    sessionID:  string;
}

export interface OperationResponse {
    resultado: string;
}

export interface ResulOperationResponse {
    id:         number;
    operations: string;
    result:     number;
}
