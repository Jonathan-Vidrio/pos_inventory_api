interface IClient {
    name: string,
    firstSurname: string,
    secondSurname?: string,
    address: string,
    phone: string,
    status?: number,
}

export default IClient;