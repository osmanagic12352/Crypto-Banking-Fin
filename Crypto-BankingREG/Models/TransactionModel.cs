using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Crypto_BankingREG.Models
{
    public class TransactionModel
    {
        [Key]
        public int TransactionId { get; set; }

        [Column(TypeName = "nvarchar (20)")]
        public string CoinName { get; set; }

        [Column(TypeName = "decimal (10,4)")]
        public decimal Amount { get; set; }


        [Column(TypeName = "nvarchar (8)")]
        public string BuyOrSell { get; set; }


        [Column(TypeName = "nvarchar (100)")]
        public string CryptoAdress { get; set; }


        //Relacija 1:N - 1 User, više transakcija        
        public ApplicationUser User { get; set; }
        public string UserId { get; set; }

    }
}
