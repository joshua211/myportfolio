namespace myportfolio.Models
{
    public class Email
    {
        public string Subject { get; set; }
        public string From { get; set; }
        public string Message { get; set; }

        override public string ToString()
        {
            return Subject + " by " + From;
        }
    }
}