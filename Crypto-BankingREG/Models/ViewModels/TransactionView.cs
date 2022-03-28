namespace Crypto_BankingREG.Models.ViewModels
{
    public class TransactionView
    {
        public string CoinName { get; set; }
        public decimal Amount { get; set; }
        public string BuyOrSell { get; set; }
        public string CryptoAdress { get; set; }
    }
}
