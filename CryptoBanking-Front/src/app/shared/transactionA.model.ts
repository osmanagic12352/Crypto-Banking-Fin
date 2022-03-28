export class TransactionAsell {
    transactionId: number;
    coinName: string='Cardano';
    amount: number;
    buyOrSell: string='Prodaja';
    cryptoAdress: string;
    userId: string;
}

export class TransactionAbuy {
    transactionId: number;
    coinName: string='Cardano';
    amount: number;
    buyOrSell: string='Kupovina';
    cryptoAdress: string;
    userId: string;
}
