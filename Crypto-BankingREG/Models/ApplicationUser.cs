using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Crypto_BankingREG.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Column(TypeName = "nvarchar(150)")]
        public string FullName { get; set; }

        [Column(TypeName = "nvarchar(2)")]
        public string Admin { get; set; }

        //Relacija 1:N - 1 User, više transakcija
        public List<TransactionModel> Transakcije { get; set; }

        //Relacija 1:1 - 1 User ima 1 karticu
        public PaymentDetail PaymentDetail { get; set; }
    }
}
