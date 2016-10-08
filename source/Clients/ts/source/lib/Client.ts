export interface Client {
    get<Response>(action: string): Promise<Response>;
    put<Response>(action: string, data: any): Promise<Response>;
    post<Response>(action: string, data: any): Promise<Response>;
    delete<Response>(action: string): Promise<Response>;
}