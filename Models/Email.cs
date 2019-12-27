using System.ComponentModel.DataAnnotations;

namespace myportfolio.Models
{
    public class Email
    {
        [Required]
        public string Subject { get; set; }
        [Required]
        [RegularExpression(@"^[\w!#$%&'*+\-/=?\^_`{|}~]+(\.[\w!#$%&'*+\-/=?\^_`{|}~]+)*"
            + "@"
            + @"((([\-\w]+\.)+[a-zA-Z]{2,4})|(([0-9]{1,3}\.){3}[0-9]{1,3}))$")]
        public string From { get; set; }
        [Required]
        public string Message { get; set; }

        override public string ToString()
        {
            return Subject + " by " + From;
        }
    }
}