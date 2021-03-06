using System.ComponentModel.DataAnnotations;

namespace myportfolio.Models
{
    public class Email
    {
        [Required]
        public string Subject { get; set; }
        [Required]
        public string From { get; set; }
        [Required]
        public string Message { get; set; }

        override public string ToString()
        {
            return Subject + " by " + From;
        }
    }
}